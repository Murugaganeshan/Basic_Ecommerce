import React from "react";
import "../Assets/Css/Footer.css"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Visa from "../Assets/Images/visa.png"
import Amc from "../Assets/Images/american-express.png"
import Disc from "../Assets/Images/discover.png"
function Footer(){
    return(
        <section>
          <div className="container">
            <div className="row row-cols-lg-5 row-cols-md-3 row-sm-2 row-cols-1 d-flex justify-content-around">
                <div className="foot col ">
                    <h4> Logo Here</h4>
                    <p className="my-3 text-start mx-3">
                        4562 Park Lane Streetview <br/>
                        SydneyAustralia 75601

                    </p>
                    <p className="text-start mx-3">+61-234-345-674 <br/> Shop@gmail.com </p>
                    
                  <div style={{width:"210px"}} className="d-flex mx-2 my-1 justify-content-around">
                    <div className="social-links"> 
                    <FaFacebook style={{fontSize:"20px", margin:"0 auto"}}/>
                    </div>
                    <div className="social-links"> 
                    <FaInstagram style={{fontSize:"20px", margin:"0 auto"}}/>
                    </div>
                    <div className="social-links"> 
                    <FaLinkedin style={{fontSize:"20px", margin:"0 auto"}}/>
                    </div>
                    <div className="social-links"> 
                    <FaYoutube style={{fontSize:"20px", margin:"0 auto"}}/>
                    </div>
                    <div className="social-links"> 
                    <FaTwitter style={{fontSize:"20px", margin:"0 auto"}}/>
                    </div>

                  </div>
                </div>
                <div className="foot col ">
                    <h4> SUPPORTS</h4>
                    <ul className="my-3">
                        <li> Contact Us </li>
                        <li className="my-1"> About Page </li>
                        <li className="my-1"> Size Guide </li>
                        <li className="my-1"> Shipping & Returns </li>
                        <li className="my-1"> FAQ's Page </li>
                        <li className="my-1"> Privacy</li>
                    </ul>
                </div>
                <div className="foot col ">
                    <h4 style={{marginRight:"15px"}}> Shop</h4>
                    <ul className="my-3">
                    <li> Men's Shopping </li>
                    
                        <li className="my-1"> Women's Shopping </li>
                        <li className="my-1"> Kis's Shopping </li>
                        <li className="my-1"> Furniture</li>
                        <li className="my-1"> Discounts </li>
                        
                    </ul>
                </div>
              
                <div className="foot col ">
                    <h4 style={{marginRight:"15px"}}> COMPANY</h4>
                    <ul className="my-3">
                    <li> About </li>
                    
                        <li className="my-1"> Blog </li>
                        <li className="my-1"> Affliate</li>
                        <li className="my-1"> Login</li>
                        
                    </ul>
                </div>
                <div className="foot col ">
                    <h4 style={{marginRight:"15px"}}> SUBSCRIBE</h4>
                  <p style={{fontSize:"10px",  textAlign:'start'}}>Receive updates, hot deals, discounts sent <br/>
                  straight in your inbox daily.</p>

                  <form>
    <input style={{padding:"10px", backgroundColor:'silver',border:"none" }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </form>
  <p className="text-start my-2"> Secure Payments</p>

  <div className="d-flex justify-content-around">
    <img style={{height:"40px"}} src={Visa} alt=""/>
    <img style={{height:"40px"}}  src={Amc} alt=""/>
    <img style={{height:"40px"}} src={Disc} alt=""/>
  </div>
                </div>
              

            </div>

          </div>

        </section>
    )
}
export default Footer