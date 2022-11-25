import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllDishes, AllRestaurants } from "../../Data/Data";
import { Restaurant, Dish } from "../../Types/Types";
import { HeroDiv, HeroInput, HeroLabel, HeroSearchDiv, SuggestDiv, SuggestLi, SuggestTitle } from "./styles";
function Autocomplete() {
    const [searchText, setSearchText] = useState<string>("");
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
    const navigate = useNavigate();
    const filterLists = (element: (Restaurant | Dish)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }
    const mapSearchResault = (element: Restaurant | Dish, type: string) => { return <li onClick={() => { navigate('./' + element) }}> {element.name} </li> }
    const suggestions = () => {
        return (
            <SuggestDiv>
                <ul>
                    <SuggestTitle>
                        Restaurants:
                    </SuggestTitle>
                    {AllRestaurants.filter(filterLists).map(restaurant => { return <SuggestLi key={restaurant.name} onClick={() => { navigate('./Restaurants/' + restaurant.name) }}> {restaurant.name} </SuggestLi> })}
                </ul>
                <ul>
                    <SuggestTitle>Dishes:</SuggestTitle>
                    {AllDishes.filter(filterLists).map(dish => { return <SuggestLi key={dish.name} onClick={() => { navigate('./Dishes/' + dish.name) }}> {dish.name} </SuggestLi> })}

                </ul>
            </SuggestDiv>
        )
    }
    return (
        <HeroDiv>
            <HeroSearchDiv>
                <HeroLabel>Epicure works with the top chef restaurants in Tel Aviv</HeroLabel>
                <HeroInput onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)} onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder={"Search for restaurant cuisine, chef"} />
                {showSuggestion && searchText !== "" && suggestions()}
            </HeroSearchDiv>
        </HeroDiv>
    )
}
export default Autocomplete;