import { HeaderBTN, HeaderBTNClicked, HeaderDesktopDiv, HeaderImg, LeftSideDiv, MarginDiv, ProfilePopup, RightSideDiv, SearchDivPopup, SearchInput } from "./styles";
import { logoDesktop, bagIcon, profileIcon, searchIcon } from "../../../Data/Icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import BagPopup from "../../BagPopup/BagPopup";
import { Chef, Dish, Restaurant } from "../../../Types/Types";
import { SearchRes, SearchResTitle } from "../../HeroDiv/styles";
import ProfileDesktop from '../../Profile/ProfileDesktop';

function HeaderDesktop(props: { chef?: boolean, restaurants?: boolean }) {
    const navigate = useNavigate();
    let chefBTN = false || props.chef;
    let restaurantsBTN = false || props.restaurants;
    const [showSearch, setShowSearch] = useState<Boolean>(false);
    const [showBag, setShowBag] = useState<Boolean>(false);
    const [showProfile, setShowProfile] = useState<Boolean>(false);
    const [searchText, setSearchText] = useState<String>("");
    const [allData, setAllData] = useState<Array<Array<any>>>([[], [], []])
    const filterLists = (element: (Restaurant | Dish | Chef)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }

    useEffect(() => {
        fetch("/api/search/getAllData")
            .then((response) => response.json())
            .then((data) => {
                setAllData(data)
            });
    }, [])
    const displaySearchResults = () => {
        return <SearchDivPopup >
            <SearchResTitle>
                Restaurants:
            </SearchResTitle>
            {allData[0].filter(filterLists).map((item) => <SearchRes onClick={() => navigate("/Restaurants/" + item.name)}>{item.name}<br /></SearchRes>)}
            <SearchResTitle>
                Cusine:
            </SearchResTitle>
            {allData[2].filter(filterLists).map((item) => <SearchRes onClick={() => navigate("/Dishes/" + item.name)}>{item.name}<br /></SearchRes>)}
        </SearchDivPopup>
    }

    const profilePopup = () => {
        return <>

            <ProfilePopup>
                <ProfileDesktop />
            </ProfilePopup>
        </>

    }
    const leftSide = () => {
        return (
            <LeftSideDiv>
                <HeaderImg onClick={() => navigate('/')} src={logoDesktop} />
                {!restaurantsBTN ? <HeaderBTN onClick={() => navigate('/Restaurants')}>Restaraunts</HeaderBTN> : <HeaderBTNClicked onClick={() => navigate('/Restaurants')}>Restaraunts</HeaderBTNClicked>}
                {!chefBTN ? <HeaderBTN onClick={() => navigate('/Chefs')}>Chefs</HeaderBTN> : <HeaderBTNClicked onClick={() => navigate('/Chefs')}>Chefs</HeaderBTNClicked>}
            </LeftSideDiv>
        )
    }
    const bagPopup = () => {
        return (<BagPopup />)
    }
    const rightSide = () => {
        return (<RightSideDiv>

            {showSearch && <SearchInput onChange={(e) => { setSearchText(e.target.value) }} onBlur={() => { if (searchText == "") setShowSearch(!showSearch); }} type="text" placeholder={"Search for restaurant cuisine, chef"} />}
            {(searchText != "") && showSearch && displaySearchResults()}
            <HeaderImg onClick={() => {
                setShowBag(false)
                setShowSearch(!showSearch)
            }} src={searchIcon} />
            <HeaderImg onClick={() => {
                setShowSearch(false)
                setShowBag(false)
                setShowProfile(!showProfile)
            }} src={profileIcon} />
            <HeaderImg onClick={() => {
                setShowSearch(false)
                setShowBag(!showBag)
            }} src={bagIcon} />
        </RightSideDiv>)
    }
    return <>
        <HeaderDesktopDiv>
            {leftSide()}
            {rightSide()}
            {showBag && bagPopup()}
            {showProfile && profilePopup()}
        </HeaderDesktopDiv>
        <MarginDiv />
    </>
}
export default HeaderDesktop;