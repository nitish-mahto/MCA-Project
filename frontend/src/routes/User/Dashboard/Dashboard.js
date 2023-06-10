import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";
import Navbar from "./Navbar";
const Dashboard = () => {
  const [userData, setUserData] = useState();
  const [VendorData, setVendorData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/totalUsers")
      .then((result) => {
        console.log("Result: ", JSON.stringify(result.data.total_users));
        setUserData(result.data.total_users);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });

    axios
      .get("http://localhost:8000/admin/totalVendors")
      .then((result) => {
        console.log("Result: ", JSON.stringify(result.data.total_users));
        setVendorData(result.data.total_vendors);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="content">
          <h1>Dashboard</h1>
          <br />
          <div className="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="card" style={{ backgroundColor: "lightblue" }}>
                  <div class="card-body">
                    <h3 class="card-title">
                      <i className="fa fa-users"></i>&nbsp;&nbsp;Customer
                    </h3>
                    <p class="card-text">
                      <h2>{userData}</h2>
                    </p>

                    <Link to="/viewUserData" class="btn btn-success">
                      View
                      {/* <i class="fa fa-eye" style={{ color: "#25406f" }}></i> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card" style={{ backgroundColor: "lightblue" }}>
                  <div class="card-body">
                    <h3 class="card-title">
                      <i className="fa fa-users"></i>&nbsp;&nbsp;Vendors
                    </h3>
                    <p class="card-text">
                      <h2>{VendorData}</h2>
                    </p>
                    <Link
                      to="/viewVendorData"
                      class="btn btn-danger"
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card" style={{ backgroundColor: "lightblue" }}>
                  <div class="card-body">
                    <h3 class="card-title">
                      <i class="fa fa-product-hunt"></i>&nbsp;&nbsp;Products
                    </h3>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" class="btn btn-primary"></Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card" style={{ backgroundColor: "lightblue" }}>
                  <div class="card-body">
                    <h3 class="card-title">
                      <i className="fa fa-shopping-bag"></i>&nbsp;&nbsp;Orders
                    </h3>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" class="btn btn-primary"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
