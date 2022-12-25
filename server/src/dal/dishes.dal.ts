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
                    img: "IMG",
                    dishMenu: dish.dishMenu,
                    dishType: dish.dishType
                });
                const response = await Dishes.create(dish);
                const result = await Restaurants.findOne({ name: response.restaurant }).updateOne({
                    $push: { Dishes: response.name },
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

    public async getDish(param: { [key: string]: string }) {
        const data = await Dishes.aggregate([
            { $match: { name: `${param.name}` } },
            {
                $lookup: {
                    localField: "restaurants",
                    foreignField: "_id",
                    from: "restaurants",
                    as: "restaurants",
                },
            },
        ]);
        return data;
    }
}
