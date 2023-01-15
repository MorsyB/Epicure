import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddDataPage from "../AddDataToDB/AddDataPage";
import DishPopup from "../Components/DishPopup/DishPopup";
import Chefs from "./Chefs/Chefs";
import Homepage from "./Homepage/Homepage";
import RestaurantPage from "./RestaurantPage/RestautantPage";
import Restaurants from "./Restaurants/Restaurants";

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Restaurants/" element={<Restaurants />} />
        <Route path="/Restaurants/:RestaurantName" element={<RestaurantPage />} />
        <Route path="/Restaurants/:RestaurantName/:DishName" element={<DishPopup />} />
        <Route path="/Chefs" element={<Chefs />} />
        <Route path="/AddData" element={<AddDataPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes1;