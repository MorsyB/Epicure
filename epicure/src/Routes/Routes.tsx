import React from "react";
import {Routes,Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

const Routes1 = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="*" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routes1;