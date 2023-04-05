import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./routes/Footer/Footer";
import Card from "./routes/Card/Card";
import ContactUs from "./routes/ContactUs/ContactUs";
import AboutUs from "./routes/AboutUs/AboutUs";
import Error from "./routes/ErrorPage/Error";
import ViewUserData from "./routes/Admin/UserData/ViewUserData";
import ChangeEmail from "./routes/Signin/ChangeEmail";
import ViewUserDetails from "./routes/Admin/UserData/ViewUserDetails";
import ViewVendorDetails from "./routes/Admin/UserData/ViewVendorDetails";
import VendorSignup from "./routes/Vendor/VendorSignup";
import UserSignup from "./routes/Signup/UserSignup";
import VendorSignin from "./routes/Vendor/VendorSignin";
import UserSignin from "./routes/Signin/UserSignin";
import Dashboard from "./routes/Admin/Dashboard/Dashboard.js";
import AdminProfile from "./routes/Admin/Dashboard/AdminProfile";
import ViewVendorData from "./routes/Admin/UserData/ViewVendorData";
import AdminSignin from "./routes/Admin/Signin/AdminSignin";
import VendorResetPassword from "./routes/Vendor/VendorResetPassword";
import VendorForgotPassword from "./routes/Vendor/VendorForgotPassword";
import AdminResetPassword from "./routes/Admin/Signin/AdminResetPassword";
import AdminForgotPassword from "./routes/Admin/Signin/AdminForgotPassword";
import UserResetPassword from "./routes/User/Signin/UserResetPassword";
import UserForgotPassword from "./routes/User/Signin/UserForgotPassword";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/card" element={<Card />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/footer" element={<Footer />} />

          {/* User */}
          <Route path="/userSignin" element={<UserSignin />} />
          <Route path="/userSignup" element={<UserSignup />} />
          <Route path="/userResetPassword" element={<UserResetPassword />} />
          <Route path="/userForgotPassword" element={<UserForgotPassword />} />

          {/* Vendors */}
          <Route path="/vendorSignin" element={<VendorSignin />} />
          <Route path="/vendorSignup" element={<VendorSignup />} />
          <Route
            path="/vendorResetPassword"
            element={<VendorResetPassword />}
          />
          <Route
            path="/vendorForgotPassword"
            element={<VendorForgotPassword />}
          />
          <Route path="/changeEmail" element={<ChangeEmail />} />

          {/* Admin */}
          <Route path="/adminSignin" element={<AdminSignin />} />
          <Route path="/adminResetPassword" element={<AdminResetPassword />} />
          <Route
            path="/adminForgotPassword"
            element={<AdminForgotPassword />}
          />
          <Route path="/viewUserData" element={<ViewUserData />} />
          <Route path="/viewVendorData" element={<ViewVendorData />} />
          <Route path="/viewUserDetails/:id" element={<ViewUserDetails />} />
          <Route
            path="/viewVendorDetails/:id"
            element={<ViewVendorDetails />}
          />
          <Route path="/adminDashboard" element={<Dashboard />} />
          <Route path="/adminProfile" element={<AdminProfile />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
