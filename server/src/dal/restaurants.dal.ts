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

  public async getPopularRestaurants() {
    const allRestaurants = await Restaurants.find();
    return this.mostPopular(allRestaurants);
  }

  public findAllByChef(chef: any) {
    return Restaurants.find({ chef: chef });
  }
  public findRestaurant(restaurant: any) {
    return Restaurants.findOne({ name: restaurant });
  }

  private mostPopular(Restaurants: Array<any>): Array<any> {
    let mostVisits = [-1, -1, -1]
    let result:Array<any> = []
    for (let i = 0; i < Restaurants.length; i++) {
      if (Restaurants[i].visits > mostVisits[0]) {
        mostVisits[2] = mostVisits[1]
        mostVisits[1] = mostVisits[0]
        mostVisits[0] = Restaurants[i].visits
      } else {
        if (Restaurants[i].visits > mostVisits[1]) {
          mostVisits[2] = mostVisits[1]
          mostVisits[1] = Restaurants[i].visits
        }
        else if (Restaurants[i].visits > mostVisits[2]) {
          mostVisits[2] = Restaurants[i].visits
        }
      }
    }
    for (let i = 0; i < Restaurants.length; i++)
      if (Restaurants[i].visits == mostVisits[0]) {
        result.push(Restaurants[i])
        mostVisits[0] = i;
        break;
      }
    for (let i = 0; i < Restaurants.length; i++)
      if (Restaurants[i].visits == mostVisits[1] && i != mostVisits[0]) {
        result.push(Restaurants[i])
        mostVisits[1] = i;
        break;
      }
    for (let i = 0; i < Restaurants.length; i++)
      if (Restaurants[i].visits == mostVisits[2] && i != mostVisits[1]) {
        result.push(Restaurants[i])
        break
      }
    return result
  }
}
