import { useState } from 'react';
import './Header.css';
import logo from './Pictures/epicLogo.png';
import searchIcon from './Pictures/searchFigma.png';
import profileIcon from './Pictures/profileFigma.png';
import bagIcon from './Pictures/bagFigma.png';
import ham from './Pictures/HAMBUR.png';
import exitLogo from './Pictures/exit.png';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const [popupToDisplay, setPopupToDisplay] = useState<string>("");
    const navMenu = () => {
        return (
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <img
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}
                    src={isNavExpanded ? exitLogo : ham} />
                <ul>
                    <li>
                        <button className='generic-button'>Restaurants</button>
                    </li>
                    <li>
                        <button className='generic-button'>Chefs</button>
                    </li>
                    <hr/>
                    <li>
                        <Footer />
                    </li>
                </ul>
            </div>
        )
    };
    const navBar = () => {

        return (
            <>
                <a href="/" className="brand-name">
                    <img src={logo} alt='logo' />
                </a>

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
            <div className='popup'>
                <img src={exitLogo} onClick={() => { setPopupToDisplay("") }} />
                <Search />
            </div>

        )
    }
    return (
        <nav className="navigation">
            {navMenu()}
            {!isNavExpanded && navBar()}
            {displayPopup() && popup()}
        </nav>
    );
}
export default Header;