import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <button onClick={()=>{navigate('/ContactUs')}} className='generic-button'>Contact Us</button>
            <button onClick={()=>{navigate('/TermOfUse')}} className='generic-button'>Term of Use</button>
            <button onClick={()=>{navigate('/PrivacyPolicy')}} className='generic-button'>Privacy Policy</button>
        </div>);
}
export default Footer;