import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Navbar = () => {
  return (
    <>
      <div>
        <div class="sidebar">
          <div style={{ color: "gray", fontSize: "22px", marginLeft: "20px" }}>
            <i className="fa fa-user"></i>
            &nbsp;Admin
          </div>
          <hr />
          <ul>
            <li>
              <Link to="/adminDashboard">
                <i className="fa fa-dashboard"></i>
                &nbsp;Dashboard
              </Link>
            </li>

            <li>
              <Link to="/viewUserData">
                <i className="fa fa-users"></i>
                &nbsp;Customers
              </Link>
            </li>

            <li>
              <Link to="/adminProfile">
                <i className="fa fa-dashboard"></i>
                &nbsp;Products
              </Link>
            </li>

            <li>
              <Link to="/adminProfile">
                <i className="fa fa-shopping-bag"></i>
                &nbsp;Orders
              </Link>
            </li>

            <li>
              <Link to="/adminProfile">
                <i className="fa fa-user"></i>
                &nbsp;Profile
              </Link>
            </li>

            <li>
              <Link to="#logout">
                <i className="fa fa-sign-out"></i>
                &nbsp;Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
