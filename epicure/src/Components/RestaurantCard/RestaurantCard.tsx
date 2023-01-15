import { CardImg } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../../Types/Types';
import { Card, CardOwner, CardTitle } from './styles';
import claro from "../../Data/Pictures/claro.svg";

function RestaurantCard(props:{restaurant:Restaurant, showOwner:boolean, className?:string}){
    const navigate = useNavigate();
    const restaurant = props.restaurant;
    const getVW = window.innerWidth;
    if(getVW < 800)
        window.onresize = () => {
            if(window.innerWidth !== getVW)
                window.location.reload();
        }
    return(
        <Card onClick={()=>{navigate('/Restaurants/' + restaurant.name)}}>
            <CardImg width={"100%"} src={claro}/>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardOwner>{props.showOwner && restaurant.chef}</CardOwner><br/>
        </Card>
    )

}
export default RestaurantCard;