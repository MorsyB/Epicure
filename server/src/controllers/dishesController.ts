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
  public static async getPopularDishes(req: Request, res: Response) {
    try {
      const service = new DishesService();
      const Dishes = await service.getPopularDishes();
      return res.send(Dishes);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async createDish(req: Request, res: Response) {
    try {
      const params = req.body;
      const service = new DishesService();
      const Dish = await service.createDish(params);
      return res.status(200).send(JSON.parse("Completed successfully"));
    } catch (error) {
      return res.send(error);
    }
  }

  public static async getDishByRestaurant(req: Request, res: Response) {
    try {
      const params = req.params.Restaurant;
      const service = new DishesService();
      const Dishes = await service.getDishesByRestaurant(params);
      return res.status(200).send(JSON.stringify(Dishes));
    } catch (e) {
      return res.send(e)
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
