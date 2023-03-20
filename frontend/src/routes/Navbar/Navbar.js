import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const [User, SetUser] = useState([]);
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  axios
    .get("http://localhost:8000/login-data", {
      headers: {
        Authorization: token,
      },
    })
    .then((result) => {
      SetUser(result.data.data);
    })
    .catch((err) => {
      console.log("Error: " + err);
    });

  const logout = async () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/#">
            {/* <img src="https://www.tutorialrepublic.com/lib/images/logo.svg" alt="..."/> */}
            <img
              src="https://techreale.com/wp-content/uploads/2022/04/cropped-IMG_5484-768x164.png"
              alt="..."
            />
          </Link>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="Search Here"></input>
          </form>
        </div>
        <div className="icons">
          {token ? (
            <>
              <Link to="/signin" className="fa fa-user-circle">
                &nbsp;&nbsp;
                {User.first_name}
              </Link>

              <Link to="/#" className="fa fa-shopping-cart">
                &nbsp;&nbsp;Cart
              </Link>

              <Link to="/#" className="fa fa-sign-out" onClick={() => logout()}>
                &nbsp;&nbsp;Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin" className="fa fa-user-circle">
                &nbsp;&nbsp;Login
              </Link>

              <Link to="/#" className="fa fa-shopping-cart">
                &nbsp;&nbsp;Cart
              </Link>
            </>
          )}
        </div>
      </div>
      <hr style={{ margin: "0", padding: "0" }} />
      <div className="links">
        <Link to="/#">Category</Link>
        <Link to="/#">Product</Link>
        <Link to="/#">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <hr style={{ margin: "0", padding: "0" }} />
      <hr style={{ margin: "0", padding: "0" }} />
      <hr style={{ margin: "0", padding: "0" }} />
    </>
  );
};

export default Navbar;
