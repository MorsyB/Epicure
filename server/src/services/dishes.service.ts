import { DishesDal } from "../dal/dishes.dal";

export class DishesService {
  public async getDishes() {
    const dal = new DishesDal();
    const res = await dal.findAll();
    return res;
  }
  public async getPopularDishes() {
    const dal = new DishesDal();
    const res = await dal.getPopularDishes();
    return res;
  }
  public async getDishesByRestaurant(restaurant: any) {
    const dal = new DishesDal();
    const res = await dal.getDishesByRestaurant(restaurant);
    return res;
  }

  public async createDish(dish: any) {
    const dal = new DishesDal();
    const res = dal.createDish(dish);
    return res;
  }

  public async updateDish(dish: any) {
    const dal = new DishesDal();
    const res = await dal.updateDish(dish);
    return res;
  }
}
