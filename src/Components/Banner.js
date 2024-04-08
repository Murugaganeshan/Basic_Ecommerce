import React from "react";
import Image from "../Assets/Images/main.png.jpg"
import { FaForward } from "react-icons/fa";
import "../Assets/Css/Banner.css";

const Home = () => {
  return (
    <>
    <div style={{marginTop:"10px"}} className="hero border-1 pb-3 ">
      <div className="img-bg card bg-dark text-white border-0 mx-5">
        <img
          className=" img-fluid "
          src={Image}
          alt="Card"
          height={500}
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container d-grid gap-2">
           
            <h2 className=" elevate     text-start  text-wrap  ">Elevate Your Style With <br/> Trandsetting Fashion</h2>
            <p className=" Discover  text-start  ">
           Discover the epitome of fashion at Chic Threads, where style meets <br/>
           substance. Explore a curated collection of the latest trends, ensuring you <br/>
           step out in confidence and flair.
            </p>
            <button type="button" class=" primary d-none d-sm-block text-start"> Buy Now <FaForward style={{marginLeft:"10px"}}/></button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;