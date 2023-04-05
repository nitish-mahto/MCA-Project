import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Signin.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Enter Valid email")
      .required("Email is required"),
  })
  .required();

const AdminForgotPassword = () => {
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
      .post(`http://localhost:8000/admin/forgot-password`, {
        ...data,
      })
      .then((data) => {
        alert("OTP Send Successfully");
        navigate("/adminResetPassword");
      })
      .catch((err) => {
        console.log(err);
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
              <h2>Verify Email</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      {...register("email")}
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && (
                    <span class="error_field">{errors.email.message}</span>
                  )}

                  <input class="button mt-3" type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>

          <p class="credit">
            <Link to="/adminSignin" style={{ textDecoration: "none" }}>
              Back
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminForgotPassword;
