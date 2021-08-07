const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kjsdkhsjladhjkahfiuwlwef23erfcds23naugie";
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
  const { name, password: plainTextPassword, email } = req.body;

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const res = await User.create({
      name,
      password,
      email,
    });
    console.log(res);
    res.json(savedUser);
  } catch (error) {
    res.send({ message: "error" });
  }
});

//get request for testing login
// router.get("/login", async (req, res) => {
//   const { email, password } = req.body;
// });

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();
  if (!user) {
    return res.json({ stauts: "error", error: "invalid username/password" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    console.log(token);
    return res.json({ status: "ok", data: token });
  }

  
});

module.exports = router;
