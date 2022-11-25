import SlidingContent from '../../Components/SlidingContent/SlidingContent';
import AboutUs from '../../Components/AboutUs/AboutUs';
import ChefOfTheWeek from '../../Components/ChefofTheWeek/ChefOfTheWeek';
import { AllChefs } from '../../Data/Data';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Autocomplete from '../../Components/Autocomplete/Autocomplete';
import NewHeader from '../../Components/NewHeader/NewHeader';
import { HompageDive } from './styles';

function Homepage() {
    return (
        <HompageDive>
            <NewHeader />
            <Autocomplete />
            <SlidingContent />
            <ChefOfTheWeek chef={AllChefs[0]} />
            <AboutUs />
            <Footer />
        </HompageDive>
    );
}
export default Homepage;