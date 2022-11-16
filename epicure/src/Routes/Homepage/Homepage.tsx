import SlidingContent from '../../Components/SlidingContent/SlidingContent';
import heroIMG from './hero-picture 1.png';
import './Homepage.css';

function Homepage() {
    return (
        <div className='Homepage'>
            <div className='hero'>
                <div className='hero-search'>
                    <label className='hero-label'>Epicure works with the top chef restaurants in Tel Aviv</label><br></br>
                    <input className='hero-input' type="text" placeholder={"Search for restaurant cuisine, chef"} />
                </div>
            </div>
            <SlidingContent/>
            Sig Dishes<br />
            Chef of the week<br />
            About us<br />
        </div>);
}
export default Homepage;