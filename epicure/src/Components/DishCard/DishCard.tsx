import { useNavigate } from "react-router-dom";
import { Dish } from "../../Types/Types";
import shekel from '../../Data/Pictures/shekel.png';
import { Card, CardImg, CardOwner, CardTitle, CoinImg, DishTypeImg, PriceDiv } from "./styles";

function DishCard(props: { dish: Dish }) {
    const navigate = useNavigate();
    const dish = props.dish;
    return (
        <Card onClick={() => { navigate('./Dishes/' + dish.name) }}>
            <CardImg width={"100%"} src={dish.picture} />
            <CardTitle>{dish.name}</CardTitle>
            <CardOwner>
                {dish.ingredients.map((ingredient) => {
                    return <>
                        {ingredient + ", "}
                    </>
                })}
                <DishTypeImg src={dish.dishType} />
                <PriceDiv>
                    <CoinImg src={shekel} width="8px" height="8px" />{" " + dish.price}
                </PriceDiv>
            </CardOwner><br />

        </Card>
    )

}
export default DishCard;