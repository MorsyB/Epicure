import { HeroInput, HeroLabel, HeroSearchDiv } from "../Autocomplete/styles";
import { Hero, HeroInputDesktop, HeroInputDiv, HeroLabelDesktop } from "./styles";

function HeroDiv() {
    return (<>
        <Hero>
            <HeroInputDiv>
                <HeroLabelDesktop>Epicure works with the top chef restaurants in Tel Aviv</HeroLabelDesktop>
                <HeroInputDesktop type="text" placeholder={"Search for restaurant cuisine, chef"} />
            </HeroInputDiv>
        </Hero>
    </>
    )
}
export default HeroDiv;