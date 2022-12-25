import { useNavigate } from "react-router-dom";
import { Dish } from "../../../Types/Types";
import shekel from '../../../Data/Pictures/shekel.png';
import {CardTitleDesktop,CardOwnerDesktop} from '../../RestaurantCard/RestaurantCardDesktop/styles';
import {CardDesktop, PriceDivDesktop, PriceHr} from "./styles"
import { Card, CardImg, CardOwner, CardTitle, CoinImg, DishTypeImg, IngredientsDiv, PriceDiv } from "../styles";

function DishCardDesktop(props: { dish: Dish }) {
    const navigate = useNavigate();
    const dish = props.dish;
    return (
        <CardDesktop  onClick={() => { navigate('./Dishes/' + dish.name) }}>
                <CardImg width={"100%"} src={dish.picture} />
                <CardTitleDesktop>{dish.name}</CardTitleDesktop>
                <CardOwnerDesktop>
                    {dish.ingredients.map((ingredient, i) => {
                        return <IngredientsDiv key={ingredient}>
                            {i < dish.ingredients.length - 1 ? ingredient + ', ' : ingredient}
                        </IngredientsDiv>
                    })}
                </CardOwnerDesktop><br />
                {/* <DishTypeImg src={dish.dishType} /> */}
                <PriceDivDesktop>
                    <PriceHr/>
                    <CoinImg src={shekel} width="8px" height="8px" />{dish.price}
                    <PriceHr/>
                </PriceDivDesktop>
        </CardDesktop>
    )

}
export default DishCardDesktop;