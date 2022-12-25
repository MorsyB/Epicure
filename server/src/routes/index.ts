import express from "express";
import chefsRoutes from "./chefs.routes";
import dishesRoutes from "./dishes.routes";
import restaurantsRoutes from "./restaurants.routes";

const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/dishes/", dishesRoutes);
router.use("/api/restaurants/", restaurantsRoutes);

export default router;
