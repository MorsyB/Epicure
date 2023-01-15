import { AllRestaurants } from "../../../Data/Data";
import { Chef, Restaurant } from "../../../Types/Types";
import RestaurantsCardDesktop from "../../RestaurantCard/RestaurantCardDesktop/RestaurantCardDesktop";
import { AboutChefDiv, ChefDescriptionDesktop, ChefDivDesktop, ChefName, ChefRestarauntsTitle, ChefRestaurants, ChefRestaurantsDiv, ChefTitleDesktop, ImgDiv } from "./styles";

function ChefOfTheWeekDesktop(props: { chef: Chef, restaurants: Array<Restaurant> }) {
    const chef = props.chef;
    const chefRestaurants = props.restaurants

    return <ChefDivDesktop>
        <ChefTitleDesktop>Chef of the week:</ChefTitleDesktop>
        <AboutChefDiv>
            <ImgDiv chefPic={chef.img}>
                <ChefName>{chef.name}</ChefName>
            </ImgDiv>
            <ChefDescriptionDesktop>{chef.description}</ChefDescriptionDesktop>
        </AboutChefDiv>
        <ChefRestaurantsDiv>
            <ChefRestarauntsTitle>{chef.name}’s Restaurants</ChefRestarauntsTitle>
            <ChefRestaurants>
                {chefRestaurants.map((restaurant, i) => { return <RestaurantsCardDesktop key={i} showOwner={false} restaurant={restaurant} /> })}
            </ChefRestaurants>
        </ChefRestaurantsDiv>
    </ChefDivDesktop>
}
export default ChefOfTheWeekDesktop;