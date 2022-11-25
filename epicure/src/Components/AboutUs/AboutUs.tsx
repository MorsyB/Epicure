import logoText from '../../Data/Pictures/logo-text.png';
import appleLogo from '../../Data/Pictures/apple-logo.png';
import {AboutUsDiv, AboutUsText, AboutUsTitle} from './styles';

function AboutUs() {
    return (
        <AboutUsDiv>
            <img src={logoText} width="102px"/>
            <img src={appleLogo} onClick={()=>{window.open('https://www.apple.com/app-store/')}} width="180px"/>
            <AboutUsTitle>About us:</AboutUsTitle>
            <AboutUsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
            </AboutUsText>
        </AboutUsDiv>
    )
}
export default AboutUs;