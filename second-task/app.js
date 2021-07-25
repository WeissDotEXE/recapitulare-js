const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser=require('body-parser');



//importam env pentru a ascunde link-ul de la baza de date
require('dotenv/config');

app.use(bodyParser.json());
//import Routes
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);
//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, //link baza de date MongoDB
  { useUnifiedTopology: true },
  () => {
    console.log("connect to db");
  }
);

app.listen(5000);
