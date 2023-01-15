import { useNavigate } from "react-router-dom";
import { Dish } from "../../../Types/Types";
import shekel from '../../../Data/Pictures/shekel.png';
import { CardTitleDesktop, CardOwnerDesktop } from '../../RestaurantCard/RestaurantCardDesktop/styles';
import { CardDesktop, PriceDivDesktop, PriceHr } from "./styles"
import { Card, CardImg, CardOwner, CardTitle, CoinImg, DishTypeImg, IngredientsDiv, PriceDiv } from "../styles";

function DishCardDesktop(props: { dish: Dish }) {
    const navigate = useNavigate();
    const dish = props.dish;
    return (
        <CardDesktop onClick={() => { navigate('/Restaurants/' + dish.restaurant +'/'+ dish.name) }}>
            <CardImg width={"100%"} src={dish.img} />
            <CardTitleDesktop>{dish.name}</CardTitleDesktop>
            <CardOwnerDesktop>
                {dish.about}
            </CardOwnerDesktop><br />
            <PriceDivDesktop>
                <PriceHr />
                <CoinImg src={shekel} width="8px" height="8px" />{dish.price}
                <PriceHr />
            </PriceDivDesktop>
        </CardDesktop>
    )

}
export default DishCardDesktop;