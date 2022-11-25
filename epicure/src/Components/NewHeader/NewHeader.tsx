import { useState } from 'react';
import logo from '../../Data/Pictures/epicLogo.png';
import searchIcon from '../../Data/Pictures/searchFigma.png';
import profileIcon from '../../Data/Pictures/profileFigma.png';
import bagIcon from '../../Data/Pictures/bagFigma.png';
import ham from '../../Data/Pictures/HAMBUR.png';
import exitLogo from '../../Data/Pictures/exit.png';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import "./NewHeader.css";
import { ButtonDiv, CenterDiv, DividingHr, HamMenu, LeftsideDiv, NavbarDiv, NavInput, NavSuggestion, RightsideDiv, SearchPopup, SearchTitle } from './styles';
import { FooterBtn } from '../Footer/styles';
import { HeroInput, SuggestDiv, SuggestLi, SuggestTitle } from '../Autocomplete/styles';
import { Dish, Restaurant } from '../../Types/Types';
import { AllDishes, AllRestaurants } from '../../Data/Data';

function NewHeader() {
    
    const [searchText, setSearchText] = useState<string>("");
    const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
    const [hamClicked, setHamClicked] = useState<boolean>(false);
    const [showExit, setShowExit] = useState<boolean>(false);
    const [showSearchPopup, setShowSearchPopup] = useState<boolean>(false);
    const navigate = useNavigate();
    const filterLists = (element: (Restaurant | Dish)) => { return element.name.toLowerCase().includes(searchText.toLowerCase()) }
    const mapSearchResault = (element: Restaurant | Dish, type: string) => { return <li onClick={() => { navigate('./' + element) }}> {element.name} </li> }
    const showNav = () => {
        return !showExit;
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
            <NavInput onFocus={()=>setShowSuggestion(true)} onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder={"Search for restaurant cuisine, chef"} />
            {showSuggestion && searchText !== "" && suggestions()}
        </SearchPopup>
        </>
    }
    const hamMenu = () => { return <HamMenu>
        <ButtonDiv>
            <FooterBtn onClick={()=>navigate('/Restaurants')}>Restaurants</FooterBtn>
            <FooterBtn onClick={()=>navigate('/Chefs')}>Chefs</FooterBtn>

        </ButtonDiv>
        <DividingHr/>
        <Footer/>  
        </HamMenu> }

    const showLeftDiv = () => {
        return <LeftsideDiv>
            <img onClick={() => {
            if(!showExit){
                setHamClicked(true)
            }else{
                setShowSearchPopup(false)
                setHamClicked(false);
            }
            setShowExit(!showExit);
            }} src={showExit ? exitLogo : ham} />
            {hamClicked && hamMenu()}
        </LeftsideDiv>
    };
    const showRightDiv = () => {
        return <RightsideDiv>
            <img onClick={()=>{
                setShowExit(true)
                setShowSearchPopup(true)}} src={searchIcon} />
            <img src={profileIcon} />
            <img src={bagIcon} />
        </RightsideDiv>
    }

    return (
        <NavbarDiv>
            {showLeftDiv()}
            {showNav() && <CenterDiv>
                <img onClick={()=>navigate('/')} src={logo} />
            </CenterDiv>}
            {showNav() && showRightDiv()}
            {showSearchPopup && searchPopup()}
        </NavbarDiv>)
}
export default NewHeader;