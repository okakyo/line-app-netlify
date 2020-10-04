import { Router } from "express";
import { lineRouter } from "./line";
const router = Router();

router.get("/", (req, res) => {
  res.json("Hello Netlify");
});
router.use("/line", lineRouter);

export const baseController = router;
