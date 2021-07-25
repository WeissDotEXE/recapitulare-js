const express = require("express");
const app = new express();

const auth=require('./routes/auth');
const people =require('./routes/people');

//static assets
app.use(express.static("./methods-public"));
//parse from data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/login',auth);
app.use('/api/people', people);

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
