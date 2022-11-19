import SlidingContent from '../../Components/SlidingContent/SlidingContent';
import './Homepage.css';
import AboutUs from '../../Components/AboutUs/AboutUs';
import ChefOfTheWeek from '../../Components/ChefofTheWeek/ChefOfTheWeek';
import { AllChefs } from '../../Data/Data';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Autocomplete from '../../Components/Autocomplete/Autocomplete';

function Homepage() {
    return (
        <div className='Homepage'>
            <Header/>
            <Autocomplete/>
            <SlidingContent />
            <ChefOfTheWeek chef={AllChefs[0]}/>
            <AboutUs />
            <Footer/>
        </div>);
}
export default Homepage;