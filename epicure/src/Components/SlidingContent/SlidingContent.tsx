import { useNavigate } from "react-router-dom";
import spicy from '../../Data/Pictures/spicy.png'
import vegan from '../../Data/Pictures/vegan.png'
import vegetarian from '../../Data/Pictures/vegetarian.png'
import SliderDiv from '../Slider/Slider';
import { DivText, DivTitle, SignatureDish, SlidingDiv } from './styles';

function SlidingContent() {
    const navigate = useNavigate();

    const displayPopularRestaurants = () => {
        return (
            <SliderDiv title='popular restaurant in epicure:' button='Restaurants' showOwner={true} />
        )
    };

    const displayDishes = () => {
        return (
            <SliderDiv title='Signature Dish Of:' button='Dishes' />
        )
    }

    const displaySignatureDishes = () => {
        return (
            <SignatureDish>
                <DivTitle>Signature Dish Of:</DivTitle>
                <img src={spicy} />
                <DivText>Spicy</DivText>
                <img src={vegan} />
                <DivText>Vegitarian</DivText>
                <img src={vegetarian} />
                <DivText>Vegan</DivText>
            </SignatureDish>
        )
    }

    return (
        <>
        <SlidingDiv>
                <br />
                {displayPopularRestaurants()}
                <br />
                {displayDishes()}
                <br />
        </SlidingDiv>
            {displaySignatureDishes()}
        </>
    )
}
export default SlidingContent;

