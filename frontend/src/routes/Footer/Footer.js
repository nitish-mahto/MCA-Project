import React from "react";
import { Link } from "react-router-dom";
import {
  MDBFooter,
 } from "mdb-react-ui-kit";

import './Footer.css'

const Footer = () => {
  return (
    <>

      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container"   style={{marginLeft:"160px"}}>
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">ABOUT</h3>
                  <ul className="list-unstyled f_list" >
                    <li>
                      <Link to="/contact"  style={{textDecoration:"none"}}>ContactUs</Link>
                    </li>
                    <li>
                      <Link to="/about"   style={{textDecoration:"none"}}>AboutUs</Link>
                    </li>
                    <li>
                      <Link to="/#"   style={{textDecoration:"none"}}>Careers</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Corporate Information</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">HELP</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Payments</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Shipping</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>FAQ</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Report Infringement</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Cancellation & Returns</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">POLICY</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Return Policy</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Terms Of Use</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Security</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Privacy</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Sitemap</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>EPR Compliance</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">SOCIAL</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Facebook</Link>
                    </li>
                    
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>Twitter</Link>
                    </li>
                    <li>
                      <Link to="/#"  style={{textDecoration:"none"}}>YouTube</Link>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
      </footer>

      <br/><br/>
      
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Design By : &nbsp;
          <Link className="text-reset fw-bold" to="https://mdbootstrap.com/"  style={{textDecoration:"none"}}>
            Nitish Mahto
          </Link>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
