import { useState } from "react";

function AddDishes(){
    const [dishName, setDishName] = useState("");
    const [restName, setRestName] = useState("");
    const [about, setAbout] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const dish = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": dishName,
                "restaurant": restName,
                "about": about,
                "price": price,
                "type": type,
                "category": category,
                "img": ""
            })
        }
        fetch("/api/dishes/createDish", dish)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                } else {
                    alert("ERROR");
                }
            });
    }
    return <>
        <input type="text" onChange={(e) => { setDishName(e.currentTarget.value) }} placeholder="Name" />
        <input type="text" onChange={(e) => { setRestName(e.currentTarget.value) }} placeholder="ResyName" />
        <input type="text" onChange={(e) => { setAbout(e.currentTarget.value) }} placeholder="about" />
        <input type="number" onChange={(e) => { setPrice(Number(e.currentTarget.value)) }} placeholder="price" />
        <input type="text" onChange={(e) => { setCategory(e.currentTarget.value) }} placeholder="category" />
        <input type="text" onChange={(e) => { setType(e.currentTarget.value) }} placeholder="type" />
        <button onClick={() => handleSubmit()}>Create</button>
    </>}
export default AddDishes;