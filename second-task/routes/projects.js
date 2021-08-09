const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");
const user=require('../routes/users');
//afisare proeicte (GET)
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
    res.send(employees);
  } catch (error) {
    res.json({ message: "something is wrong" });
  }
});

//query pentru angajat
// router.get('/query',async(req,res)=>{
//   const {name}=req.query;
//   if(name){
//     res.json()
//   }
//   res.send(req.query)
// })

//adaugare proiect (POST)
router.post("/", async (req, res) => {
  console.log(req.body)
  const project = new Projects({
    Project_name: req.body.Project_name,
    Start_date: req.body.Start_date,
    Planned_end_date: req.body.Planned_end_date,
    Description: req.body.Description,
    Project_code: req.body.Project_code,
  });
  try {
    const savedProject = await project.save();
    res.json(savedProject);
  } catch (error) {
    res.json({ message: error });
  }
});

//update proiect (PATCH/PUT)
router.patch("/:projectId",async (req, res) => {
  try {
    const updatedProject = await Projects.updateOne({
      _id: req.params.projectId,
    });
    res.json(updatedProject);
  } catch (error) {
    res.json({ message: "error" });
  }
});

//stergere proiect (DELETE)
router.delete("/:projectId", async (req, res) => {
  try {
    const removedProject = await Projects.remove({ _id: req.params.projectId });
    res.json(removedProject);
  } catch (error) {
    res.json({ message: "something wrong" });
  }
});
module.exports = router;
