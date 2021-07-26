const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

//acesta AFISEAZA angajatii
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find(); //o sa afiseze toate elementele din acel obiect
    res.json(employees);
    res.send(employees);
  } catch (error) {
    res.json({ message: "error" });
  }
});
//acesta TRIMITE angajatii
router.post("/", async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    adress: req.body.adress,
    email: req.body.email,
    hire_date: req.body.data,
    salary: req.body.salary,
    job_title: req.body.job_title,
  });
  try {
    const savedEmployee = await employee.save();
    res.json(savedEmployee);
  } catch (error) {
    res.json({ message: "error" });
  }
});
// gasirea unui angajat dupa id
router.get("/:employeeId", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.postId);
    res.json(employee);
  } catch (error) {
    res.json({ message: error });
  }
});

//update angajat (patch)
router.patch("/:employeeId",async(req,res)=>{
  try{
    const updateEmployee=await Employee.updateOne({_id:req.params.employeeId},{$set:{name:req.body.name}})
    res.json(updateEmployee);
  }
  catch(error){
    res.json({message:error});
  }
})

//delete employee
router.delete("/:employeeId", async (req, res) => {
  try {
    const removedEmployee=await Employee.remove({ _id: req.params.employeeId });
    res.json(removedEmployee);
  } catch (error) {
    res.json({message: error})
  }
});
module.exports = router;
