import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Restaurants from "./Restaurants/Restaurants";

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes1;