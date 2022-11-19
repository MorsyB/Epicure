import { useNavigate } from "react-router-dom";
import { Dish } from "../../Types/Types";
import shekel from '../../Data/Pictures/shekel.png';
import "./DishCard.css";

function DishCard(props: { dish: Dish }) {
    const navigate = useNavigate();
    const dish = props.dish;
    return (
        <div className="card" onClick={() => { navigate('./Dishes/' + dish.name) }}>

            <img src={dish.picture} />
            <p className='restautant-name'>{dish.name}</p><br />
            <p className="restaurant-owner">
                {dish.ingredients.map((ingredient) => {
                    return <>
                        {ingredient + ", "}
                    </>
                })}
                <img className="dish-type" src={dish.dishType} />
                <div className="price">
                    <img className="shekel" src={shekel} width="8px" height="8px" /> {" " + dish.price}
                </div>
            </p>
        </div>
    )

}
export default DishCard;