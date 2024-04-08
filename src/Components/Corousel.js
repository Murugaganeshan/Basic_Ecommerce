import React from "react";
import Banner from"../Assets/Images/Card-Thumbnail_60e42f8fc1cae.jpeg"
import { FaForward } from "react-icons/fa";
import "../Assets/Css/Corousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Shirt from "../Assets/Images/Card-Thumbnail_60e42f8fc1cae.jpeg"
import Shirt1 from "../Assets/Images/ac1.jpg"
import Shirt2 from "../Assets/Images/ac2.jpg"
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import "../Assets/Css/Swiper.css";
import model1 from '../Assets/Images/model1.jpg'
import model2 from "../Assets/Images/model2.jpg"
import model3 from "../Assets/Images/model3.jpg"
import model5 from "../Assets/Images/model5.jpg"
import model6 from "../Assets/Images/model6.jpg"
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";


// Import Swiper styles
import 'swiper/css';

function Corousel(){
    return(
        
        <div style={{ backgroundColor:"#f2f2f2"}} className="container-fluid">
          <div className="col-lg-12 col-sm-12 row align-items-center justify-content-center">
            <div className="col-lg-5 col-sm-12 col-12">
              <div  data-aos-anchor-placement="top-bottom">
                <div style={{padding:"90px", border:"none", backgroundColor:"#f2f2f2"}}  className="card justify-content-center">
                    <h1 className="text-start display-3 font-weight-bold h1">Deals Of The Week</h1>
                    <p className="text-start"> Discover the epitome of fashion at Chic Threads, where <br/>
                    style meets substance. Explore a curated collection of the <br/>
                    latest trends, ensuring you step out in confidence and flair.
                    </p>
                    <button style={{width:"150px"}} type="button" class="my-2  btn-shop text-center"> Buy Now <FaForward style={{marginLeft:"10px"}}/></button>
                     <h2 className="text-start my-3"> Hurry, Before it's Too Late!</h2>
                     <div  className="row col-7 justify-content-start my-2 mx-2">
                        
                       
                        
                        <div style={{padding:"30px"}} className="time col card mx-2  ">

                        </div>
                        <div style={{padding:"30px"}} className=" time col card mx-2">

                        </div>
                        <div style={{padding:"30px"}} className=" time col card mx-2">

                        </div>
                        <div style={{padding:"30px"}} className=" time col card mx-2">

                    </div>

                     </div>
                     <div  className="row col-7 justify-content-start my-2 mx-2">
                        
                       
                       <h5 className="col">Days</h5>
                       <h5 className="col">Hr</h5>
                       <h5 className="col">Mins</h5>
                       <h5 className="col">Secs</h5>
                        

                     </div>

                     <div className="element">
                      <h4 className="my-4"> Go </h4> 
                     </div>
                   

                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-12">
            <div className="swiper-section banner-section mb-3">
        <Swiper
         style={{padding:"10px"}}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="swiper-img" src={Shirt} />
          </SwiperSlide>
          <SwiperSlide>
            <img  className="swiper-img" src={Shirt2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-img" src={Shirt1} />
          </SwiperSlide>
        </Swiper>
      </div>
                          
            </div>
          </div>


          <div>
            <h1 style={{fontWeight:"bold"}}> Follow Us On Instagram</h1>
            <p style={{color:"silver"}} className="my-3 col-6 mx-auto ">  Having received an overwhelming response, we have rapidly expanded our style footprint in the country with 53 Exclusive Brand Outlets, and 140 Shop in Shops till date.</p>

            <div style={{padding:"10px"}} className="container-fluid  ">
              <img style={{height:"150px"}} src={model1} alt=""/>
              <img style={{height:"150px"}} src={model2}alt=""/>
              <img style={{height:"150px"}} src={model3} alt=""/>
              <img style={{height:"150px"}} src={model5} alt=""/>
              <img style={{height:"150px"}} src={model6} alt=""/>
              <img style={{height:"150px"}} src={model1} alt=""/>
              <img style={{height:"150px"}} src={model2}alt=""/>
             


            </div>
            <div style={{padding:"20px", paddingBottom:"50px"}} className="container ">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-around  "> 
            <div className=" col d-flex  "> 
  <LiaShippingFastSolid style={{fontSize:"40px", marginTop:"12px"}} />
    <div >
        <p style={{fontSize:"12px",textAlign:'start', marginTop:"12px", marginLeft:"10px"}}> FREE SHIPPING<span> <h6> Capped at $10 per order</h6></span></p>
    </div>
    </div>
    <div className=" col d-flex  "> 
  <MdOutlinePayment style={{fontSize:"40px", marginTop:"12px"}} />
    <div >
        <p style={{fontSize:"12px",textAlign:'start', marginTop:"12px",marginLeft:"10px"}}> SECURE PAYMENTS<span> <h6> Up to 6 months installments</h6></span></p>
    </div>
    </div>
    <div className="col d-flex  "> 
  <MdOutlineSecurity style={{fontSize:"40px", marginTop:"12px"}} />
    <div >
        <p style={{fontSize:"12px",textAlign:'start', marginTop:"12px",marginLeft:"10px"}}> 30-DAYS RETURNS<span> <h6> Shop with fully confidence</h6></span></p>

    </div>
    </div>
    <div className="col d-flex  "> 
  <BsHeadset style={{fontSize:"40px", marginTop:"12px"}} />
    <div >
        <p style={{fontSize:"12px",textAlign:'start', marginTop:"12px",marginLeft:"10px"}}> 24*7 CUSTOMER SUPPORT<span> <h6> Get friendly support</h6></span></p>
    </div>
    </div>
    </div>
            </div>
   

          </div>
        </div>
    )
}
export default Corousel