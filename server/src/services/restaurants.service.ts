import { RestaurantsDal } from "../dal/restaurants.dal";

export class RestaurantsService {
  public async getRestaurants() {
    const dal = new RestaurantsDal();
    const res = await dal.findAll();
    return res;
  }
  public async getRestaurantsByChef(chef:any) {
    const dal = new RestaurantsDal();
    const res = await dal.findAllByChef(chef);
    return res;
  }
  public async getRestaurantByName(restaurant:any) {
    const dal = new RestaurantsDal();
    const res = await dal.findRestaurant(restaurant);
    return res;
  }
  public async getPopularRestaurants(chef:any) {
    const dal = new RestaurantsDal();
    const res = await dal.getPopularRestaurants();
    return res;
  }

  public async createRestaurant(restaurant: any) {
    const dal = new RestaurantsDal();
    const res = dal.createRestaurant(restaurant);
    return res;
  }
}
