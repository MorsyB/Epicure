import { AboutUsDescription, AboutUsDiv, AboutUsDivDesktop, AboutUsTitle } from "./styles";
import logo from "../../../Data/Pictures/logo-text.svg"

function AboutUsDesktop() {
    return <AboutUsDivDesktop>
        <AboutUsDiv>
            <AboutUsTitle>about us:</AboutUsTitle>
            <AboutUsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
                eu ipsum. Cras porta malesuada eros, eget blandit
                turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
                dignissim a vestibulum.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                eu ipsum. Cras porta malesuada eros.
            </AboutUsDescription>
            <img/>
        </AboutUsDiv>
        <img src={logo}/>
    </AboutUsDivDesktop>
}
export default AboutUsDesktop;