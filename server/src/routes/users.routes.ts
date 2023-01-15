import { Router } from "express";
import { Request, Response } from "express";
import Users from "../db/models/users";
import { UsersController } from "../controllers/UsersController";

const router = Router();

router.get("/getUser/:email/:password",UsersController.getUser);
// router.post("/addVisits", async (req: Request, res: Response) => {
//     console.log("VISITS ADDED")
//     const allRest = await Restaurants.find().update({}, { $set: { "visits": 0 } })
//     console.log(allRest)
//     return res.status(200).json("DONE!")
// })
router.post("/createUser", UsersController.createUser);

export default router;
