import { Router } from "express";
import { DishesController } from "../controllers/DishesController";

const router = Router();

router.get("/getDishes", DishesController.getDishes);
router.get("/getDish", DishesController.getDish);
router.post("/createDish", DishesController.createDish);
router.post("/updateDish", DishesController.updateDish);

export default router;
