import { ChefName } from "./styles";
import FooterDesktop from "../../../Components/Footer/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../../../Components/Header/HeaderDesktop/HeaderDesktop";
import { NormalFilterBTN, NormalFiltersDesktopDiv } from "../../Restaurants/RestaurantsDesktop/styles";
import { ChefCard, ChefCardsDiv, ChefsDesktopDiv } from "./styles";
import { useEffect, useState } from "react";
import { filtersArrayChefs, isNewChef, mostPopularChefs } from "../../../Helpers/Helpers";
import { Chef } from "../../../Types/Types";
import chefPic from "../../../Data/Pictures/yossi.svg"


function ChefsDesktop() {
    const [AllChefs, setAllChefs] = useState<Array<Chef>>([])
    const newChefs = AllChefs.filter((chef) => { return isNewChef(chef) })
    const mostPopular = mostPopularChefs(AllChefs)
    const [chefsToDisplay, setChefsToDisplay] = useState<Array<Chef>>(AllChefs);
    const [filtersBTNs, setFiltersBTNs] = useState<Array<boolean>>(filtersArrayChefs[0]);

    useEffect(() => {
        fetch("/api/chefs/getChefs")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setAllChefs(data)
                    setChefsToDisplay(data)
                } else {
                    alert("Can't receive data from server...");
                }
            });
    }, [])

    return <ChefsDesktopDiv>
        <HeaderDesktop chef={true} />
        <br />
        <NormalFiltersDesktopDiv>
            <NormalFilterBTN onClick={() => { setChefsToDisplay(AllChefs); setFiltersBTNs(filtersArrayChefs[0]) }} clickedBTN={filtersBTNs[0]}>All</NormalFilterBTN>
            <NormalFilterBTN onClick={() => { setChefsToDisplay(newChefs); setFiltersBTNs(filtersArrayChefs[1]); }} clickedBTN={filtersBTNs[1]}>New</NormalFilterBTN>
            <NormalFilterBTN onClick={() => { setChefsToDisplay(mostPopular); setFiltersBTNs(filtersArrayChefs[2]) }} clickedBTN={filtersBTNs[2]}>Most Viewed</NormalFilterBTN>
        </NormalFiltersDesktopDiv>
        <br />
        <ChefCardsDiv>
            {chefsToDisplay.map((chef, i) => { return <ChefCard key={i} chefPic={chefPic}><p></p><ChefName>{chef.name}</ChefName></ChefCard> })}
        </ChefCardsDiv>
        <FooterDesktop />
    </ChefsDesktopDiv>
}
export default ChefsDesktop;