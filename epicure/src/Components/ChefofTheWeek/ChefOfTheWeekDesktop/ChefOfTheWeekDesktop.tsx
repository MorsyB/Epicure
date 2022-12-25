import { AllRestaurants } from "../../../Data/Data";
import { Chef } from "../../../Types/Types";
import RestaurantsCardDesktop from "../../RestaurantCard/RestaurantCardDesktop/RestaurantCardDesktop";
import { AboutChefDiv, ChefDescriptionDesktop, ChefDivDesktop, ChefName, ChefRestarauntsTitle, ChefRestaurants, ChefRestaurantsDiv, ChefTitleDesktop, ImgDiv } from "./styles";

function ChefOfTheWeekDesktop(props: { chef: Chef }) {
    const chef = props.chef;
    const chefRestaurants = chef.restaurants.map((index) => { return AllRestaurants[index] })
    return <ChefDivDesktop>
        <ChefTitleDesktop>Chef of the week:</ChefTitleDesktop>
        <AboutChefDiv>
            <ImgDiv chefPic={chef.picture}>
                <ChefName>{chef.name}</ChefName>
            </ImgDiv>
            <ChefDescriptionDesktop>{chef.description}</ChefDescriptionDesktop>
        </AboutChefDiv>
        <ChefRestaurantsDiv>
            <ChefRestarauntsTitle>Yossi’s Restaurants</ChefRestarauntsTitle>
            <ChefRestaurants>
                {chefRestaurants.map((restaurant) => { return <RestaurantsCardDesktop showOwner={false} restaurant={restaurant} /> })}
            </ChefRestaurants>
        </ChefRestaurantsDiv>
    </ChefDivDesktop>
}
export default ChefOfTheWeekDesktop;