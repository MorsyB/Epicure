import { Request, Response } from "express";
import { DishesService } from "../services/Dishes.service";

export class DishesController {
  public static async getDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const Dishes = await service.getDishes();
      return res.send(Dishes);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getDish(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const param = req.body;
      const Dish = await service.getDish(param);
      return res.send(Dish);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const Dish = await service.createDish(params);
      console.log(Dish)
      return res.status(200).send(JSON.parse("Completed successfully"));
    } catch (error) {
      return res.send(error);
    }
  }

  public static async updateDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const Dish = await service.updateDish(params);
      return res.send(Dish);
    } catch (error) {
      return res.send(error);
    }
  }
}
