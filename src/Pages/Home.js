import React from "react";
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Shop from '../Components/Shop';
import Nav from "../Components/Nav";
import Corousel from "../Components/Corousel";
import Footer from "../Components/Footer";
import Final from "../Components/Final";
function Home(){
    return(
        <div>
        <Nav/>
      <Banner/>
      <Category/>
      <Shop/>
      <Corousel/>
      <Footer/>
      <Final/>
      </div>
    )
}
export default Home