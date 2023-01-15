import Chefs from "../db/models/chefs";
import Orders from "../db/models/orders";
import Dishes from "../db/models/dishes";

export class OrdersDal {
    public async createOrder(order: any) {
        const dishes = await Dishes.find({ restaurant: order.restaurant })
        let price = 0;
        dishes.filter((dish: any) => { return order.dishes.includes(dish.name) }).forEach((dish: any) => { price += dish.price;})

        try {
            order = new Orders({
                user: order.user,
                restaurant: order.restaurant,
                dishes: order.dishes,
                price: price,
                active: true,
            });

            const response = await Orders.create(order);
            return response;
        }
        catch (e) { console.log(e) }
    }

    public getActiveOrder(userName: String) {
        return Orders.findOne({ user: userName, active: true });
    }

    public getOrders(userName: String) {
        return Orders.find({ user: userName, active: false });
    }

}
