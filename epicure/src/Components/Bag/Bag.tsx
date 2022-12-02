import { BagDiv, EmptyBag } from "./styles";
import bag from "../../Data/Pictures/bag.svg"
import { useEffect, useRef, useState } from "react";

function Bag() {
    const [showBag,setShowBag] = useState<boolean>(true);
    const wrapperRef = useRef<any>(null);
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowBag(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return <>
        {showBag && <BagDiv ref={wrapperRef}>
            <img src={bag} />
            <EmptyBag>Your bag is empty</EmptyBag>
        </BagDiv>}
    </>
}
export default Bag;