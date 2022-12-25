import SlidingContent from '../../Components/SlidingContent/SlidingContent';
import AboutUs from '../../Components/AboutUs/AboutUs';
import ChefOfTheWeek from '../../Components/ChefofTheWeek/ChefOfTheWeek';
import { AllChefs } from '../../Data/Data';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Autocomplete from '../../Components/Autocomplete/Autocomplete';
import NewHeader from '../../Components/Header/Header';
import { HompageDive } from './styles';
import { useEffect, useState } from 'react';
import HomepageDesktop from './HomepageDesktop/HomepageDesktop';

function Homepage() {
    const [width, setWindowWidth] = useState(0)
    useEffect(() => { 
 
      updateDimensions();
 
      window.addEventListener('resize', updateDimensions);

      fetch("/api/restaurants/getRestaurants")
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          console.log(data)
        } else {
          alert("NO DATA");
        }
      });

      return () => 
        window.removeEventListener('resize',updateDimensions);
     }, [])
     const updateDimensions = () => {
       const width = window.innerWidth
       setWindowWidth(width)
     }
    return (
        <>
        {width < 800?
        <HompageDive>
            <NewHeader />
            <Autocomplete />
            <SlidingContent />
            <ChefOfTheWeek chef={AllChefs[0]} />
            <AboutUs />
            <Footer />
        </HompageDive>:<HomepageDesktop/>
        }
        </>
            
    );
}
export default Homepage;