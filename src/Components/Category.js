import React from "react";
import "../Assets/Css/Category.css";
import Dress from "../Assets/Images/uniform_2132679.png"
import Access from "../Assets/Images/purse_12585087.png"
import Shoes from "../Assets/Images/sport-shoe_80807.png"
import Tv from "../Assets/Images/smart-tv_4551202.png"
import Pant from "../Assets/Images/pants_717476.png"
import Baby from "../Assets/Images/baby-clothes_2123076.png"
import AccessoriesArray from "./Product";

function Category(){
    return(

        <>
        <div className="container-fluid"> 
        <div className="trending container-fluid">
        <h1  className=" text-center  my-5  "> Trending Categories </h1>
        <div className="container">
            <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2  row-cols-1 justify-content-center mx-5 ">
            {AccessoriesArray.map((data) => {
              return (
                <div  className="col pb-4 h-40">
                    <div style={{border:"none",alignItems:"center"}} class="card h-40 ">
                        <div className="circle" >
                      <img
                      style={{height:"55px",objectFit:"contain"}}
                        class="img-fluid "
                        src={data.productImag}
                        
                        alt=""
                      />
                       </div>
                      <p className="mx-1 my-1 fw-bold"> {data.productName}</p>
                     
                       
                      
                   
                    </div>
                  </div>
              );
            })}
            

            </div>

        </div>

        


        </div>
        <div className="container  my-5 ">
        <h1> New Arrivals </h1>
        <p style={{color:"silver"}} className="my-3 col-6 mx-auto ">  Having received an overwhelming response, we have rapidly expanded our style footprint in the country with 53 Exclusive Brand Outlets, and 140 Shop in Shops till date.</p>


        </div>
        </div>
        </>
    )
}
export default Category