import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddDataPage from "../AddDataToDB/AddDataPage";
import Chefs from "./Chefs/Chefs";
import Homepage from "./Homepage/Homepage";
import Restaurants from "./Restaurants/Restaurants";

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="/Chefs" element={<Chefs />} />
        <Route path="/AddData" element={<AddDataPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes1;