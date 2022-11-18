import { useNavigate } from "react-router-dom";
import { AllDishes, AllRestaurants } from "../../Data/Data";
import { Dish, Restaurant } from "../../Types/Types";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import rightArrows from '../../Data/Pictures/right-arrows.png'
import DishCard from "../DishCard/DishCard";

function Slider(props: { title: string, button: string }) {
    const navigate = useNavigate();
    const isRestaurant = props.button === 'Restaurants';
    return (<>
        <p className="div-title">{props.title}</p>
        <div className="slider">
            {isRestaurant && AllRestaurants.filter((restaurant, index: number) => { return (index < 3) }).map((restaurant: Restaurant) => {
                return <RestaurantCard restaurant={restaurant} showOwner={false} />
            })}
            {!isRestaurant && AllDishes.filter((dish, index: number) => { return (index < 3) }).map((dish: Dish) => {
                return <DishCard dish={dish} />
            })}
        </div>
        <button className='show-all-button' onClick={() => { navigate("./" + props.button) }}>All {props.button} <img src={rightArrows} /></button><br />

    </>)
}
export default Slider;