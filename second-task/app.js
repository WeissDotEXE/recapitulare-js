const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute=require('./routes/post');

//Middlewares
app.use(cors());
app.use(express.json());  //important pentru body(altfel ar fi gol);
// app.use(express.urlencoded());

const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect();
})();

//importam env pentru a ascunde link-ul de la baza de date
require("dotenv/config");

//import Routes
const employeeRoute = require("./routes/employee");
const projectRoute = require("./routes/projects");
const registerRoute=require("./routes/users");

app.use("/employee", employeeRoute);
app.use("/projects", projectRoute);
app.use("/api",registerRoute);
app.use("/api/posts",postRoute)
//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, //link baza de date MongoDB
  { useNewUrlParser: true },
  { useUnifiedTopology: true },
  () => {
    console.log("CONNECTED TO DB");
  }
);

app.listen(4000);
