import { useNavigate } from "react-router-dom";
import { FooterBTN, FooterDiv } from "./styles";

function FooterDesktop(){
    const navigate = useNavigate()
    return <FooterDiv>
        <FooterBTN onClick={()=>navigate("/ContactUS")}>Contact Us</FooterBTN>
        <FooterBTN onClick={()=>navigate("/TermOfUse")}>Term of Use</FooterBTN>
        <FooterBTN onClick={()=>navigate("/PrivacyPolicy")}>Privacy Policy</FooterBTN>
    </FooterDiv>
}
export default FooterDesktop;