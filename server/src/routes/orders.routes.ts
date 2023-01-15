import { Router } from "express";
import { Request, Response } from "express";
import Orders from "../db/models/orders";


import { OrdersController } from "../controllers/OrdersController";

const router = Router();

router.get("/getOrders/:name", OrdersController.getOrders);
router.get("/getActiveOrder/:name", OrdersController.getActiveOrder);

// router.post("/addVisits", async (req: Request, res: Response) => {
//     console.log("VISITS ADDED")
//     const allRest = await Restaurants.find().update({}, { $set: { "visits": 0 } })
//     console.log(allRest)
//     return res.status(200).json("DONE!")
// })
router.post("/createOrder", OrdersController.createOrder);

export default router;
