import AboutUsDesktop from "../../../Components/AboutUs/AboutUsDesktop/AboutUsDesktop";
import ChefOfTheWeekDesktop from "../../../Components/ChefofTheWeek/ChefOfTheWeekDesktop/ChefOfTheWeekDesktop";
import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import HeroDiv from "../../../Components/HeroDiv/HeroDiv";
import PopularRestaurants from "../../../Components/PopularRestaurants/PopularRestaurants";
import { AllChefs } from "../../../Data/Data";
import { HomepageDeskDiv } from "./styles";

function HomepageDesktop() {

    return (
        <HomepageDeskDiv>
            <HeaderDesktop/>
            <HeroDiv/>
            <PopularRestaurants/>
            <ChefOfTheWeekDesktop chef={AllChefs[0]}/>
            <AboutUsDesktop/>
            <FooterDesktop/>
        </HomepageDeskDiv>
        )
}
export default HomepageDesktop;