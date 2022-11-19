import { useNavigate } from "react-router-dom";
import { AllDishes, AllRestaurants } from "../../Data/Data";
import { Dish, Restaurant } from "../../Types/Types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import rightArrows from '../../Data/Pictures/right-arrows.png'
import DishCard from "../DishCard/DishCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

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
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (<>
        <p className="div-title">{props.title}</p>
        <Slider className="slider" {...settings}>
            {isRestaurant && AllRestaurants.filter((restaurant, index: number) => { return (index < 3) }).map((restaurant: Restaurant) => {
                return <RestaurantCard restaurant={restaurant} showOwner={showOwner} />
            })}
            {!isRestaurant && AllDishes.filter((dish, index: number) => { return (index < 3) }).map((dish: Dish) => {
                return <DishCard dish={dish} />
            })}

        </Slider>
        <button className='show-all-button' onClick={() => { navigate("./" + props.button) }}>All {props.button} <img src={rightArrows} /></button><br />

    </>)
}
export default SliderDiv;