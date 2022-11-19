import { Chef } from "../../Types/Types";
import Slider from "../Slider/Slider";
import './ChefOfTheWeek.css';

function ChefOfTheWeek(props: { chef: Chef }) {
    const chef = props.chef;
    return (<div className="chef-of-the-week">
        <p className="chef-title">Chef of the week</p>
        <div>
            <img width="100%" src={chef.picture} />
            <p className="chef-name">
                {chef.name}
            </p>
        </div>
        <p className="chef-description">
            {chef.description}
        </p>
        <Slider title="Chef of the week:" button="Restaurants" showOwner={false} />
    </div>)
}
export default ChefOfTheWeek;