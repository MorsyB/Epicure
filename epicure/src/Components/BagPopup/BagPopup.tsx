import { bagIcon } from "../../Data/Icons";
import { SearchPopupDiv } from "../SearchPopup/styles";
import { BagText,BagPopupDiv, BagBTN } from "./styles";

function BagPopup(){
    return (<BagPopupDiv>
        
        <img width="45px" src={bagIcon}/>
        <BagText>Your bag is empty</BagText>

        <BagBTN>Order History</BagBTN>
    </BagPopupDiv>)
}
export default BagPopup;