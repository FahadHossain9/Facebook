require("dotenv").config();

// import node pakage 
const express = require("express");
const cors = require("cors");

// import db connection file
const connectDB = require("./configuration/database.js");
const connectObjectDb = require("./configuration/objectDatabase.js");

//import routes
const storyRoute = require('./routes/storyRoute.js');

const app = express();

// DB connection
connectDB();
console.log("connected minio object storage at: http://" + connectObjectDb.host + ":" + connectObjectDb.port);

// middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://10.100.104.14:3000", "*"],
  credentials: true
}));


// routes
app.use('/api/post', storyRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('llistening on port ' + port + ' ...'));