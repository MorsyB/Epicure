import { useEffect, useState } from "react";
import AboutUsDesktop from "../../../Components/AboutUs/AboutUsDesktop/AboutUsDesktop";
import ChefOfTheWeekDesktop from "../../../Components/ChefofTheWeek/ChefOfTheWeekDesktop/ChefOfTheWeekDesktop";
import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import HeroDiv from "../../../Components/HeroDiv/HeroDiv";
import PopularRestaurants from "../../../Components/PopularRestaurants/PopularRestaurants";
import { AllChefs } from "../../../Data/Data";
import { Chef, Dish, Restaurant } from "../../../Types/Types";
import { HomepageDeskDiv } from "./styles";

function HomepageDesktop() {
    const [popularRestaurants, setPopularRestaurants] = useState<Array<Restaurant>>([])
    const [popularDishes, setPopularDishes] = useState<Array<Dish>>([])
    const [chef, setChef] = useState<Chef>()
    const [chefRestaurants, setChefRestaurants] = useState<Array<Restaurant>>([])
    useEffect(() => {
        fetch("/api/restaurants/getPopularRestaurants/")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setPopularRestaurants(data)
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])
    useEffect(() => {
        fetch("/api/chefs/getChefOfTheWeek")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    fetch("/api/restaurants/getRestaurantsByChef/" + data.name)
                        .then((response) => response.json())
                        .then((data) => {
                            if (data) {
                                setChefRestaurants(data)
                            } else {
                                alert("Can't receive data from server...");
                            }
                        });
                    setChef(data)
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])
    useEffect(() => {
        fetch("/api/dishes/getPopularDishes/")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setPopularDishes(data)
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])
    return (
        <HomepageDeskDiv>
            <HeaderDesktop />
            <HeroDiv />
            {popularDishes.length && <PopularRestaurants Restaurants={popularRestaurants} Dishes={popularDishes} />}
            {chef !== undefined && <ChefOfTheWeekDesktop chef={chef} restaurants={chefRestaurants} />}
            <AboutUsDesktop />
            <FooterDesktop />
        </HomepageDeskDiv>
    )
}
export default HomepageDesktop;