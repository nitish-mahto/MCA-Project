import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./routes/Footer/Footer";
import Card from "./routes/Card/Card";
import ResetPassword from "./routes/Signin/ResetPassword";
import ContactUs from "./routes/ContactUs/ContactUs";
import AboutUs from "./routes/AboutUs/AboutUs";
import Error from "./routes/ErrorPage/Error";
import ForgotPassword from "./routes/Signin/ForgotPassword";
import Users from "./routes/Admin/UserData/Users";
import ViewUserData from "./routes/Admin/UserData/ViewUserData";
import ChangeEmail from "./routes/Signin/ChangeEmail";
import ViewUserDetails from "./routes/Admin/UserData/ViewUserDatails";
import VendorSignup from "./routes/Vendor/VendorSignup";
import UserSignup from "./routes/Signup/UserSignup";
import VendorSignin from "./routes/Vendor/VendorSignin";
import UserSignin from "./routes/Signin/UserSignin";
import Dashboard from "./routes/Admin/Dashboard/Dashboard";

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
          <Route path="/userSignin" element={<UserSignin />} />
          <Route path="/userSignup" element={<UserSignup />} />
          <Route path="/vendorSignin" element={<VendorSignin />} />
          <Route path="/vendorSignup" element={<VendorSignup />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/viewUserData" element={<ViewUserData />} />
          <Route path="/viewUserDetails/:id" element={<ViewUserDetails />} />
          <Route path="/userData" element={<Users />} />
          <Route path="/changeEmail" element={<ChangeEmail />} />
          <Route path="*" element={<Error />} />


          <Route path="/adminDashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
