import { Request, Response } from "express";
import { RestaurantsService } from "../services/restaurants.service";

export class RestaurantsController {
  public static async getRestaurants(req: Request, res: Response) {
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurants();
    return res.send(restaurants);
  }
  public static async getRestaurantsByChef(req: Request, res: Response) {
    const chef = req.params.chef;
    const service = new RestaurantsService();
    const restaurants = await service.getRestaurantsByChef(chef);
    return res.send(restaurants);
  }
  public static async getRestaurantByName(req: Request, res: Response) {
    const restaurantName = req.params.restaurant;
    const service = new RestaurantsService();
    const restaurant = await service.getRestaurantByName(restaurantName);
    return res.send(restaurant);
  }
  public static async getPopularRestaurants(req: Request, res: Response) {
    const chef = req.params.chef;
    const service = new RestaurantsService();
    const restaurants = await service.getPopularRestaurants(chef);
    return res.send(restaurants);
  }

  public static async createRestaurant(req: Request, res: Response) {
    const params = req.body;
    const service = new RestaurantsService();
    const restaurant = await service.createRestaurant(params);
    return res.send(restaurant);
  }
}
