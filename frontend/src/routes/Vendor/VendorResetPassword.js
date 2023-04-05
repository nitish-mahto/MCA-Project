import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./Signin.css";

const schema = yup
  .object({
    token: yup.string().required("OTP is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "password must be between 6 and 12 characters")
      .max(12, "password must be between 6 and 12 characters"),

    confirm_password: yup
      .string()
      .required("Confirm Password is required")
      .min(6, "Confirm password must be between 6 and 12 characters")
      .max(12, "Confirm password must be between 6 and 12 characters")
      .oneOf([yup.ref("password")], "Password don't match"),
  })
  .required();

const VendorResetPassword = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:8000/vendor/reset-password`, {
        ...data,
      })
      .then((data) => {
        alert("Password Changed Successfully");
        navigate("/vendorSignin");
      })
      .catch((err) => {
        alert("Please Enter Valid OTP");
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
              <h2>Change Password</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-lock"></i>
                    </span>
                    <input
                      type="text"
                      {...register("token")}
                      placeholder="Enter OTP"
                    />
                  </div>
                  {errors.token && (
                    <span class="error_field">{errors.token.message}</span>
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
                    <span class="error_field">{errors.password.message}</span>
                  )}

                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      {...register("confirm_password")}
                      placeholder="Re-type Password"
                    />
                  </div>
                  {errors.confirm_password && (
                    <span class="error_field">
                      {errors.confirm_password.message}
                    </span>
                  )}

                  <input class="button mt-2" type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <p class="credit">
          <Link to="/VendorForgotPassword" style={{ textDecoration: "none" }}>
            Back
          </Link>
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default VendorResetPassword;
