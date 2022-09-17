const router = require('express').Router();
const Joi = require('joi');
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    console.log(req);
    User.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching user data: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post('/register',async(req,res)=>{
    var new_user = new User({
        firstname:req.body.firstname,
        email:req.body.email,
        password:User.hashPassword(req.body.password),
        
    });

    const users = await User.find();
    var isDuplicate = false;

    for(let user of users)
    {
        if(user.email == new_user.email)
        {
            isDuplicate = true;
        }
    }
     
    if(!isDuplicate) 
    {
        let promise = new_user.save();

        promise.then((doc)=>{
            return res.status(201).json(doc);
        })

        promise.catch((err)=>{
            return res.status(501).json({message:'Error Registering'})
        })
    }
    else
    {
        res.status(501).json({message:'This email already has an account'})
    }
    

});

router.post("/", async (req, res) => {
    try {
        
        if(error) {
            return res.status(400).send({message: error.details[0].message});
        }

        console.log(req.body)

        const user = await User.findOne({email: req.body.email});
        console.log("Here ........")

        
        if(user)
            return res.status(409).send({message: "User with given email alread exists !!!"});
        
     //store user data and passsword 
        new User({
            ...req.body,
            password: User.hashPassword(req.body.password)
        }).save((err, doc) => {
            if(err) res.status(402).send({message: "error at saving user data"});
            else res.status(201).send({ message: "User created successfully" });
        });
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error !!!" });
    }
});

router.post("/login", async(req, res) => {
    const user = await User.findOne({email:req.body.email});
    if(!user)
    {
         return res.status(201).send(false)
    }

    const isValidPassword = await bcrypt.compareSync(req.body.password,user.password);

    if(!isValidPassword) 
    {
        return res.status(201).send(false)
    }
    const token = jwt.sign({_id:user._id}, process.env.JWT_PVT_KEY, {expiresIn: "7d"});
    
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json(token); 
  }); 

router.post('/loggedin',async(req,res)=>{
    console.log("kaj hoise")
    const token = req.body.cookies; 
    console.log(token)
    const data = jwt.verify(token, process.env.JWT_PVT_KEY);
    console.log(data)

    const logged_user = await User.findOne({_id:data._id});
    res.send(logged_user); 
});

module.exports = router;