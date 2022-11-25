import { useState } from 'react';
import './Header.css';
import logo from '../../Data/Pictures/epicLogo.png';
import searchIcon from '../../Data/Pictures/searchFigma.png';
import profileIcon from '../../Data/Pictures/profileFigma.png';
import bagIcon from '../../Data/Pictures/bagFigma.png';
import ham from '../../Data/Pictures/HAMBUR.png';
import exitLogo from '../../Data/Pictures/exit.png';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { NavbarDiv, NavigationDiv } from './styles';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const [popupToDisplay, setPopupToDisplay] = useState<string>("");
    const navigate = useNavigate();
    const navMenu = () => {
        return (
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <img
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                    src={isNavExpanded ? exitLogo : ham} />
                <ul>
                    <li>
                        <button onClick={() => navigate('/Restaurants')} className='generic-button'>Restaurants</button>
                    </li>
                    <li>
                        <button className='generic-button'>Chefs</button>
                    </li>
                    <hr />
                    <Footer />
                </ul>
            </div>
        )
    };
    const navBar = () => {

        return (
            <>
                <img onClick={() => navigate('/')} src={logo} alt='logo' />
                
                <div className='right-side'>
                    <img src={searchIcon} alt='search'
                        onClick={() => {
                            setPopupToDisplay("search")
                        }} />
                    <img src={profileIcon} alt='profile' />
                    <img src={bagIcon} alt='bag' />
                </div>
            </>
        )
    };

    const displayPopup = () => {
        return popupToDisplay !== '';
    }

    const popup = () => {

        return (
            <></>
        )
    }
    return (
        <NavigationDiv>
            {navMenu()}
            {!isNavExpanded && navBar()}
            {displayPopup() && popup()}
        </NavigationDiv>
    );
}
export default Header;