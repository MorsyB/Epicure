import { Router } from "express";
import { Request, Response } from "express";
import { ChefsController } from "../controllers/chefsController";
import Chefs from "../db/models/chefs";

const router = Router();

router.get("/getChefs", ChefsController.getChefs);
router.get("/getChef", ChefsController.getChef);
router.get("/getChefOfTheWeek", ChefsController.getChefOfTheWeek);
// router.post("/addVisits", async (req: Request, res: Response) => {
//     console.log("VISITS ADDED")
//     const allChefs = await Chefs.find().update({}, { $set: { "visits": 0 } })
//     console.log(allChefs)
//     return res.status(200).json("DONE!")
// })
router.post("/createChef", ChefsController.createChef);
router.post("/updateChef", ChefsController.updateChef);

export default router;
