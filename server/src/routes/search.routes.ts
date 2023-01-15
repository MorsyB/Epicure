import { Router } from "express";
import { Request, Response } from "express";
import { DishesController } from "../controllers/DishesController";
import Chefs from "../db/models/chefs";
import Dishes from "../db/models/dishes";
import Restaurants from "../db/models/restaurants";

const router = Router();

router.get("/getAllData", async (req, res) => {
    try {
        const allRest = await Restaurants.find()
        const allChefs = await Chefs.find()
        const allDishes = await Dishes.find()
        const resArray = [allRest, allChefs, allDishes]
        return res.status(200).json(resArray)
    } catch (error) {
        return res.status(400).json(error)
    }
});

export default router;
