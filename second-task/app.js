const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//Middlewares
app.use(cors());

//importam env pentru a ascunde link-ul de la baza de date
require("dotenv/config");

app.use(bodyParser.json());
//import Routes
const employeeRoute = require("./routes/employee");

app.use("/employee", employeeRoute);
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

app.listen(5000);
