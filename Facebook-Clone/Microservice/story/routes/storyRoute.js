const router = require('express').Router();

const { Story } = require('../models/story.js');
const minioClient = require('../configuration/objectDatabase.js');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/story', (req, res) => {
    Story.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching story data: ' + JSON.stringify(err, undefined, 2));
    });
});

// router.post("/story", (req, res) => {
//     try {
//         console.log(req.body)
//         new Story({
//             fullName: req.body.fullName,
//             id: req.body.id,
//             date: req.body.date,
//         }).save((err, doc) => {
//             if(err) res.status(402).send({ message: "Error at saving story id data !!!", error: err});
//             else res.status(200).send({ message: "Story id saved successfully ..." });
//         }); 
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error at storing story id" });
//     }
// })

router.post("/image", upload.single('image'), (req, res) => {  

    minioClient.makeBucket(process.env.MINIO_BUCKET, 'us-east-1', function(err) {
        if (err) return console.log('Error creating bucket.', err)
        console.log('Bucket created successfully in "us-east-1".')
      })

    try { 
        console.log('kazi');
        var filePath = "/Users/fahadhossain/fb-clone/fb-clone/Microservice/story/" + req.file.path;
        var fileName = new Date().getTime().toString() + ".png";
        
        var metaData = {
            'Content-Type': 'application/octet-stream', 
            'X-Amz-Meta-Testing': 1234,
            'example': 5678
        };
        minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err){ 
                return res.status(402).send({ message: "Error at saving image data !!!", error: err});
            }
        });

        new Story({
            fullName: "test",
            id: fileName,
            date: new Date(),
        }).save((err, doc) => {
            if(err) res.status(402).send({ message: "Error at saving story id data !!!", error: err});
            else res.status(200).send({ message: "Story id and image saved successfully ..." });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});
 
router.get("/image/:id", (req, res) => {
    try {
        let data;
        minioClient.getObject(process.env.MINIO_BUCKET, req.params.id, (err, objStream) => {
            if(err) {
                return res.status(404).send({ message: "Image not found" });
            }
            objStream.on('data', (chunk) => {
                data = !data ? new Buffer(chunk) : Buffer.concat([data, chunk]);
            });
            objStream.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                res.write(data);
                res.end();
            });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at fetching image" });
    }
});

router.post("/image/path", (req, res) => {
    try {   
        var filePath = req.body.filePath;
        var metaData = req.body.metaData;
        var fileName = new Date().getTime().toString() + ".png";
        minioClient.fPutObject(process.env.MINIO_BUCKET, fileName, filePath, metaData, function(err, etag) {
            if (err) { 
                return res.status(401).send({ message: "Error at saving image data !!!", error: err, errorTag: etag});
            }
            res.status(200).send({ message: "Image saved successfully ..." });
        });

        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error at posting image" });
    }
});

module.exports = router;