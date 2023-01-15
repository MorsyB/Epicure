import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import { DistanceDiv, DropdownFilterBTN, DropdownFiltersDesktopDiv, FiltersDesktopDiv, FooterHr, NormalFilterBTN, NormalFiltersDesktopDiv, PopupTitle, PriceRange, PriceRangeDiv, RangeDiv, RangeTitle, RangeTitleDiv, RestaurantsCardsDesktopDiv, RestaurantsDesktopDiv } from "./styles";
import downArrow from "../../../Data/Pictures/down-arrow.svg"
import RestaurantsCardDesktop from "../../../Components/RestaurantCard/RestaurantCardDesktop/RestaurantCardDesktop";
import { useEffect, useState } from "react";
import { filtersArray, isNewRestaurant, isOpenNow, mostPopular } from "../../../Helpers/Helpers";
import { Restaurant } from "../../../Types/Types";

function RestaurantsDesktop() {
    const [AllRestaurants, setAllRestaurants] = useState<Array<Restaurant>>([])
    const [restaurantsToDisplay, setRestaurantsToDisplay] = useState<Array<Restaurant>>(AllRestaurants);
    const openNow = AllRestaurants.filter((rest) => { return isOpenNow(rest); });
    const mostPop = mostPopular(AllRestaurants);
    const newRestaurants = AllRestaurants.filter((rest) => { return isNewRestaurant(rest); });
    const [dropdownBTNs, setDropdownBTNs] = useState<Array<boolean>>([false, false, false]);
    const [filtersBTNs, setFiltersBTNs] = useState<Array<boolean>>(filtersArray[0]);
    useEffect(() => {
        fetch("/api/restaurants/getRestaurants")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setAllRestaurants(data)
                    sessionStorage.setItem("Restaurants", JSON.stringify(data))
                    setRestaurantsToDisplay(data)
                } else {
                    alert("Wrong email or password");
                }
            });
    }, [])
    const priceRangePopup = () => {

        return <PriceRangeDiv>
            <PopupTitle>Price Range</PopupTitle>
            <PriceRange step="10" min="0" max="100" type="range" />
            HI TEST
        </PriceRangeDiv>
    }
    const distancePopup = () => {
        return <DistanceDiv>
            <PopupTitle>Distance</PopupTitle>
            <RangeDiv>
                <RangeTitleDiv>
                    <RangeTitle>My Location</RangeTitle>
                    <RangeTitle>4km</RangeTitle>
                </RangeTitleDiv>
                <PriceRange step="10" min="0" max="100" type="range" />
            </RangeDiv>

        </DistanceDiv>
    }
    const ratingPopup = () => {
        return <></>
    }
    const filtersDiv = () => {
        return <FiltersDesktopDiv>
            <NormalFiltersDesktopDiv>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[0]); setRestaurantsToDisplay(AllRestaurants) }} clickedBTN={filtersBTNs[0]}>All </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[1]); setRestaurantsToDisplay(newRestaurants) }} clickedBTN={filtersBTNs[1]}>New </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[2]); setRestaurantsToDisplay(mostPop) }} clickedBTN={filtersBTNs[2]}>Most Popular </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[3]); setRestaurantsToDisplay(openNow) }} clickedBTN={filtersBTNs[3]}>Open Now </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[4]) }} clickedBTN={filtersBTNs[4]}>Map View </NormalFilterBTN>
            </NormalFiltersDesktopDiv>

        </FiltersDesktopDiv>
    }
    const RestaurantsCardDiv = () => {
        return <RestaurantsCardsDesktopDiv>
            {restaurantsToDisplay.map((restaurant, index) => { return <RestaurantsCardDesktop key={index} restaurant={restaurant} /> })}
        </RestaurantsCardsDesktopDiv>
    }
    return <RestaurantsDesktopDiv>
        <HeaderDesktop restaurants={true} />
        {filtersDiv()}
        {dropdownBTNs[0] && priceRangePopup()}
        {dropdownBTNs[1] && distancePopup()}
        {RestaurantsCardDiv()}
        <FooterHr />
        <FooterDesktop />
    </RestaurantsDesktopDiv>
}
export default RestaurantsDesktop;