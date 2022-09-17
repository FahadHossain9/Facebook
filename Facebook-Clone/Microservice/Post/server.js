require('dotenv').config()
const express = require("express");
const cors = require("cors");
const connectDB = require("./configuration/database");
const app = express();

//rest api routes

const postRoute = require('./routes/posts');

//db connection
connectDB();

//middlewire
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://10.100.104.14:3000", "*"],
    credentials: true
  }));


//routes
app.use('/api/post', postRoute);

//listen
const port = process.env.PORT || 2000;
app.listen(port, () => console.log('llistening on port ' + port + ' ...'));