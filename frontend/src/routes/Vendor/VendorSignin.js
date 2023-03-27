import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Signin.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const VendorSignin = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (value) => {
    console.log(value);
    const data = axios
      .post(`http://localhost:8000/vendor/login`, {
        // $or: [{ email: value.username }, { username: value.username }],
        username: value.username,
        password: value.password,
        type: "vendor",
      })
      .then((result) => {
        console.log(data);
        alert("Login successful");
        localStorage.setItem("token", result.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log("Error : " + value);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      {/* Navbar Start */}
      <div>
        <Navbar />
      </div>

      {/* Navbar End*/}

      {/* Signin Form Start */}
      <div>
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>Vendor Login</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      {...register("username")}
                      placeholder="Username"
                    />
                  </div>
                  {errors.username && (
                    <span class="error_field">{errors.username.message}</span>
                  )}

                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      {...register("password")}
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && (
                    <span class="error_field" style={{ marginTop: "-5" }}>
                      {errors.password.message}
                    </span>
                  )}

                  <span>
                    <Link
                      to="/forgotPassword"
                      style={{ textDecoration: "none" }}
                    >
                      Forgot Password?
                    </Link>
                  </span>

                  <input class="button mt-3" type="submit" value="Login" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <p class="credit">
          Don't have an Account? <Link to="/vendorSignup">Signup</Link>
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default VendorSignin;
