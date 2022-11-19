import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { AllDishes, AllRestaurants } from '../../Data/Data';
import { Dish, Restaurant } from '../../Types/Types';
import './SlidingContent.css';
import { useNavigate } from "react-router-dom";
import DishCard from '../DishCard/DishCard';
import rightArrows from '../../Data/Pictures/right-arrows.png'
import spicy from '../../Data/Pictures/spicy.png'
import vegan from '../../Data/Pictures/vegan.png'
import vegetarian from '../../Data/Pictures/vegetarian.png'
import SliderDiv from '../Slider/Slider';

function SlidingContent() {
    const navigate = useNavigate();

    const displayPopularRestaurants = () => {
        return (
            <SliderDiv title='popular restaurant in epicure:' button='Restaurants' showOwner={true} />
        )
    };

    const displayDishes = () => {
        return (
            <SliderDiv title='Signature Dish Of:' button='Dishes' />
        )
    }

    const displaySignatureDishes = () => {
        return (
            <div className='signature-dish'>
                <p className="div-title">Signature Dish Of:</p>
                <img src={spicy} />
                <p className="div-element">Spicy</p>
                <img src={vegan} />
                <p className="div-element">Vegitarian</p>
                <img src={vegetarian} />
                <p className="div-element">Vegan</p>
            </div>
        )
    }

    return (
        <>
            <div className='sliding-div'>
                <br />
                {displayPopularRestaurants()}
                <br />
                {displayDishes()}
                <br />
            </div>
            {displaySignatureDishes()}
        </>
    )
}
export default SlidingContent;

