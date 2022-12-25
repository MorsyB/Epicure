import { HeaderBTN, HeaderDesktopDiv, HeaderImg, LeftSideDiv, MarginDiv, RightSideDiv } from "./styles";
import { logoDesktop, bagIcon, profileIcon, searchIcon } from "../../../Data/Icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchPopup from "../../SearchPopup/SearchPopup";
import BagPopup from "../../BagPopup/BagPopup";

function HeaderDesktop() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState<Boolean>(false);
    const [showBag, setShowBag] = useState<Boolean>(false);
    const leftSide = () => {
        return (
            <LeftSideDiv>
                <HeaderImg onClick={() => navigate('/')} src={logoDesktop} />
                <HeaderBTN onClick={() => navigate('/Restaurants')}>Restaraunts</HeaderBTN>
                <HeaderBTN onClick={() => navigate('/Chefs')}>Chefs</HeaderBTN>
            </LeftSideDiv>
        )
    }
    const searchPopup = () => {
        return (<SearchPopup />)
    }
    const bagPopup = () => {
        return (<BagPopup />)
    }
    const rightSide = () => {
        return (<RightSideDiv>
            <HeaderImg onClick={() => {
                setShowBag(false)
                setShowSearch(!showSearch)
            }} src={searchIcon} />
            <HeaderImg onClick={() => setShowSearch(!showBag)} src={profileIcon} />
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
        {showSearch && searchPopup()}
        {showBag && bagPopup()}
    </HeaderDesktopDiv>
    <MarginDiv/>
    </>
}
export default HeaderDesktop;