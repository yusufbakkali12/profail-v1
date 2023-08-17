
import React from "react";
// import NavBar from "./Navbar";
// import {Routes,Route} from "react-router-dom"
// import Create from './Create'
import { Link } from "react-router-dom";
import { GoPlus,GoZap,GoHome,GoTrash } from "react-icons/go";
import logo from "./favicon.png";

const SiderBar = () => {
  
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
      style={{  height: "100vh" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
        <img src={logo} alt="logo" style={{height:"32px"}} />
        <span className="fs-4 ms-2">Dashboard</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">



        <li className="nav-item">
            <Link 
              className="nav-link text-white actve my-1"
              to='/dashboard'>
              <GoHome className="me-2"   style={{width:"16px", height:"16px"}}/>
              Home
            </Link>
        </li>
        <li>
          <Link
            rel="noreferrer"
            href="/"
            className="nav-link text-white actve my-1">
            <GoZap className=" me-2"  style={{width:"16px", height:"16px"}}/>
            Dashboard
          </Link>
        </li>
        <li>
            <Link 
              className="nav-link text-white active my-1"
              to='/dashboard/create'>
              <GoPlus className="me-2"  style={{width:"16px", height:"16px"}} / >
              Create
            </Link>
        </li>
        <li>
            <Link 
              className="nav-link text-white"
              to='/dashboard/create'>
              <GoTrash className="me-2" style={{width:"16px", height:"16px"}} / >
              Trashed
            </Link>
        </li>
      </ul>
      {/* <hr />
      <div className="dropdown">
        <a
          href="#!"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#!">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#!">
              Sign out
            </a>
          </li>
        </ul>
      </div> */}
  </div>
)}
export default SiderBar;
