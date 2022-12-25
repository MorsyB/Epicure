import { useState } from "react";
import AddChefs from "./Components/AddChefs";
import AddDishes from "./Components/AddDishes";
import AddRestaurants from "./Components/AddRestaurants";

function AddDataPage() {
    return<>
    <AddRestaurants/>
    <br/>
    <AddDishes/>
    <br/>
    <AddChefs/>
    </>
}
export default AddDataPage;