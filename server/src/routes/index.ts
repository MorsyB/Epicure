import express from "express";
import chefsRoutes from "./chefs.routes";
import dishesRoutes from "./dishes.routes";
import ordersRoutes from "./orders.routes";
import restaurantsRoutes from "./restaurants.routes";
import searchRoutes from "./search.routes";
import usersRoutes from "./users.routes";

const router = express.Router();

router.use("/api/chefs/", chefsRoutes);
router.use("/api/dishes/", dishesRoutes);
router.use("/api/search/", searchRoutes)
router.use("/api/users/", usersRoutes)
router.use("/api/orders/", ordersRoutes)
router.use("/api/restaurants/", restaurantsRoutes);

export default router;
