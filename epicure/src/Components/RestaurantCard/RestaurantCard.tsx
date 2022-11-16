import { Restaurant } from '../../Types/Types';

function RestaurantCard(props:{restaurants:Restaurant[]}){
    const restaurants = props.restaurants;
    return(
        <div className="card">
            {restaurants[0].name}<br/>
            {restaurants[0].dishes[0].name}<br/>
            {restaurants[0].owner}<br/>
            {restaurants[0].picture}
        </div>
    )

}
export default RestaurantCard;