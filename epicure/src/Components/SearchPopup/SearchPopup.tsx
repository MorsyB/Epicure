import { SearchInput, SearchPopupDiv } from "./styles";

function SearchPopup(){
    return(<SearchPopupDiv>
        <SearchInput type="text" placeholder={"Search for restaurant cuisine, chef"}/>
        </SearchPopupDiv>)
}
export default SearchPopup;