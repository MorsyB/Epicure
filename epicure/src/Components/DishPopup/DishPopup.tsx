import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantPage from "../../Routes/RestaurantPage/RestautantPage";
import { Dish } from "../../Types/Types";
import { BlackBTN, DishDetails, DishDetailsDiv, DishDiv, DishName, DishPrice, ExitIcon, LabelBTN, LabelTitle, PopupDiv, PriceHr, QuantitiyDiv, QuantitiyNumber } from "./syles";
import exitIcon from '../../Data/Pictures/exitIcon.svg'
import shekel from '../../Data/Pictures/shekel.png';
import { CoinImg, DishTypeImg } from "../DishCard/styles";
import { spicySmall } from '../../Data/Icons'
import plus from '../../Data/Pictures/plus.svg'
import minus from '../../Data/Pictures/minus.svg'
import { toast, ToastContainer } from "react-toastify";
import DishPopupMobile from "./DishPopupMobile/DishPopupMobile";

function DishPopup() {
    const navigate = useNavigate()
    const checkIfFetched = (object: string) => { return sessionStorage.getItem(object) != null && sessionStorage.getItem(object) != undefined }
    const [dish, setDish] = useState<Dish>();
    const [quantity, setQuantity] = useState<number>(1);
    const dishName = useParams().DishName;
    const restaurantName = useParams().RestaurantName;
    const [width, setWindowWidth] = useState(0)
    useEffect(() => {

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
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
        {width > 800 ? <>
            <RestaurantPage />
            <ToastContainer />
            <PopupDiv>
            </PopupDiv>
            <DishDiv>
                <ExitIcon src={exitIcon} onClick={() => { navigate('/Restaurants/' + restaurantName) }} />
                <img src={dish?.img} width="100%" />
                <DishDetailsDiv>
                    <DishName>
                        {dish?.name}
                    </DishName>
                    <DishDetails>
                        {dish?.about}
                    </DishDetails>
                    <img src={spicySmall} />
                    <DishPrice>
                        <PriceHr />
                        <CoinImg src={shekel} width="8px" height="8px" />{dish?.price}
                        <PriceHr />
                    </DishPrice>
                    <LabelTitle>
                        Quantity
                    </LabelTitle>
                    <QuantitiyDiv>
                        <img onClick={() => { if (quantity > 1) setQuantity(quantity - 1); }} src={minus} /> <QuantitiyNumber>{quantity}</QuantitiyNumber><img onClick={() => { setQuantity(quantity + 1); }} src={plus} />
                    </QuantitiyDiv>
                    <BlackBTN onClick={handleAddToBag}>
                        Add To Bag
                    </BlackBTN>
                </DishDetailsDiv>
            </DishDiv>

        </> : <DishPopupMobile />}
    </>
}
export default DishPopup;