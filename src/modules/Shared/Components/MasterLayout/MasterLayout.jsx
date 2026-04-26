import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../HomeModule/Components/Sidebar/Sidebar";
import Home from "../../../HomeModule/Components/Home/Home";

export default function MasterLayout() {
  return (
    <>
     <Navbar />
      <div>
       
        <Sidebar />
      </div>
      <div>
        <Home />
        <Footer />
      </div>
    </>
  );
}
