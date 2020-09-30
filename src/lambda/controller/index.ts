
import {Router} from "express";
import {lineRouter} from "./line";
const router = Router();


router.get("/",(req,res)=>{
    res.json("unko");
})
router.use("/sample",lineRouter);


export const baseController = router;