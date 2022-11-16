import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './SlidingContent.css';
import { useNavigate } from "react-router-dom";

function SlidingContent() {
    const navigate = useNavigate();
    return (
        <>
            <p className="div-title">popular restaurant in epicure:</p>
            <div className="slider">
                <RestaurantCard restaurants={[{
                    name: "rest1",
                    owner: "mo",
                    dishes: [{ name: "asd", ingredients: ['asd'], picture: "13", price: 45 }],
                    picture: "12as"
                }]} />

                <RestaurantCard restaurants={[{
                    name: "rest2",
                    owner: "moSa",
                    dishes: [{ name: "asd", ingredients: ['asd'], picture: "13", price: 45 }],
                    picture: "12as"
                }]} />
                <RestaurantCard restaurants={[{
                    name: "rest3",
                    owner: "don",
                    dishes: [{ name: "asd", ingredients: ['asd'], picture: "13", price: 45 }],
                    picture: "12as"
                }]} />

            </div>
            <button onClick={() => { navigate("./Restaurants") }}>All Restaurants</button><br />
            <p className="div-title">Signature Dish Of:</p>
            <div className="slider">
                <RestaurantCard restaurants={[{
                    name: "rest1",
                    owner: "mo",
                    dishes: [{ name: "asd", ingredients: ['asd'], picture: "13", price: 45 }],
                    picture: "12as"
                }]} />

                <RestaurantCard restaurants={[{
                    name: "rest2",
                    owner: "moSa",
                    dishes: [{ name: "asd", ingredients: ['asd'], picture: "13", price: 45 }],
                    picture: "12as"
                }]} />
                <RestaurantCard restaurants={[{
                    name: "rest3",
                    owner: "don",
                    dishes: [{ name: "asd", ingredients: ['asd'], picture: "13", price: 45 }],
                    picture: "12as"
                }]} />

            </div>
            <button onClick={() => { navigate("./Restaurants") }}>All Dishes</button><br />
        </>
    )
}
export default SlidingContent;