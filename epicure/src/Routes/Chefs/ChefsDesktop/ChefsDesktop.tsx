import { ChefName } from "./styles";
import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import Header from "../../../Components/Header/Header";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import { AllChefs } from "../../../Data/Data";
import { NormalFilterBTN, NormalFiltersDesktopDiv } from "../../Restaurants/RestaurantsDesktop/styles";
import { ChefCard, ChefCardsDiv, ChefsDesktopDiv } from "./styles";
import { useState } from "react";
import { filtersArrayChefs } from "../../../Helpers/Helpers";

function ChefsDesktop() {
    const NewChefs = AllChefs;
    const MostViewed = AllChefs;
    const [filtersBTNs, setFiltersBTNs] = useState<Array<boolean>>(filtersArrayChefs[0]);
    return <ChefsDesktopDiv>
        <HeaderDesktop />
        <br />
        <NormalFiltersDesktopDiv>
            <NormalFilterBTN onClick={() => setFiltersBTNs(filtersArrayChefs[0])} clickedBTN={filtersBTNs[0]}>All</NormalFilterBTN>
            <NormalFilterBTN onClick={() => setFiltersBTNs(filtersArrayChefs[1])} clickedBTN={filtersBTNs[1]}>New</NormalFilterBTN>
            <NormalFilterBTN onClick={() => setFiltersBTNs(filtersArrayChefs[2])} clickedBTN={filtersBTNs[2]}>Most Viewed</NormalFilterBTN>
        </NormalFiltersDesktopDiv>
        <br />
        <ChefCardsDiv>
            {AllChefs.map((chef) => { return <ChefCard chefPic={chef.picture}><p></p><ChefName>{chef.name}</ChefName></ChefCard> })}
        </ChefCardsDiv>
        <FooterDesktop />
    </ChefsDesktopDiv>
}
export default ChefsDesktop;