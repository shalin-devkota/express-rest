import express from "express";

const router = express.Router(); 

import {createPost,getPost} from '../controllers/post.js'

router.get("/",(req,res)=>{
    res.json({message:"This is a lost of postst"})
})

router.post("/new",createPost)



router.get("/:id",getPost)
    
export default router;