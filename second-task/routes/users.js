const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../routes/validation");

require("dotenv").config();

//get request for testing register
router.get("/register", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
    res.send(user);
  } catch (error) {
    res.json({ message: "something is wrong" });
  }
});

//post request
router.post("/register", async (req, res) => {
  //validate the data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //checking if user is already in db
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  //validate the data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if email is in database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email doesn't exist");

  //checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //create and assign a token
  const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
  res.header('auth-token',token).send(token);
  
});

module.exports = router;
