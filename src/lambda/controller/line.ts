import {Router} from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.json("monkey");
});

router.get("/index",(req,res) =>{
    res.json("magic")
});

export const lineRouter = router;