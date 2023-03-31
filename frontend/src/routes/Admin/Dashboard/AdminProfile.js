import React from "react";
import "./Dashboard.css";
import "./AdminProfile.css";
import Navbar from "./Navbar";

const AdminProfile = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="content">
          <h1>This is Admin Panel</h1>
          <div class="dashboard">
            <div class="card">
              <div class="card-header">
                <h3>Product 1</h3>
                <span class="product-id">#1234</span>
              </div>
              <div class="card-body">
                <img src="product1.jpg" alt="..." />
                <div class="product-info">
                  <p>
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                  <p>Price: $99.99</p>
                  <p>Stock: 10</p>
                </div>
              </div>
              <div class="card-footer">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3>Product 2</h3>
                <span class="product-id">#5678</span>
              </div>
              <div class="card-body">
                <img src="product2.jpg" alt="..." />
                <div class="product-info">
                  <p>
                    Description: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                  <p>Price: $49.99</p>
                  <p>Stock: 5</p>
                </div>
              </div>
              <div class="card-footer">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
