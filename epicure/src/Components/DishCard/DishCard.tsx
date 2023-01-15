import { useNavigate } from "react-router-dom";
import { Dish } from "../../Types/Types";
import shekel from '../../Data/Pictures/shekel.png';
import { Card, CardImg, CardOwner, CardTitle, CoinImg, DishTypeImg, IngredientsDiv, PriceDiv } from "./styles";
import { spicySmall, veganSmall, vegetarianSmall } from "../../Data/Icons";

function DishCard(props: { dish: Dish }) {
    const navigate = useNavigate();
    const dish = props.dish;
    const dishType = (type:String)=>{
        if(type == "spicy")
            return spicySmall;
        else if(type == "vegan")
            return veganSmall;
        return vegetarianSmall;
    }
    return (
        <Card onClick={() => { navigate('./Dishes/' + dish.name) }}>
            <div>
                <CardImg width={"100%"} src={dish.img} />
                <CardTitle>{dish.name}</CardTitle>
                <CardOwner>
                    {dish.about}
                </CardOwner><br />
            </div>
            <div>
                <DishTypeImg src={dishType(dish.dishType)} />
                <PriceDiv>
                    <CoinImg src={shekel} width="8px" height="8px" />{" " + dish.price}
                </PriceDiv>
            </div>
        </Card>
    )

}
export default DishCard;