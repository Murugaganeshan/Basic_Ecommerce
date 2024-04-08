import React, { useState } from "react";
import "../Assets/Css/Shop.css";
import Shirt from "../Assets/Images/shirt2.jpg"
import Rating from "../Assets/Images/stars_11906616.png"
import { FaForward } from "react-icons/fa";
import data from "../Products/Menswear";
import Women from "../Products/Womenswear"
import WomenAcc from "../Products/WomenAc"
import MensAc from "../Products/MensAc"
const Shop = ()=>{

  const [toggle, setToggle]=useState(1)
  function updateToggle(id){
    setToggle(id)
  }

    const [noOfElement, setnoOfElement]= useState(3);

    const slice= data.carddata.slice(0,noOfElement);
    const slice1=Women.carddata.slice(0,noOfElement);
    const slice2=WomenAcc.carddata.slice(0,noOfElement);
    const slice3=MensAc.carddata.slice(0,noOfElement);

    const loadmore=()=>{
        setnoOfElement(noOfElement + noOfElement);
    }
    return(
        <>
        <div >
            <div className="container-fluid">  
            <div className="container-sm">
                <div className="row d-flex justify-content-around ">
                <button type="button " class="btn-1 px-2  col-2" onClick={()=>updateToggle(1)}>Men's Fashion</button>
                <button type="button " class="btn-1 col-2" onClick={()=>updateToggle(2)}>Women's Fashion</button>
                <button type="button " class="btn-1 col-2"  onClick={()=>updateToggle(3)}>Women's Accessories</button>
                <button type="button " class="btn-1 col-2"  onClick={()=>updateToggle(4)} >Men's Accessories</button>
                <button type="button " class="btn-1  col-2"  onClick={()=>updateToggle(5)}>Discount Deals</button>


</div> 
               
            </div>
         <div className= {toggle ===1 ? "show-content" : "content"}> 
        <div className="container-xl">
        
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center my-3">
          {slice.map((item, index) => {
              return (
                <div >
                <div  className=" col pb-4 my-3" key={index}>
                  <div class="card-shop card ">
                    <img
                    style={{padding:"20px",borderRadius:"25px",height:"300px"}}
                      class="card-img-top product-img img-fluid"
                      src={item.Image}
                      title=""
                      alt=""
                    />
                    <div class="card-body">
                      <div className="row row-cols-1">
                      <div style={{height:"60px"}} className="d-flex justify-content-between">  
                      <div className="" > 
                      <h4 >{item.Dressname}</h4>
                      <p style={{color:'grey'}} className="text-start">{item.shopname}</p>
                      </div>
                      <img className=""
                      style={{width:"80px",height:"50px",objectFit:'cover'}}
                  src={Rating}
                      title=""
                      alt=""
                    />
                     </div>
                      </div>
                      <p className="fw-bold fs-6 text-sm-start my-3">
                        {item.review}
                      </p>
                      <div className="col">
                      <div  className=" d-flex justify-content-between">  
                      <div > 
                      <h4 > {item.price} </h4>
                      </div>
                      <button type="button" class=" btn-shop text-start"> Shop Now <FaForward style={{marginLeft:"10px"}}/></button>

                     </div>
                      </div>
                   
                    </div>
                  
                  </div>
                </div>
              </div>
              );
            })}
            
          <button className="load" onClick={()=> loadmore()}>
            View More
          </button>
          </div>

        </div>
      </div>

      <div className= {toggle ===2 ? "show-content" : "content"}> 
        <div className="container-xl">
        
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center my-3">
          {slice1.map((item, index) => {
              return (
                <div data-aos="zoom-in ">
                <div  className=" col pb-4 my-3" key={index}>
                  <div class="card-shop card ">
                    <img
                    style={{padding:"20px",borderRadius:"25px",height:"300px"}}
                      class="card-img-top product-img img-fluid"
                      src={item.Image}
                      title=""
                      alt=""
                    />
                    <div class="card-body">
                      <div className="row row-cols-1">
                      <div style={{height:"60px"}} className="d-flex justify-content-between">  
                      <div className="" > 
                      <h4 >{item.Dressname}</h4>
                      <p style={{color:'grey'}} className="text-start">{item.shopname}</p>
                      </div>
                      <img className=""
                      style={{width:"80px",height:"50px",objectFit:'cover'}}
                  src={Rating}
                      title=""
                      alt=""
                    />
                     </div>
                      </div>
                      <p className="fw-bold fs-6 text-sm-start my-3">
                        {item.review}
                      </p>
                      <div className="col">
                      <div  className=" d-flex justify-content-between">  
                      <div > 
                      <h4 > {item.price} </h4>
                      </div>
                      <button type="button" class=" btn-shop text-start"> Shop Now <FaForward style={{marginLeft:"10px"}}/></button>

                     </div>
                      </div>
                   
                    </div>
                  
                  </div>
                </div>
              </div>
              );
            })}
            
          <button className="load" onClick={()=> loadmore()}>
            View More
          </button>
          </div>

        </div>
      </div>

      <div className= {toggle ===3 ? "show-content" : "content"}> 
        <div className="container-xl">
        
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center my-3">
          {slice2.map((item, index) => {
              return (
                <div data-aos="zoom-in ">
                <div  className=" col pb-4 my-3" key={index}>
                  <div class="card-shop card ">
                    <img
                    style={{padding:"20px",borderRadius:"25px",height:"300px"}}
                      class="card-img-top product-img img-fluid"
                      src={item.Image}
                      title=""
                      alt=""
                    />
                    <div class="card-body">
                      <div className="row row-cols-1">
                      <div style={{height:"60px"}} className="d-flex justify-content-between">  
                      <div className="" > 
                      <h4 >{item.Dressname}</h4>
                      <p style={{color:'grey'}} className="text-start">{item.shopname}</p>
                      </div>
                      <img className=""
                      style={{width:"80px",height:"50px",objectFit:'cover'}}
                  src={Rating}
                      title=""
                      alt=""
                    />
                     </div>
                      </div>
                      <p className="fw-bold fs-6 text-sm-start my-3">
                        {item.review}
                      </p>
                      <div className="col">
                      <div  className=" d-flex justify-content-between">  
                      <div > 
                      <h4 > {item.price} </h4>
                      </div>
                      <button type="button" class=" btn-shop text-start"> Shop Now <FaForward style={{marginLeft:"10px"}}/></button>

                     </div>
                      </div>
                   
                    </div>
                  
                  </div>
                </div>
              </div>
              );
            })}
            
          <button className="load" onClick={()=> loadmore()}>
            View More
          </button>
          </div>

        </div>
      </div>
      <div className= {toggle ===4 ? "show-content" : "content"}> 
        <div className="container-xl">
        
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center my-3">
          {slice3.map((item, index) => {
              return (
                <div data-aos="zoom-in ">
                <div  className=" col pb-4 my-3" key={index}>
                  <div class="card-shop card ">
                    <img
                    style={{padding:"20px",borderRadius:"25px",height:"300px"}}
                      class="card-img-top product-img img-fluid"
                      src={item.Image}
                      title=""
                      alt=""
                    />
                    <div class="card-body">
                      <div className="row row-cols-1">
                      <div style={{height:"60px"}} className="d-flex justify-content-between">  
                      <div className="" > 
                      <h4 >{item.Dressname}</h4>
                      <p style={{color:'grey'}} className="text-start">{item.shopname}</p>
                      </div>
                      <img className=""
                      style={{width:"80px",height:"50px",objectFit:'cover'}}
                  src={Rating}
                      title=""
                      alt=""
                    />
                     </div>
                      </div>
                      <p className="fw-bold fs-6 text-sm-start my-3">
                        {item.review}
                      </p>
                      <div className="col">
                      <div  className=" d-flex justify-content-between">  
                      <div > 
                      <h4 > {item.price} </h4>
                      </div>
                      <button type="button" class=" btn-shop text-start"> Shop Now <FaForward style={{marginLeft:"10px"}}/></button>

                     </div>
                      </div>
                   
                    </div>
                  
                  </div>
                </div>
              </div>
              );
            })}
            
          <button className="load" onClick={()=> loadmore()}>
            View More
          </button>
          </div>

        </div>
      </div>
      <div className= {toggle ===5 ? "show-content" : "content" }> 
      <div className="container my-5">
        <h1> Offers soon...</h1>

      </div>
      </div>




      </div>
      
           
        </div>
        </>
    )
}
export default Shop