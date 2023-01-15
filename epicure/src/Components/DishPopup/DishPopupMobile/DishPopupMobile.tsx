import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Dish } from "../../../Types/Types";
import { BlackBTN, LabelTitle, QuantitiyDiv, QuantitiyNumber } from "../syles";
import { DishImg, DishMobileDiv, DishTitle, DishDetails, ExitImg } from "./styles";
import plus from '../../../Data/Pictures/plus.svg'
import minus from '../../../Data/Pictures/minus.svg'
import exit from '../../../Data/Pictures/exit.png'

function DishPopupMobile() {
    const navigate = useNavigate()
    const checkIfFetched = (object: string) => { return sessionStorage.getItem(object) != null && sessionStorage.getItem(object) != undefined }
    const [dish, setDish] = useState<Dish>();
    const [quantity, setQuantity] = useState<number>(1);
    const dishName = useParams().DishName;
    const restaurantName = useParams().RestaurantName;

    const handleAddToBag = () => {
        if (!checkIfFetched("user")) {
            toast.error("Please Sign in to Continue")
        } else {
            if (checkIfFetched("order")) {
                const order = JSON.parse(sessionStorage.getItem("order") || "");
                order.dishes.push({ "quantity": quantity, "dish": dishName })
                sessionStorage.setItem("order", JSON.stringify(order));
            } else {
                const order = {
                    "user": JSON.parse(sessionStorage.getItem("user") || "").name,
                    "restaurant": restaurantName,
                    "dishes": [{ "quantity": quantity, "dish": dishName }],
                    "price": 0,
                    "active": false
                }
                sessionStorage.setItem("order", JSON.stringify(order));
            }
            navigate('/Restaurants/' + restaurantName)
        }
    }
    useEffect(() => {
        if (checkIfFetched(restaurantName || "")) {
            const dishes = JSON.parse(sessionStorage.getItem(restaurantName || "") || "");
            setDish(dishes.filter((dish: Dish) => { return dish.name == dishName })[0])
        } else {
            fetch("/api/dishes/getDishesByRestaurant/" + restaurantName)
                .then((response) => response.json())
                .then((data: Array<Dish>) => {
                    if (data) {
                        setDish(data.filter((dish: Dish) => { return dish.name == dishName })[0])
                        sessionStorage.setItem(restaurantName || "", JSON.stringify(data))
                    } else {
                        alert("Can't receive data from server...");
                    }
                });
        }
    }, [])
    return <>
        <ExitImg onClick={() => navigate('/Restaurants/' + restaurantName)} src={exit} />
        <DishImg src={dish?.img} />
        <DishMobileDiv>
            <DishTitle>
                {dishName}
            </DishTitle>
            <DishDetails>
                {dish?.about}
            </DishDetails>
            <LabelTitle>
                Quantity
            </LabelTitle>
            <QuantitiyDiv>
                <img onClick={() => { if (quantity > 1) setQuantity(quantity - 1); }} src={minus} /> <QuantitiyNumber>{quantity}</QuantitiyNumber><img onClick={() => { setQuantity(quantity + 1); }} src={plus} />
            </QuantitiyDiv>
            <BlackBTN onClick={handleAddToBag}>Add To Bag</BlackBTN>
        </DishMobileDiv>
    </>
}
export default DishPopupMobile;