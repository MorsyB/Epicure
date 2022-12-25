import { useState } from "react";

function AddRestaurants() {
    const [restName, setRestName] = useState("");
    const [chefName, setChefName] = useState("");
    const [openDate, setOpenDate] = useState("");
    const [open, setOpen] = useState("");
    const [close, setClose] = useState("");

    const handleSubmit = () => {
        const restaurant = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": restName,
                "chef": chefName,
                "openDate": openDate,
                "open": open,
                "close": close,
                "dish": [],
                "img": ""
            })
        }
        fetch("/api/restaurants/createRestaurant", restaurant)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                } else {
                    alert("Wrong email or password");
                }
            });
    }
    return <>
        <input type="text" onChange={(e) => { setRestName(e.currentTarget.value) }} placeholder="restName" />
        <input type="text" onChange={(e) => { setChefName(e.currentTarget.value) }} placeholder="chefName" />
        <input type="text" onChange={(e) => { setOpenDate(e.currentTarget.value) }} placeholder="openDate" />
        <input type="text" onChange={(e) => { setOpen(e.currentTarget.value) }} placeholder="open" />
        <input type="text" onChange={(e) => { setClose(e.currentTarget.value) }} placeholder="close" />
        <button onClick={() => handleSubmit()}>Submit</button>
    </>
}
export default AddRestaurants;