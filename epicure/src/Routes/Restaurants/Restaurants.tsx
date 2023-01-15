import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import RestaurantCard from "../../Components/RestaurantCard/RestaurantCard";
import { isNewRestaurant, isOpenNow, mostPopular } from "../../Helpers/Helpers";
import { Restaurant } from "../../Types/Types";
import RestaurantsDesktop from "./RestaurantsDesktop/RestaurantsDesktop";
import { CardDiv, FilterButton, FiltersDiv, RestaurantsDiv, RestaurantsTitle } from "./styles";

function Restaurants() {
    const [AllRestaurants, setAllRestaurants] = useState<Array<Restaurant>>([])
    const [restaurantsToDisplay, setRestaurantsToDisplay] = useState<Array<Restaurant>>(AllRestaurants);
    const openNow = AllRestaurants.filter((rest) => { return isOpenNow(rest); });
    const mostPop = mostPopular(AllRestaurants);
    const newRestaurants = AllRestaurants.filter((rest) => { return isNewRestaurant(rest); });
    const [clickedButton, setClickedButton] = useState<Array<boolean>>([true, false, false, false]);
    const [width, setWindowWidth] = useState(0)
    useEffect(() => {

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    useEffect(() => {
        fetch("/api/restaurants/getRestaurants")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setAllRestaurants(data)
                    setRestaurantsToDisplay(data)
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])

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
                setRestaurantsToDisplay(mostPop);
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
        {width < 800 ? <>
            <Header />
            <RestaurantsDiv>
                <RestaurantsTitle>restaurants</RestaurantsTitle>
                {filters()}
                {displayRestaurants()}
            </RestaurantsDiv>
            <Footer />
        </> : <RestaurantsDesktop />}
    </>)
}
export default Restaurants;