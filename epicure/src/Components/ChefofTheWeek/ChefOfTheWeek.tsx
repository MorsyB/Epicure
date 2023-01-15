import { Chef } from "../../Types/Types";
import Slider from "../Slider/Slider";
import { ChefDescription, ChefOfTheWeekDiv, ChefOfTheWeekName, ChefOfTheWeekTitle, ChefPic, ChefPicDiv, ChefSlider } from "./styles";
import pic from "../../Data/Pictures/yossi.svg"
import { useEffect, useState } from "react";

function ChefOfTheWeek(props: { chef: any , restaurants:any}) {

    const chef = props.chef;

    return (
        <>
            <br />
            <ChefOfTheWeekDiv>
                <ChefOfTheWeekTitle>Chef of the week</ChefOfTheWeekTitle>
                <ChefPicDiv>
                    <ChefPic width="100%" src={chef.img} />
                    <ChefOfTheWeekName>{chef.name}</ChefOfTheWeekName>
                </ChefPicDiv>
                <ChefDescription> {chef.description} </ChefDescription>
            </ChefOfTheWeekDiv>
            <ChefSlider>
                <Slider title="Chef of the week:" button="Restaurants" showOwner={false} restaurants={props.restaurants} />
            </ChefSlider>
            <br />
            <br />
        </>
    )
}
export default ChefOfTheWeek;