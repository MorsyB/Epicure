import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../../Types/Types';
import "./RestaurantCard.css";

function RestaurantCard(props:{restaurant:Restaurant, showOwner:boolean, className?:string}){
    const navigate = useNavigate();
    const restaurant = props.restaurant;
    const className = props.className ? props.className : "card";
    return(
        <div className={className} onClick={()=>{navigate('/Restaurants/' + restaurant.name)}}>
            <img src={restaurant.picture}/>
            <p className='restautant-name'>{restaurant.name}</p><br/>
            <p className='restaurant-owner'>{props.showOwner && restaurant.owner}<br/></p>
        </div>
    )

}
export default RestaurantCard;