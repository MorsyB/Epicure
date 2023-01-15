import { Router } from "express";
import { Request, Response } from "express";
import { DishesController } from "../controllers/DishesController";
import Dishes from "../db/models/dishes";

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.get("/getDishesByRestaurant/:Restaurant", DishesController.getDishByRestaurant);
router.get("/getPopularDishes", DishesController.getPopularDishes);
// router.post("/addVisits", async (req: Request, res: Response) => {
//     console.log("VISITS ADDED")
//     const allChefs = await Dishes.find().update({}, { $set: { "visits": 0 } })
//     console.log(allChefs)
//     return res.status(200).json("DONE!")
// })
router.post("/createDish", DishesController.createDish);
router.post("/updateDish", DishesController.updateDish);

export default router;
