import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <section class="footer_get_touch_outer">
          <div class="container">
            <div class="footer_get_touch_inner grid-70-30">
              <div class="colmun-70 get_form">
                <div class="get_form_inner">
                  <div class="get_form_inner_text">
                    <h3>Get In Touch</h3>
                  </div>
                  <form action="/#">
                    <div class="grid-50-50">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                      />
                      <input type="email" name="email" placeholder="Email" />
                      <input type="tel" placeholder="Phone/Skype" />
                    </div>
                    <div class="grid-full">
                      <textarea
                        placeholder="message"
                        cols="30"
                        rows="10"
                      ></textarea>
                      <input type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="colmun-30 get_say_form">
                <h5>Say Hi!</h5>
                <ul class="get_say_info_sec">
                  <li>
                    <i class="fa fa-envelope"></i>
                    <Link to="/#">info@techreale.com</Link>
                  </li>
                  <li>
                    <i class="fa fa-whatsapp"></i>
                    <Link to="tel:">+91 9602381997</Link>
                  </li>
                  <li>
                    <i class="fa fa-skype"></i>
                    <Link to="/#">techReale</Link>
                  </li>
                </ul>
                <ul class="get_say_social-icn">
                  <li>
                    <Link to="/#">
                      <i class="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <i class="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <i class="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <i class="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
