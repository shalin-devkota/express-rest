import express from 'express'
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({message:"Hello World!"})
})

router.get("/new",(req,res)=>{
    res.json({message:"New World!"})
})
export default router;