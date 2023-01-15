import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import chefPic from "../../Data/Pictures/yossi.svg"
import { filtersArrayChefs, isNewChef, mostPopularChefs } from "../../Helpers/Helpers";
import { Chef } from "../../Types/Types";
import { FilterButton, FiltersDiv, RestaurantsTitle } from "../Restaurants/styles";
import ChefsDesktop from "./ChefsDesktop/ChefsDesktop";
import {  ChefName } from "./ChefsDesktop/styles";
import { ChefCard,ChefsCardDiv, ChefsDiv } from "./styles";

function Chefs() {
    const [AllChefs, setAllChefs] = useState<Array<Chef>>([])
    const newChefs = AllChefs.filter((chef)=>{return isNewChef(chef)})
    const mostPopular = mostPopularChefs(AllChefs)
    const [chefsToDisplay, setChefsToDisplay] = useState<Array<Chef>>(AllChefs);
    const [width, setWindowWidth] = useState(0)
    const [clickedButton, setClickedButton] = useState<Array<boolean>>(filtersArrayChefs[0]);

    useEffect(() => {

        updateDimensions();

        window.addEventListener('resize', updateDimensions);
        return () =>
            window.removeEventListener('resize', updateDimensions);
    }, [])

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
                setChefsToDisplay(newChefs);
                setClickedButton(filtersArrayChefs[1])
            }}>New</FilterButton>
            <FilterButton clickedBTN={clickedButton[2]} onClick={() => {
                setChefsToDisplay(mostPopular);
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
                    {chefsToDisplay.map((chef,i) => { return <ChefCard key={i} chefPic={chefPic}><p></p><ChefName>{chef.name}</ChefName></ChefCard> })}
                </ChefsCardDiv>
                <Footer />
            </ChefsDiv>) : <ChefsDesktop />}
    </>
    )
}
export default Chefs;