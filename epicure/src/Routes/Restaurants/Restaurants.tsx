import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import { AllRestaurants } from "../../Data/Data";
import { Restaurant } from "../../Types/Types";
import "./Restaurants.css";

function Restaurants() {
    const [restaurantsToDisplay, setRestaurantsToDisplay] = useState<Array<Restaurant>>(AllRestaurants);
    const openNow = AllRestaurants.filter((rest, i) => { return i < 2; });
    const mostPopular = AllRestaurants.filter((rest, i) => { return i < 1; });
    const newRestaurants = AllRestaurants.filter((rest, i) => { return i === 4; });
    const [clickedButton, setClickedButton] = useState<Array<boolean>>([true, false, false, false]);
    const switchToClicked = (index: number) => {
        let arr: Array<boolean> = [false, false, false, false];
        arr[index] = true;
        setClickedButton(arr);
    };
    const filters = () => {
        return (<div className="restaurants-filters">
            <button className={clickedButton[0] ? "clicked-button" : "unclicked"} onClick={() => {
                setRestaurantsToDisplay(AllRestaurants);
                switchToClicked(0)
            }}>All</button>
            <button className={clickedButton[1] ? "clicked-button" : "unclicked"} onClick={() => {
                setRestaurantsToDisplay(newRestaurants);
                switchToClicked(1)
            }}>New</button>
            <button className={clickedButton[2] ? "clicked-button" : "unclicked"} onClick={() => {
                setRestaurantsToDisplay(mostPopular);
                switchToClicked(2)
            }}>Most Popular</button>
            <button className={clickedButton[3] ? "clicked-button" : "unclicked"} onClick={() => {
                setRestaurantsToDisplay(openNow);
                switchToClicked(3)
            }}>Open Now</button>
        </div>)
    }
    return (<>
        <Header />
        <div className="restaurants">
            <p className="restaurants-title">restaurants</p>
            {filters()}
            {restaurantsToDisplay.map((restaurant) => { return <RestaurantCard restaurant={restaurant} showOwner={true} className="restaurant-card" /> })}
            <Footer />
        </div>
    </>)
}
export default Restaurants;