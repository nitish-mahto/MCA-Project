import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import Navbar from "./Navbar";
const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <div class="content">
          <h1>Welcome to the Admin Dashboard</h1>
          <p>This is where you can manage your website or application.</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
