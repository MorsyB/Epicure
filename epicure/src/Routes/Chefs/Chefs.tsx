import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { AllChefs } from "../../Data/Data";
import { filtersArrayChefs } from "../../Helpers/Helpers";
import { Chef } from "../../Types/Types";
import { FilterButton, FiltersDiv, RestaurantsTitle } from "../Restaurants/styles";
import ChefsDesktop from "./ChefsDesktop/ChefsDesktop";
import {  ChefName } from "./ChefsDesktop/styles";
import { ChefCard,ChefsCardDiv, ChefsDiv } from "./styles";

function Chefs() {
    const [width, setWindowWidth] = useState(0)
    const [chefsToDisplay, setChefsToDisplay] = useState<Array<Chef>>(AllChefs);
    const [clickedButton, setClickedButton] = useState<Array<boolean>>(filtersArrayChefs[0]);

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
    const filters = () => {
        return (<FiltersDiv>
            <FilterButton clickedBTN={clickedButton[0]} onClick={() => {
                setChefsToDisplay(AllChefs);
                setClickedButton(filtersArrayChefs[0])
            }}>All</FilterButton>
            <FilterButton clickedBTN={clickedButton[1]} onClick={() => {
                setChefsToDisplay(AllChefs);
                setClickedButton(filtersArrayChefs[1])
            }}>New</FilterButton>
            <FilterButton clickedBTN={clickedButton[2]} onClick={() => {
                setChefsToDisplay(AllChefs);
                setClickedButton(filtersArrayChefs[2])
            }}>Most Viewed</FilterButton>
        </FiltersDiv>)
    }
    return (<>
        {width < 800 ? (
            <ChefsDiv>
                <Header />
                <RestaurantsTitle>Chefs</RestaurantsTitle>
                {filters()}
                <ChefsCardDiv>
                    {AllChefs.map((chef) => { return <ChefCard chefPic={chef.picture}><p></p><ChefName>{chef.name}</ChefName></ChefCard> })}
                </ChefsCardDiv>
                <Footer />
            </ChefsDiv>) : <ChefsDesktop />}
    </>
    )
}
export default Chefs;