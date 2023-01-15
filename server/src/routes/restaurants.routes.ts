import { Router } from "express";
import { Request, Response } from "express";
import Restaurants from "../db/models/restaurants";


import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.get("/getRestaurantsByChef/:chef", RestaurantsController.getRestaurantsByChef);
router.get("/getRestaurantByName/:restaurant", RestaurantsController.getRestaurantByName);
router.get("/getPopularRestaurants/", RestaurantsController.getPopularRestaurants);
// router.post("/addVisits", async (req: Request, res: Response) => {
//     console.log("VISITS ADDED")
//     const allRest = await Restaurants.find().update({}, { $set: { "visits": 0 } })
//     console.log(allRest)
//     return res.status(200).json("DONE!")
// })
router.post("/createRestaurant", RestaurantsController.createRestaurant);

export default router;
