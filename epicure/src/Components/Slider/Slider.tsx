import { useNavigate } from "react-router-dom";
import { AllDishes } from "../../Data/Data";
import { Dish, Restaurant } from "../../Types/Types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import rightArrows from '../../Data/Pictures/right-arrows.png'
import DishCard from "../DishCard/DishCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShowAllBtn, SliderTitle, SlidingDiv } from "./styles";
import { useEffect, useState } from "react";

function SliderDiv(props: { title: string, button: string, showOwner?: boolean, restaurants?: any }) {
    const navigate = useNavigate();
    const isRestaurant = props.button === 'Restaurants';
    const [dishesToDisplay, setDishesToDisplay] = useState<Array<Dish>>([])
    const [restaurantsToDisplay, setRestaurantsToDisplay] = useState<Array<Restaurant>>([])
    let showOwner = false;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (props.showOwner === true)
        showOwner = true;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: vw / 270,
        slidesToScroll: 1,

    };
    useEffect(() => {
        if (isRestaurant) {
            fetch("/api/restaurants/getPopularRestaurants/")
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setRestaurantsToDisplay(data)
                    } else {
                        alert("Can't receive data from server...");
                    }
                });
        } else
            fetch("/api/dishes/getPopularDishes")
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setDishesToDisplay(data)
                    } else {
                        alert("Can't receive data from server...");
                    }
                });
    }, [])
    return (<>
        <SliderTitle> {props.title}</SliderTitle>
        <SlidingDiv>
            <Slider {...settings}>
                {isRestaurant && restaurantsToDisplay.filter((restaurant, index: number) => { return (index < 3) }).map((restaurant: Restaurant) => {
                    return <RestaurantCard key={restaurant.name} restaurant={restaurant} showOwner={showOwner} />
                })}
                {!isRestaurant && dishesToDisplay.filter((dish, index: number) => { return (index < 3) }).map((dish: Dish) => {
                    return <DishCard key={dish.name} dish={dish} />
                })}

            </Slider>
        </SlidingDiv>
        <ShowAllBtn onClick={() => { navigate("./" + props.button) }}>All {props.button} <img src={rightArrows} /> </ShowAllBtn>
    </>)
}
export default SliderDiv;