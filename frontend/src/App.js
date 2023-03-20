import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Footer from "./routes/Footer/Footer";
import Card from "./routes/Card/Card";
import Signup from "./routes/Signup/Signup";
import Signin from "./routes/Signin/Signin";
import ResetPassword from './routes/Signin/ResetPassword'
import ContactUs from "./routes/ContactUs/ContactUs";
import AboutUs from "./routes/AboutUs/AboutUs";
import Error from "./routes/ErrorPage/Error";
import ForgotPassword from "./routes/Signin/ForgotPassword";
import Users from "./routes/UserData/Users";
import ViewUserData from "./routes/UserData/ViewUserData";
import ChangeEmail from "./routes/Signin/ChangeEmail";
import ViewUserDetails from "./routes/UserData/ViewUserDatails";



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
          <Route path="/signin" element={<Signin />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/viewUserData" element={<ViewUserData />} />
          <Route path="/viewUserDetails/:id" element={<ViewUserDetails />} />
          <Route path="/userData" element={<Users />} />
          <Route path="/changeEmail" element={<ChangeEmail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
