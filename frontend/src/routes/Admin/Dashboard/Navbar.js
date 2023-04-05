import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Navbar = () => {
  const logout = async () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    window.location.href = "/";
  };

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
              <Link to="/viewVendorData">
                <i className="fa fa-users"></i>
                &nbsp;Vendors
              </Link>
            </li>

            <li>
              <Link to="/adminProfile">
              <i class="fa fa-product-hunt"></i>
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
              <Link onClick={() => logout()}>
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
