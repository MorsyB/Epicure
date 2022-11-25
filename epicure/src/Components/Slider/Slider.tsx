import { useNavigate } from "react-router-dom";
import { AllDishes, AllRestaurants } from "../../Data/Data";
import { Dish, Restaurant } from "../../Types/Types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import rightArrows from '../../Data/Pictures/right-arrows.png'
import DishCard from "../DishCard/DishCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShowAllBtn, SliderTitle, SlidingDiv } from "./styles";

function SliderDiv(props: { title: string, button: string, showOwner?: boolean }) {
    const navigate = useNavigate();
    const isRestaurant = props.button === 'Restaurants';
    let showOwner = false;
    if (props.showOwner === true)
        showOwner = true;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (<>
        <SliderTitle> {props.title}</SliderTitle>
        <SlidingDiv>
            <Slider {...settings}>
                {isRestaurant && AllRestaurants.filter((restaurant, index: number) => { return (index < 3) }).map((restaurant: Restaurant) => {
                    return <RestaurantCard key={restaurant.name} restaurant={restaurant} showOwner={showOwner} />
                })}
                {!isRestaurant && AllDishes.filter((dish, index: number) => { return (index < 3) }).map((dish: Dish) => {
                    return <DishCard key={dish.name} dish={dish} />
                })}

            </Slider>
        </SlidingDiv>
        <ShowAllBtn onClick={() => { navigate("./" + props.button) }}>All {props.button} <img src={rightArrows} /> </ShowAllBtn>
    </>)
}
export default SliderDiv;