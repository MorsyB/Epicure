import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllDishes, AllRestaurants } from "../../Data/Data";
import { Restaurant, Dish } from "../../Types/Types";
import { HeroDiv, HeroInput, HeroLabel, HeroSearchDiv, SuggestDiv, SuggestLi, SuggestTitle } from "./styles";

function Autocomplete() {
    const [searchText, setSearchText] = useState<string>("");
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
    const [allDishes, setAllDishes] = useState<Array<Dish>>([])
    const [allRestaurants, setAllRestaurants] = useState<Array<Restaurant>>([])
    const navigate = useNavigate();
    const filterLists = (element: (Restaurant | Dish)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }
    const filteredRestaurants = () => { return allRestaurants.filter(filterLists).map(restaurant => { return <SuggestLi key={restaurant.name} onClick={() => { navigate('./Restaurants/' + restaurant.name) }}> {restaurant.name} </SuggestLi> }) }
    const filteredDishes = () => { return allDishes.filter(filterLists).map(dish => { return <SuggestLi key={dish.name} onClick={() => { navigate('./Dishes/' + dish.name) }}> {dish.name} </SuggestLi> }) }
    const wrapperRef = useRef<any>(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestion(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    useEffect(() => {
        fetch("/api/restaurants/getRestaurants")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setAllRestaurants(data)
                } else {
                    alert("Wrong email or password");
                }
            });
    }, [])
    useEffect(() => {
        fetch("/api/dishes/getDishes")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setAllDishes(data)
                } else {
                    alert("Wrong email or password");
                }
            });
    }, [])

    const suggestions = () => {
        return (
            <SuggestDiv ref={wrapperRef}>
                <ul>
                    {AllRestaurants.filter(filterLists).length !== 0 && <SuggestTitle>Restaurants:-</SuggestTitle>}
                    {filteredRestaurants()}
                </ul>
                <ul>
                    {AllDishes.filter(filterLists).length !== 0 && <SuggestTitle>Dishes:</SuggestTitle>}
                    {filteredDishes()}
                </ul>
            </SuggestDiv>
        )
    }
    return (
        <HeroDiv>
            <HeroSearchDiv>
                <HeroLabel>Epicure works with the top chef restaurants in Tel Aviv</HeroLabel>
                <HeroInput onFocus={() => setShowSuggestion(true)} onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder={"Search for restaurant cuisine, chef"} />
                {showSuggestion && searchText !== "" && suggestions()}
            </HeroSearchDiv>
        </HeroDiv>
    )
}
export default Autocomplete;