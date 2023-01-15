import { AllDishes, AllRestaurants } from "../../Data/Data";
import RestaurantsCardDesktop from "../RestaurantCard/RestaurantCardDesktop/RestaurantCardDesktop";
import { AllItemsBTN, IconDiv, IconLabel, IconsDiv, OurIcons, PopularDiv, PopularItemsDiv, PopularTitle } from "./styles";
import arrows from "../../Data/Pictures/right-arrows.png"
import spicy from "../../Data/Pictures/spicyBig.svg"
import vegan from "../../Data/Pictures/veganBig.svg"
import vegetarian from "../../Data/Pictures/vegetarianBig.svg"
import DishCardDesktop from "../DishCard/DishCardDesktop/DishCardDesktop";
import { useNavigate } from "react-router-dom";
import { Dish, Restaurant } from "../../Types/Types";

function PopularRestaurants(props: { Dishes: Array<Dish>, Restaurants: Array<Restaurant> }) {
    const navigate = useNavigate();
    const popularDishes = props.Dishes
    const popularRestaurants = props.Restaurants
    return <PopularDiv>
        <PopularTitle>popular restaurant in epicure:</PopularTitle>
        <PopularItemsDiv>
            {popularRestaurants.map((restaurant, i) => { return <RestaurantsCardDesktop key={i} restaurant={restaurant}></RestaurantsCardDesktop> })}
        </PopularItemsDiv>
        <AllItemsBTN onClick={() => navigate("/Restaurants")}>All restaurants <img src={arrows} /></AllItemsBTN>
        <br />
        <PopularTitle>SIGNATURE DISH OF:</PopularTitle>
        <PopularItemsDiv>
            {popularDishes.map((dish,i) => { return <DishCardDesktop key={i} dish={dish}></DishCardDesktop> })}
        </PopularItemsDiv>
        <OurIcons>
            <PopularTitle>THE MEANING OF OUR ICONS:</PopularTitle>
            <IconsDiv>
                <IconDiv>
                    <img height="60px" src={spicy} />
                    <IconLabel>Spicy</IconLabel>
                </IconDiv>
                <IconDiv>
                    <img height="60px" src={vegan} />
                    <IconLabel>Vegan</IconLabel>
                </IconDiv>
                <IconDiv>
                    <img height="60px" src={vegetarian} />
                    <IconLabel>Vegetarian</IconLabel>
                </IconDiv>
            </IconsDiv>
        </OurIcons>

    </PopularDiv>
}
export default PopularRestaurants;