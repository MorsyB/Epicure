import { useState } from "react";

function AddChefs() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [description, setDescription] = useState("");
    const handleSubmit = () => {
        const chef = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": name,
                "age": age,
                "description": description,
                "restaurants": [],
                "img": ""
            })
        }
        fetch("/api/chefs/createChef", chef)
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
        <input type="text" placeholder="name" onChange={(e) => setName(e.currentTarget.value)} />
        <input type="number" placeholder="age" onChange={(e) => setAge(Number(e.currentTarget.value))} />
        <input type="text" placeholder="description" onChange={(e) => setDescription(e.currentTarget.value)} />
        <button onClick={() => { handleSubmit() }}>Create</button>
    </>
}
export default AddChefs;