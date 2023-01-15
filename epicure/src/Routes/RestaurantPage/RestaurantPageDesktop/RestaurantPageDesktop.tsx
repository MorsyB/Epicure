import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import { Dish, Restaurant } from "../../../Types/Types";
import claro from "../../../Data/Pictures/claro-big.svg"
import { CardDesktop, DishesDiv, FilterButton, FiltersDiv, PopupText, PopupTitle, RestaurantChefName, RestaurantDetailsDiv, RestaurantName, RestaurantOpen, RestaurantPageDesktopDiv, WarningPopup, WarningPopupBG } from "./styles";
import clock from "../../../Data/Pictures/clock-icon.svg"
import { isOpenNow } from "../../../Helpers/Helpers";
import questionMark from "../../../Data/Pictures/mark.svg"
import { CardImg, CoinImg } from "../../../Components/DishCard/styles";
import { CardOwnerDesktop, CardTitleDesktop } from "../../../Components/RestaurantCard/RestaurantCardDesktop/styles";
import { PriceDivDesktop, PriceHr } from "../../../Components/DishCard/DishCardDesktop/styles";
import shekel from '../../../Data/Pictures/shekel.png';
import { BlackBTN, PopupDiv } from "../../../Components/DishPopup/syles";


function RestaurantPageDesktop() {
    const restaurantName = useParams()["RestaurantName"];
    const navigate = useNavigate();
    const checkIfFetched = (object: string) => { return sessionStorage.getItem(object) != null && sessionStorage.getItem(object) != undefined }
    const [restaurant, setRestaurant] = useState<Restaurant>();
    const [showWarning, setShowWarning] = useState<Boolean>(false);
    const [dishes, setDishes] = useState<Array<Dish>>(checkIfFetched(restaurantName || "") ? JSON.parse(sessionStorage.getItem('Restaurants') || "") : undefined)
    const [dishesToDisplay, setDishesToDisplay] = useState<Array<Dish>>(dishes?.filter((dish: any) => { return dish.dishMenu == "breakfast" }))
    const [clickedButton, setClickedButton] = useState<Array<boolean>>([true, false, false]);
    const switchToClicked = (index: number) => {
        let arr: Array<boolean> = [false, false, false];
        arr[index] = true;
        setClickedButton(arr);
    };
    const handleDishPopup = (dish: any) => {
        if (checkIfFetched("order") && JSON.parse(sessionStorage.getItem("order") || "").restaurant != restaurantName) {
            setShowWarning(true);
        } else
            navigate('./' + dish.name)
    }
    const warningPopup = () => {
        return <>
            {showWarning && <><PopupDiv></PopupDiv>
                <WarningPopup>
                    <img src={questionMark} width="10%" />
                    <PopupTitle>DELETE ORDER?</PopupTitle>
                    <PopupText>You can order from only one restaurant per order. Going out to another restaurant will erase all the items you put in the cart</PopupText>
                    <BlackBTN onClick={() => { setShowWarning(false); sessionStorage.removeItem("order") }}>Delete</BlackBTN>
                    <BlackBTN onClick={() => setShowWarning(false)}>Back To Order</BlackBTN>
                </WarningPopup>

            </>}
        </>
    }
    const restaurantDetails = () => {
        return <RestaurantDetailsDiv>
            <img src={claro} width="100%" />
            <RestaurantName>
                {restaurant?.name}
            </RestaurantName>
            <RestaurantChefName>
                {restaurant?.chef}
            </RestaurantChefName>
            <RestaurantOpen>
                <img src={clock} /> {restaurant && isOpenNow(restaurant) ? "Open now" : "Opens at: " + restaurant?.openingHours}
            </RestaurantOpen>
        </RestaurantDetailsDiv>
    }
    const filters = () => {
        return <FiltersDiv>
            <FilterButton clickedBTN={clickedButton[0]} onClick={() => {
                switchToClicked(0)
                setDishesToDisplay(dishes?.filter((dish) => { return dish.dishMenu == "breakfast" }))
            }}>Breakfast</FilterButton>
            <FilterButton clickedBTN={clickedButton[1]} onClick={() => {
                switchToClicked(1)
                setDishesToDisplay(dishes?.filter((dish) => { return dish.dishMenu == "lanch" }))
            }}>Lanch</FilterButton>
            <FilterButton clickedBTN={clickedButton[2]} onClick={() => {
                setDishesToDisplay(dishes?.filter((dish) => { return dish.dishMenu == "dinner" }))
                switchToClicked(2)
            }}>Dinner</FilterButton>
        </FiltersDiv>
    }
    const displayDishes = () => {
        return <DishesDiv>
            {dishesToDisplay?.map((dish, i) => {
                return <CardDesktop key={i} onClick={() => handleDishPopup(dish)}>
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
            })}
        </DishesDiv>
    }

    useEffect(() => {
        if (checkIfFetched("Restaurants")) {
            const rest = JSON.parse(sessionStorage.getItem('Restaurants') || "");
            rest.forEach((element: any) => {
                if (element.name == restaurantName)
                    setRestaurant(element)
            });
        } else {

            fetch("/api/restaurants/getRestaurantByName/" + restaurantName)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setRestaurant(data)
                    } else {
                        alert("Can't receive data from server...");
                    }
                });
        }

    }, [])
    useEffect(() => {
        if (checkIfFetched(restaurantName || "")) {
            const dishes = JSON.parse(sessionStorage.getItem(restaurantName || "") || "");
            setDishes(dishes)
            setDishesToDisplay(dishes?.filter((dish: any) => { return dish.dishMenu == "breakfast" }))

        } else {
            fetch("/api/dishes/getDishesByRestaurant/" + restaurantName)
                .then((response) => response.json())
                .then((data: Array<Dish>) => {
                    if (data) {
                        setDishes(data)
                        sessionStorage.setItem(restaurantName || "", JSON.stringify(data))
                        setDishesToDisplay(data?.filter((dish) => { return dish.dishMenu == "breakfast" }))
                    } else {
                        alert("Can't receive data from server...");
                    }
                });
        }
    }, [])

    return <>
        <HeaderDesktop />
        <RestaurantPageDesktopDiv>
            {restaurantDetails()}
            {filters()}
            {displayDishes()}
            {warningPopup()}
        </RestaurantPageDesktopDiv>
        <FooterDesktop />
    </>
}
export default RestaurantPageDesktop;