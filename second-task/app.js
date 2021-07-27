const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//importam env pentru a ascunde link-ul de la baza de date
require("dotenv/config");

//import Routes
const employeeRoute = require("./routes/employee");
const projectRoute = require("./routes/projects");

app.use("/employee", employeeRoute);
app.use("/projects", projectRoute);
//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, //link baza de date MongoDB
  { useNewUrlParser: true },
  () => {
    console.log("CONNECTED TO DB");
  }
);

app.listen(4000);
