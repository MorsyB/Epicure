import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewHeader from "../../Components/Header/Header";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import { AllRestaurants } from "../../Data/Data";
import { isNewRestaurant, isOpenNow } from "../../Helpers/Helpers";
import { Restaurant } from "../../Types/Types";
import RestaurantsDesktop from "./RestaurantsDesktop/RestaurantsDesktop";
import { CardDiv, FilterButton, FiltersDiv, RestaurantsDiv, RestaurantsTitle } from "./styles";

function Restaurants() {
    const [restaurantsToDisplay, setRestaurantsToDisplay] = useState<Array<Restaurant>>(AllRestaurants);
    const openNow = AllRestaurants.filter((rest, i) => { return isOpenNow(rest); });
    const mostPopular = AllRestaurants.filter((rest, i) => { return i < 1; });
    const newRestaurants = AllRestaurants.filter((rest, i) => { return isNewRestaurant(rest); });
    const [clickedButton, setClickedButton] = useState<Array<boolean>>([true, false, false, false]);
    const [width, setWindowWidth] = useState(0)
    useEffect(() => { 
 
      updateDimensions();
 
      window.addEventListener('resize', updateDimensions);
      return () => 
        window.removeEventListener('resize',updateDimensions);
     }, [])
     const updateDimensions = () => {
       const width = window.innerWidth
       setWindowWidth(width)
     }

    const switchToClicked = (index: number) => {
        let arr: Array<boolean> = [false, false, false, false];
        arr[index] = true;
        setClickedButton(arr);
    };
    const filters = () => {
        return (<FiltersDiv>
            <FilterButton clickedBTN={clickedButton[0]} onClick={() => {
                setRestaurantsToDisplay(AllRestaurants);
                switchToClicked(0)
            }}>All</FilterButton>
            <FilterButton clickedBTN={clickedButton[1]} onClick={() => {
                setRestaurantsToDisplay(newRestaurants);
                switchToClicked(1)
            }}>New</FilterButton>
            <FilterButton clickedBTN={clickedButton[2]} onClick={() => {
                setRestaurantsToDisplay(mostPopular);
                switchToClicked(2)
            }}>Most Popular</FilterButton>
            <FilterButton clickedBTN={clickedButton[3]} onClick={() => {
                setRestaurantsToDisplay(openNow);
                switchToClicked(3)
            }}>Open Now</FilterButton>
        </FiltersDiv>)
    }

    const displayRestaurants = () => {
        return (restaurantsToDisplay.map((restaurant) => {
            return <CardDiv>
                <RestaurantCard restaurant={restaurant} showOwner={true} className="card" />
            </CardDiv>
        }))
    }

    return (<>
    {width<800?<>
        <NewHeader />
        <RestaurantsDiv>
            <RestaurantsTitle>restaurants</RestaurantsTitle>
            {filters()}
            {displayRestaurants()}
        </RestaurantsDiv>
            <Footer />
    </>:<RestaurantsDesktop/>}
    </>)
}
export default Restaurants;