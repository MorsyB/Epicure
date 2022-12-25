import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    try {
      console.log(restaurant)
      const exist = await Restaurants.find({ name: restaurant.name })
      if (!((exist).length > 0)) {
        restaurant = new Restaurants({
          name: restaurant.name,
          chef: restaurant.chef,
          openingDate: restaurant.openDate,
          openingHours: restaurant.open,
          closingHours: restaurant.close,
          img: "https://github.com/MorsyB/Epicure/blob/main/epicure/src/Data/Pictures/claro.svg",
          dishes: restaurant.dishes
        });

        const response = await Restaurants.create(restaurant);
        const result = await Chefs.findOne({ name: response.chef }).updateOne({
          $push: { restaurants: response.name },
        });
        return response;
      }
    }
    catch (e) { console.log(e) }
  }

  public findAll() {
    return Restaurants.find();
  }
}
