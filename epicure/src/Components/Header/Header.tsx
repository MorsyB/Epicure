import { useEffect, useRef, useState } from 'react';
import { logo, bagIcon, exitLogo, ham, profileIcon, searchIcon } from "../../Data/Icons";
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { ButtonDiv, CenterDiv, DividingHr, EmptyBag, HamMenu, LeftsideDiv, NavbarDiv, NavInput, NavSuggestion, ProfilePopup, RightsideDiv, SearchPopup, SearchTitle } from './styles';
import { FooterBtn } from '../Footer/styles';
import { SuggestLi, SuggestTitle } from '../Autocomplete/styles';
import { Dish, Restaurant } from '../../Types/Types';
import { AllDishes, AllRestaurants } from '../../Data/Data';
import Profile from '../Profile/Profile';
import { BagDiv } from '../Bag/styles';
import bag from "../../Data/Pictures/bag.svg"


function Header() {

    const [searchText, setSearchText] = useState<string>("");
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState<Array<boolean>>([false, false, false, false, false]);
    const navigate = useNavigate();
    const filterLists = (element: (Restaurant | Dish)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }
    const [showBag, setShowBag] = useState<boolean>(true);
    const wrapperRef = useRef<any>(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowPopup([false, false, false, false, false]);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const showNav = () => {
        return !showPopup[0];
    }
    const suggestions = () => {
        return (
            <NavSuggestion>
                <ul>
                    <SuggestTitle>
                        Restaurants:
                    </SuggestTitle>
                    {AllRestaurants.filter(filterLists).map(restaurant => { return <SuggestLi key={restaurant.name} onClick={() => { navigate('./Restaurants/' + restaurant.name) }}> {restaurant.name} </SuggestLi> })}
                </ul>
                <ul>
                    <SuggestTitle>Dishes:</SuggestTitle>
                    {AllDishes.filter(filterLists).map(dish => { return <SuggestLi key={dish.name} onClick={() => { navigate('./Dishes/' + dish.name) }}> {dish.name} </SuggestLi> })}

                </ul>
            </NavSuggestion>
        )
    }
    const searchPopup = () => {
        return <>
            <SearchTitle>
                search
            </SearchTitle>
            <SearchPopup>
                <NavInput onFocus={() => setShowSuggestion(true)} onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder={"Search for restaurant cuisine, chef"} />
                {showSuggestion && searchText !== "" && suggestions()}
            </SearchPopup>
        </>
    }

    const profilePopup = () => {
        return <>

            <ProfilePopup>
                <Profile />
            </ProfilePopup>
        </>

    }

    const hamMenu = () => {
        return <HamMenu>
            <ButtonDiv>
                <FooterBtn onClick={() => navigate('/Restaurants')}>Restaurants</FooterBtn>
                <FooterBtn onClick={() => navigate('/Chefs')}>Chefs</FooterBtn>
            </ButtonDiv>
            <DividingHr />
            <Footer />
        </HamMenu>
    }

    const showLeftDiv = () => {
        return <LeftsideDiv>
            <img onClick={() => {
                if (!showPopup[0]) {
                    setShowPopup([true, true, false, false, false]);
                } else {
                    setShowPopup([false, false, false, false, false])
                }
            }} src={showPopup[0] ? exitLogo : ham} />
            {showPopup[1] && hamMenu()}
        </LeftsideDiv>
    };
    const showRightDiv = () => {
        return <RightsideDiv>
            <img onClick={() => {
                setShowPopup([true, false, true, false, false]);
            }} src={searchIcon} />
            <img onClick={() => {
                setShowPopup([true, false, false, true, false]);
            }} src={profileIcon} />
            <img onClick={() => {
                setShowPopup([false, false, false, false, true]);
            }} src={bagIcon} />
        </RightsideDiv>
    }
    const centerDiv = () => {
        return <CenterDiv>
            <img onClick={() => navigate('/')} src={logo} />
        </CenterDiv>
    }

    const bagPopup = () => {
        return <>
            <BagDiv ref={wrapperRef}>
                <img src={bag} />
                <EmptyBag>Your bag is empty</EmptyBag>
            </BagDiv>
        </>
    }
    return (
        <NavbarDiv>
            {showLeftDiv()}
            {showNav() && centerDiv()}
            {showNav() && showRightDiv()}
            {showPopup[2] && searchPopup()}
            {showPopup[3] && profilePopup()}
            {showPopup[4] && bagPopup()}

        </NavbarDiv>)
}
export default Header;