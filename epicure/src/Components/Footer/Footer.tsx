import { useNavigate } from 'react-router-dom';
import { FooterBtn, FooterDiv } from './styles';

function Footer() {
    const navigate = useNavigate();
    return (
        <FooterDiv className='footer'>
            <FooterBtn onClick={() => { navigate('/ContactUs') }} >Contact Us</FooterBtn>
            <FooterBtn onClick={() => { navigate('/TermOfUse') }} >Term of Use</FooterBtn>
            <FooterBtn onClick={() => { navigate('/PrivacyPolicy') }} >Privacy Policy</FooterBtn>
        </FooterDiv>);
}
export default Footer;