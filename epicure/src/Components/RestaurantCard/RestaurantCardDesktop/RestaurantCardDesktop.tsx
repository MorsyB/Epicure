import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../../Types/Types";
import { CardImg } from "../../DishCard/styles";
import { CardDesktop, CardOwnerDesktop, CardTitleDesktop, Stars } from "./styles";
import star from "../../../Data/Pictures/star.svg"
import claro from "../../../Data/Pictures/claro.svg"

function RestaurantsCardDesktop(props: { restaurant: Restaurant ,showOwner?:boolean}) {
    const navigate = useNavigate();
    const restaurant = props.restaurant;
    const stars = []
    var show = true
    if(props.showOwner === false)
        show = false
    for (let i = 0; i < 5; i++) {
        stars.push(<img key={i} src={star} />);
    }
    return <CardDesktop onClick={() => { navigate('/Restaurants/' + restaurant.name) }}>
        <CardImg width={"100%"} src={claro} />
        <CardTitleDesktop>{restaurant.name}</CardTitleDesktop>
        { show && <CardOwnerDesktop>{restaurant.chef}</CardOwnerDesktop>}
        {show &&<Stars>
            {stars}
        </Stars>}
        {!show && <br/>}
        {!show && <br/>}
    </CardDesktop>
}
export default RestaurantsCardDesktop;