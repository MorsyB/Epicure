import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chef, Dish, Restaurant } from "../../Types/Types";
import { Hero, HeroInputDesktop, HeroInputDiv, HeroLabelDesktop, InputPopDiv, SearchRes, SearchResTitle } from "./styles";

function HeroDiv() {
    const [searchText, setSearchText] = useState<String>("");
    const navigate = useNavigate()
    const [allData, setAllData] = useState<Array<Array<any>>>([[],[],[]])
    const filterLists = (element: (Restaurant | Dish | Chef)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }

    useEffect(() => {
        fetch("/api/search/getAllData")
            .then((response) => response.json())
            .then((data) => {
                setAllData(data)
            });
    }, [])
    const displaySearchResults = () => {
        return <InputPopDiv>
            <SearchResTitle>
                Restaurants:
            </SearchResTitle>
            {allData[0].filter(filterLists).map((item) => <SearchRes onClick={() => navigate("/Restaurants/" + item.name)}>{item.name}<br /></SearchRes>)}
            <SearchResTitle>
                Cusine:
            </SearchResTitle>
            {allData[2].filter(filterLists).map((item) => <SearchRes onClick={() => navigate("/Dishes/" + item.name)}>{item.name}<br /></SearchRes>)}
        </InputPopDiv>
    }
    return (<>
        <Hero>
            <HeroInputDiv>
                <HeroLabelDesktop>Epicure works with the top chef restaurants in Tel Aviv</HeroLabelDesktop>
                <HeroInputDesktop onChange={(e) => setSearchText(e.currentTarget.value)} type="text" placeholder={"Search for restaurant cuisine, chef"} />
                {searchText != "" && displaySearchResults()}
            </HeroInputDiv>
        </Hero>
    </>
    )
}
export default HeroDiv;