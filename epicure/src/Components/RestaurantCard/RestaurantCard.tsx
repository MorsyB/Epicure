import { CardImg } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../../Types/Types';
import { Card, CardOwner, CardTitle } from './styles';

function RestaurantCard(props:{restaurant:Restaurant, showOwner:boolean, className?:string}){
    const navigate = useNavigate();
    const restaurant = props.restaurant;
    window.onresize = () => {
        window.location.reload();
      }
    return(
        <Card onClick={()=>{navigate('/Restaurants/' + restaurant.name)}}>
            <CardImg width={"100%"} src={restaurant.picture}/>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardOwner>{props.showOwner && restaurant.owner}</CardOwner><br/>
        </Card>
    )

}
export default RestaurantCard;