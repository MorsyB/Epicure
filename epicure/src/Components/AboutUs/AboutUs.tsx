import './AboutUs.css'
import logoText from '../../Data/Pictures/logo-text.png';
import appleLogo from '../../Data/Pictures/apple-logo.png';

function AboutUs() {
    return (
        <div className='about-us'>
            <img src={logoText} width="102px"/>
            <img src={appleLogo} onClick={()=>{window.open('https://www.apple.com/app-store/')}} width="180px"/>
            <p className="about-us-title">About us:</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.<br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
            </p>
        </div>
    )
}
export default AboutUs;