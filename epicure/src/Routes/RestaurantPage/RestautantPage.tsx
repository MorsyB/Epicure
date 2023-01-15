import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Dish, Restaurant } from "../../Types/Types";
import claro from "../../Data/Pictures/claro.svg"
import clock from "../../Data/Pictures/clock-icon.svg"
import { DishCard, DishesDiv, PriceHr, RestaurantChefName, RestaurantDetailDiv, RestaurantName } from "./styles";
import { FilterButton, FiltersDiv } from "../Restaurants/styles";
import { CardOwner, CardTitle, CoinImg, DishTypeImg, PriceDiv } from "../../Components/DishCard/styles";
import shekel from '../../Data/Pictures/shekel.png';
import { isOpenNow } from "../../Helpers/Helpers";
import RestaurantPageDesktop from "./RestaurantPageDesktop/RestaurantPageDesktop";


function RestaurantPage() {
    const navigate = useNavigate()
    const restaurantName = useParams()["RestaurantName"];
    const [restaurant, setRestaurant] = useState<Restaurant>();
    const [dishes, setDishes] = useState<Array<Dish>>()
    const [dishesToDisplay, setDishesToDisplay] = useState<Array<Dish>>()
    const [clickedButton, setClickedButton] = useState<Array<boolean>>([true, false, false]);
    const [width, setWindowWidth] = useState(0)

    const switchToClicked = (index: number) => {
        let arr: Array<boolean> = [false, false, false];
        arr[index] = true;
        setClickedButton(arr);
    };

    const restaurantDetails = () => {
        return <>
            <img src={claro} width="100%" />
            <RestaurantDetailDiv>
                <RestaurantName>
                    {restaurant?.name}
                </RestaurantName>
                <RestaurantChefName>
                    {restaurant?.chef}
                </RestaurantChefName>
                <RestaurantChefName>
                    <img src={clock} /> {restaurant && isOpenNow(restaurant) ? "Open now" : "Opens at: " + restaurant?.openingHours}
                </RestaurantChefName>
            </RestaurantDetailDiv>
        </>
    }
    const filters = () => {
        return (<FiltersDiv>
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
        </FiltersDiv>)
    }
    const displayDishes = () => {
        return <DishesDiv>
            {dishesToDisplay?.map((dish, i) => {
                return <DishCard onClick={() => navigate('./' + dish.name)} key={i}>
                    <div>
                        <img src={dish.img} width="100%" />
                        <CardTitle>{dish.name}</CardTitle>
                        <CardOwner>
                            {dish.about}
                        </CardOwner><br />
                    </div>
                    <br />
                    <div>
                        <PriceDiv>
                            <CoinImg src={shekel} width="8px" height="8px" />{" " + dish.price}
                            <PriceHr />
                        </PriceDiv>
                    </div>
                </DishCard>
            })}
        </DishesDiv>
    }
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

    useEffect(() => {
        fetch("/api/restaurants/getRestaurantByName/" + restaurantName)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setRestaurant(data)
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])
    useEffect(() => {
        fetch("/api/dishes/getDishesByRestaurant/" + restaurantName)
            .then((response) => response.json())
            .then((data: Array<Dish>) => {
                if (data) {
                    setDishes(data)
                    setDishesToDisplay(data?.filter((dish) => { return dish.dishMenu == "breakfast" }))
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])
    return <>
        {width < 800 ? <>
            <Header />
            {restaurantDetails()}
            {filters()}
            {displayDishes()}
            <Footer />
        </> : <RestaurantPageDesktop></RestaurantPageDesktop>}
    </>
}
export default RestaurantPage;