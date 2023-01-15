import Dishes from "../db/models/dishes";
import Restaurants from "../db/models/restaurants";

export class DishesDal {
    public async createDish(dish: any) {
        console.log(dish)
        try {
            const exist = await Dishes.find({ name: dish.name })
            if (!((exist).length > 0)) {
                dish = new Dishes({
                    name: dish.name,
                    price: dish.price,
                    about: dish.about,
                    restaurant: dish.restaurant,
                    img: "https://github.com/MorsyB/Epicure/blob/main/epicure/src/Data/Pictures/dish.svg",
                    dishMenu: dish.category,
                    dishType: dish.type
                });
                const response = await Dishes.create(dish);
                const result = await Restaurants.findOne({ name: response.restaurant }).updateOne({
                    $push: { dishes: response.name },
                });
                return response;
            }

        }
        catch (e) {
            console.log(e)
        }
    }

    public async updateDish(dish: any) {
        const data = await Dishes.findOne({
            name: dish.name,
        }).updateOne({ $set: { about: dish.about } });
        return data;
    }

    public findAll(query: any = null) {
        return Dishes.find(query);
    }
    public async getPopularDishes(query: any = null) {
        const allDishes = await Dishes.find(query);
        return this.mostPopular(allDishes);
    }

    public async getDishesByRestaurant(rest: any) {
        const data = await Dishes.find({ restaurant: rest });
        return data;
    }

    private mostPopular(Dishes: Array<any>): Array<any> {
        let mostVisits = [-1, -1, -1]
        let result: Array<any> = []
        for (let i = 0; i < Dishes.length; i++) {
            if (Dishes[i].visits > mostVisits[0]) {
                mostVisits[2] = mostVisits[1]
                mostVisits[1] = mostVisits[0]
                mostVisits[0] = Dishes[i].visits
            } else {
                if (Dishes[i].visits > mostVisits[1]) {
                    mostVisits[2] = mostVisits[1]
                    mostVisits[1] = Dishes[i].visits
                }
                else if (Dishes[i].visits > mostVisits[2]) {
                    mostVisits[2] = Dishes[i].visits
                }
            }
        }
        for (let i = 0; i < Dishes.length; i++)
            if (Dishes[i].visits == mostVisits[0]) {
                result.push(Dishes[i])
                mostVisits[0] = i;
                break;
            }
        for (let i = 0; i < Dishes.length; i++)
            if (Dishes[i].visits == mostVisits[1] && i != mostVisits[0]) {
                result.push(Dishes[i])
                mostVisits[1] = i;
                break;
            }
        for (let i = 0; i < Dishes.length; i++)
            if (Dishes[i].visits == mostVisits[2] && i != mostVisits[1] && i != mostVisits[0]) {
                result.push(Dishes[i])
                break
            }
        return result
    }

}
