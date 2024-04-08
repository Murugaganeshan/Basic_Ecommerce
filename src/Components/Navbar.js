// import Style
import "../Assets/Css/Navbar.css";

// import required Modules
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../Assets/Css/Navbar.css"
import { CgMenu } from "react-icons/cg";

const NavBar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <> 
    <div class="  topnav" id="myTopnav">
    <a href="#news">Home</a>
    <a href="#news">About Us</a>
    <a href="#about">Shop</a>
    <a href="#contact">Contact</a>
    <a href="#about">Brand</a>
    <a href="javascript:void(0);" class="icon"  onClick={()=> myFunction()}>
     <CgMenu/>
    </a>

  </div>
 
  

  </>

  );
};

export default NavBar;

