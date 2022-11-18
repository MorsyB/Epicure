import { Chef } from "../../Types/Types";
import Slider from "../Slider/Slider";
import './ChefOfTheWeek.css';

function ChefOfTheWeek(props: { chef: Chef }) {
    const chef = props.chef;
    return (<div className="chef-of-the-week">
        <p className="chef-title">Chef of the week</p>
        <img width="100%" src={chef.picture} />
        <p className="chef-name">
            {chef.name}
        </p>
        <p className="chef-description">
            {chef.description}
        </p>
        <Slider title="Chef of the week:" button="Restaurants" />
    </div>)
}
export default ChefOfTheWeek;