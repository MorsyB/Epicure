import { Chef } from "../../Types/Types";
import Slider from "../Slider/Slider";
import { ChefDescription, ChefOfTheWeekDiv, ChefOfTheWeekName, ChefOfTheWeekTitle, ChefPic, ChefPicDiv, ChefSlider } from "./styles";

function ChefOfTheWeek(props: { chef: Chef }) {
    const chef = props.chef;
    return (
        <>
            <br/>
            <ChefOfTheWeekDiv>
                <ChefOfTheWeekTitle>Chef of the week</ChefOfTheWeekTitle>
                <ChefPicDiv>
                    <ChefPic width="100%" src={chef.picture} />
                    <ChefOfTheWeekName>{chef.name}</ChefOfTheWeekName>
                </ChefPicDiv>
                <ChefDescription> {chef.description} </ChefDescription>
            </ChefOfTheWeekDiv>
            <ChefSlider>
                <Slider title="Chef of the week:" button="Restaurants" showOwner={false} />
            </ChefSlider>
            <br/>
            <br/>
        </>
    )
}
export default ChefOfTheWeek;