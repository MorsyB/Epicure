import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import { DistanceDiv, DropdownFilterBTN, DropdownFiltersDesktopDiv, FiltersDesktopDiv, FooterHr, NormalFilterBTN, NormalFiltersDesktopDiv, PopupTitle, PriceRange, PriceRangeDiv, RangeDiv, RangeTitle, RangeTitleDiv, RestaurantsCardsDesktopDiv, RestaurantsDesktopDiv } from "./styles";
import downArrow from "../../../Data/Pictures/down-arrow.svg"
import { AllRestaurants } from "../../../Data/Data";
import RestaurantsCardDesktop from "../../../Components/RestaurantCard/RestaurantCardDesktop/RestaurantCardDesktop";
import { useState } from "react";
import { filtersArray } from "../../../Helpers/Helpers";
function RestaurantsDesktop() {
    const [dropdownBTNs, setDropdownBTNs] = useState<Array<boolean>>([false, false, false]);
    const [filtersBTNs, setFiltersBTNs] = useState<Array<boolean>>(filtersArray[0]);
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
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[0]) }} clickedBTN={filtersBTNs[0]}>All </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[1]) }} clickedBTN={filtersBTNs[1]}>New </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[2]) }} clickedBTN={filtersBTNs[2]}>Most Popular </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[3]) }} clickedBTN={filtersBTNs[3]}>Open Now </NormalFilterBTN>
                <NormalFilterBTN onClick={() => { setFiltersBTNs(filtersArray[4]) }} clickedBTN={filtersBTNs[4]}>Map View </NormalFilterBTN>
            </NormalFiltersDesktopDiv>
            <DropdownFiltersDesktopDiv>
                <DropdownFilterBTN onClick={() => { setDropdownBTNs([!dropdownBTNs[0], false, false]) }} clickedBTN={dropdownBTNs[0]}>Price Range <img src={downArrow} /></DropdownFilterBTN>
                <DropdownFilterBTN onClick={() => { setDropdownBTNs([false, !dropdownBTNs[1], false]) }} clickedBTN={dropdownBTNs[1]}>Distance <img src={downArrow} /></DropdownFilterBTN>
                <DropdownFilterBTN onClick={() => { setDropdownBTNs([false, false, !dropdownBTNs[2]]) }} clickedBTN={dropdownBTNs[2]}>Rating <img src={downArrow} /></DropdownFilterBTN>
            </DropdownFiltersDesktopDiv>
        </FiltersDesktopDiv>
    }
    const RestaurantsCardDiv = () => {
        return <RestaurantsCardsDesktopDiv>
            {AllRestaurants.map((restaurant) => { return <RestaurantsCardDesktop restaurant={restaurant} /> })}
        </RestaurantsCardsDesktopDiv>
    }
    return <RestaurantsDesktopDiv>
        <HeaderDesktop />
        {filtersDiv()}
        {dropdownBTNs[0] && priceRangePopup()}
        {dropdownBTNs[1] && distancePopup()}
        {RestaurantsCardDiv()}
        <FooterHr />
        <FooterDesktop />
    </RestaurantsDesktopDiv>
}
export default RestaurantsDesktop;