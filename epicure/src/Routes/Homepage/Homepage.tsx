import SlidingContent from '../../Components/SlidingContent/SlidingContent';
import './Homepage.css';
import AboutUs from '../../Components/AboutUs/AboutUs';
import ChefOfTheWeek from '../../Components/ChefofTheWeek/ChefOfTheWeek';
import { AllChefs } from '../../Data/Data';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Homepage() {
    
    const searchDiv = () => {
        return (
            <div className='hero'>
                <div className='hero-search'>
                    <label className='hero-label'>Epicure works with the top chef restaurants in Tel Aviv</label><br></br>
                    <input className='hero-input' type="text" placeholder={"Search for restaurant cuisine, chef"} />
                </div>
            </div>
        )
    };

    return (
        <div className='Homepage'>
            <Header/>
            {searchDiv()}
            <SlidingContent />
            <ChefOfTheWeek chef={AllChefs[0]}/>
            <AboutUs />
            <Footer/>
        </div>);
}
export default Homepage;