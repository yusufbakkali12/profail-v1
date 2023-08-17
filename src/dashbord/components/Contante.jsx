import React from "react";
import NavBar from "./Navbar";
import { Routes,Route} from "react-router-dom"
import Create from './Create'
// import { Link } from "react-router-dom";
// import { GoPlus,GoZap } from "react-icons/go";
import SiderBar from "./SiderBar"
import Home from "./Home";
// import logo from "./favicon.png";
const Contante = () => {
  return (
    <>
      <div className="d-flex flex-nowrap">
        <SiderBar />
        <div className="w-100 ">
          <NavBar />
          <main className="container">
            <Routes>
                <Route default  path="/" name="Login Page" element={<Home />}/>
                <Route  path="/dashboard/create" name="Login Page" element={<Create />}/>
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default Contante;
