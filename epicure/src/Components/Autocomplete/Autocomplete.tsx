import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllDishes, AllRestaurants } from "../../Data/Data";
import { Restaurant, Dish } from "../../Types/Types";
import "./Autocomplete.css"
function Autocomplete() {
    const [searchText, setSearchText] = useState<string>("");
    const navigate = useNavigate();
    const filterLists = (element: (Restaurant | Dish)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }
    const mapSearchResault = (element: Restaurant | Dish, type: string) => { return <li onClick={() => { navigate('./' + element) }}> {element.name} </li> }
    const suggestions = () => {
        return (
            <div className='suggest'>
                <ul>
                    <p className="suggest-title">Restaurants:</p>
                    {AllRestaurants.filter(filterLists).map(restaurant => { return <li onClick={() => { navigate('./Restaurants/' + restaurant.name) }}> {restaurant.name} </li> })}
                </ul>
                <ul>
                    <p className="suggest-title">Dishes:</p>
                    {AllDishes.filter(filterLists).map(dish => { return <li onClick={() => { navigate('./Dishes/' + dish.name) }}> {dish.name} </li> })}

                </ul>
            </div>
        )
    }
    return (
        <div className='hero'>
            <div className='hero-search'>
                <label className='hero-label'>Epicure works with the top chef restaurants in Tel Aviv</label><br></br>
                <input className='hero-input' onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder={"Search for restaurant cuisine, chef"} />
                {searchText !== "" && suggestions()}
            </div>
        </div>
    )
}
export default Autocomplete;