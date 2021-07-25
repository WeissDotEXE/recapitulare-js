const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try{
        const posts=await Post.find(); //o sa afiseze toate elementele din acel obiect
        res.json(posts)
        res.send(posts)
    }
    catch(error){
        res.json({message:'error'})
    }
});

router.post("/",async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try{
    const savedPost = await post.save()
    res.json(savedPost)
  }
  catch(error){
    res.json({message:"error"});
  }
});

module.exports = router;
