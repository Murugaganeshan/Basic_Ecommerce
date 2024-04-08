import React from "react";

import "../Assets/Css/Navbar.css"
import { IoMdCall } from "react-icons/io";
import { CgMenu } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";

function Nav(){
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
        <div className="sticky-top ">  
<nav class="navbar pb-4 navbar-expand-lg sticky-top navbar-light bg-light justify-content-around">
  <h2 class="">Logo</h2>
  <div class="form-group">
    <input style={{paddingRight:"250px",paddingTop:"10px", paddingBottom:"10px"}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for products..."/>
  </div>
  <div className="d-flex justify-content-around ">
    <div className="d-flex  "> 
  <IoMdCall style={{fontSize:"40px", marginTop:"12px"}} />
    <div >
        <p style={{fontSize:"12px",textAlign:'start', marginTop:"12px"}}> Call us Now <span> <h6> +91-9876543219</h6></span></p>
    </div>
    </div>
    <div style={{width:"60px", position:'relative'}}> 
    <FcLike style={{fontSize:"40px", marginTop:"5px"}} />
    <div className="Fav"> 
    </div>
    </div>
    <div style={{width:"60px", position:'relative'}}> 
    <BsFillCartPlusFill style={{fontSize:"40px", marginTop:"5px"}} />
    <div className="Fav"> 
    </div>
    </div>

  </div>

    
 

</nav>
<div class="  topnav d-flex justify-content-around glass-look" id="myTopnav">
    <div> 
    <a  href="#news">Home</a>
    <a href="#news">About Us</a>
    <a href="#about">Shop</a>
    <a href="#contact">Contact</a>
    <a href="#about">Brand</a>
    <a href="javascript:void(0);" class="icon"  onClick={()=> myFunction()}>
     <CgMenu/>
    </a>
    </div>
<div className="delivery justify-content-center " id="myTopnav"> 
<div style={{wordSpacing:"2px"}} className=" d-flex"> 
<FaTruck style={{marginTop:"0px", fontSize:"20px"}} />
    <p style={{marginLeft:"5px"}} className="text-center"> Get Free Devlivery From $300
    <span> ShopNow </span></p>
    </div>
    
    </div>
    <div className="delivery  " id="myTopnav"> 
    <button class="order btn"><MdOutlineLocationOn /> Order Tracking</button>
    <GoPersonFill/>
    <button className="btn">Sign in</button>/
    <button className="btn"> Register </button>
    <select style={{width:"70px"}}className="Select" aria-label="Default select example">
  <option selected> Language</option>
  <option value="1">English</option>
  <option value="2">Tamil</option>
  <option value="3">Hindi</option>
</select>
   
    </div>
  

  </div>
</div>
    )
}
export default Nav