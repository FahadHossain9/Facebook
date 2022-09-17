const mongoose = require("mongoose");

module.exports = () => {

    try {
        mongoose.connect(process.env.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('database url: ' + process.env.url);
        console.log("Successfully connectd to mongoDB database server ...");
    } 
    catch (error) {
        console.log(error);
        console.log("Could not connect to database !!!!");
    }
};