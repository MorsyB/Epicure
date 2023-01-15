import { Chef, Dish, Restaurant } from "../Types/Types";
import restaurantPic from "./Pictures/claro.svg";
import chefIMG from "./Pictures/yossi1.svg"
import spicy from "./Pictures/spicySmall.svg";
import vegan from "./Pictures/veganSmall.svg";
import vegetarian from "./Pictures/vegetarianSmall.svg";

const dishIng = "Salt, Sugar, Something-else, Kemiri Nuts, Shallots";

export const AllRestaurants: Array<Restaurant> = [
    {
        name: "Restaurant1",
        chef: "Chef1",
        dishesID: [1, 5, 6, 7],
        openingHours: "12:00",
        closingHours:"23:00",
        picture: restaurantPic,
        visits: 15,
        date: '10/5/2022'
    },
    {
        name: "Restaurant2",
        chef: "Chef2",
        dishesID: [1, 3, 7],
        openingHours: "10:00",
        closingHours:"20:00",
        picture: restaurantPic,
        visits: 10,
        date: '10/11/2022'
    },
    {
        name: "Restaurant3",
        chef: "Chef1",
        dishesID: [2, 3, 4],
        openingHours: "09:00",
        closingHours:"22:00",
        picture: restaurantPic,
        visits: 12,
        date: '7/12/2022'
    },
    {
        name: "Restaurant4",
        chef: "Chef1",
        dishesID: [4, 5, 6, 7],
        openingHours: "15:00",
        closingHours:"22:00",
        picture: restaurantPic,
        visits: 1,
        date: '8/12/2022'
    },
    {
        name: "Restaurant5",
        chef: "Chef1",
        dishesID: [1, 2, 3, 5],
        openingHours: "18:00",
        closingHours:"02:00",
        picture: restaurantPic,
        visits: 22,
        date: '7/12/2022'
    },
    {
        name: "Restaurant6",
        chef: "Chef1",
        dishesID: [1, 2, 3, 5],
        openingHours: "18:00",
        closingHours:"02:00",
        picture: restaurantPic,
        visits: 22,
        date: '7/12/2022'
    }
]

export const AllDishes: Array<Dish> = [
    {
        name: "Pad Ki Mao",
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: spicy,
        price: 69,
        visits:0
    },
    {
        name: "Dish2",
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: vegan,
        price: 24,
        visits:0
    },
    {
        name: "Dish3",
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: vegetarian,
        price: 56,
        visits:0
    },
    {
        name: "Dish4",
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: spicy,
        price: 67,
        visits:0
    },
    {
        name: "Dish5",        
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: spicy,
        price: 50,
        visits:0
    },
    {
        name: "Dish6",
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: vegan,
        price: 49,
        visits:0
    },
    {
        name: "Dish7",
        img: restaurantPic,
        restaurant:"string",
        about:"string",
        dishMenu:"string",
        dishType: spicy,
        price: 35,
        visits:0
    },

]
export const AllChefs: Array<Chef> = [
    {
        name: "Chef1",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [1, 2, 3],
        img: chefIMG,
        visits:0
    },
    {
        name: "Chef2",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [3, 4, 5],
        img: chefIMG,
        visits:0

    },
    {
        name: "Chef3",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [2, 3, 4],
        img: chefIMG,
        visits:0

    },
    {
        name: "Chef4",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [1, 2, 4],
        img: chefIMG,
        visits:0
    },


]

export const Colors = {
    black: "#000",
    grey: "#979797",
    lightYellow: "#F9F4EA",
    yellow: "#E19D1A",
    lightGrey: "#FAFAFA"
}