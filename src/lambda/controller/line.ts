import {Router} from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.json("monkey");
});

router.post("/index",(req,res) =>{
    res.json("magic")
});

export const lineRouter = router;