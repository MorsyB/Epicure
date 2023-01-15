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
  const [chefOfTheWeek, setChefOfTheWeek] = useState<any>("");
  const [restaurants, setRestaurants] = useState<any>("");
  useEffect(() => {

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () =>
      window.removeEventListener('resize', updateDimensions);
  }, [])
  useEffect(() => {
    fetch("/api/chefs/getChefOfTheWeek")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          fetch("/api/restaurants/getRestaurantsByChef/" + data.name)
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                setRestaurants(data)
              } else {
                alert("Can't receive data from server...");
              }
            });
          setChefOfTheWeek(data)
        } else {
          alert("Can't receive data from server...");
        }
      });
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  return (
    <>
      {width < 800 ?
        <HompageDive>
          <NewHeader />
          <Autocomplete />
          <SlidingContent />
          <ChefOfTheWeek chef={chefOfTheWeek} restaurants={restaurants} />
          <AboutUs />
          <Footer />
        </HompageDive> : <HomepageDesktop />
      }
    </>

  );
}
export default Homepage;