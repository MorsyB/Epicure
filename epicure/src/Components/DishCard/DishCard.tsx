import { useNavigate } from "react-router-dom";
import { Dish } from "../../Types/Types";
import shekel from '../../Data/Pictures/shekel.png';

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
                <br />
                <br />
            <img src={shekel} width="8px" />
            {" " + dish.price}
            </p>
        </div>
    )

}
export default DishCard;