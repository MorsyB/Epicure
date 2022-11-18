import { Chef, Dish, Restaurant } from "../Types/Types";
import restaurantPic from "./Pictures/claro.png";
import chefIMG from "./Pictures/yossi.png"

export const AllRestaurants: Array<Restaurant> = [
    {
        name: "Restaurant1",
        owner: "Chef1",
        dishesID: [1, 5, 6, 7],
        picture: restaurantPic
    },
    {
        name: "Restaurant2",
        owner: "Chef2",
        dishesID: [1, 3, 7],
        picture: restaurantPic
    },
    {
        name: "Restaurant1",
        owner: "Chef1",
        dishesID: [2, 3, 4],
        picture: restaurantPic
    },
    {
        name: "Restaurant1",
        owner: "Chef1",
        dishesID: [4, 5, 6, 7],
        picture: restaurantPic
    },
    {
        name: "Restaurant1",
        owner: "Chef1",
        dishesID: [1, 2, 3, 5],
        picture: restaurantPic
    }
]

export const AllDishes: Array<Dish> = [
    {
        name: "Dish1",
        ingredients: ["salt", "something-else", "paper", "sugar", "milk"],
        picture: restaurantPic,
        price: 69
    },
    {
        name: "Dish2",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        price: 24
    },
    {
        name: "Dish3",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        price: 56
    },
    {
        name: "Dish4",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        price: 67
    },
    {
        name: "Dish5",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        price: 50
    },
    {
        name: "Dish6",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        price: 49
    },
    {
        name: "Dish7",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        price: 35
    },

]
export const AllChefs: Array<Chef> = [
    {
        name: "Chef1",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [1, 2, 3],
        picture: chefIMG,
    },
    {
        name: "Chef2",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [3, 4, 5],
        picture: chefIMG,
    },
    {
        name: "Chef3",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [2, 3, 4],
        picture: chefIMG,
    },
    {
        name: "Chef4",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [1, 2, 4],
        picture: chefIMG,
    },


]