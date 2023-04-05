import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./Signup.css";

const schema = yup
  .object({
    first_name: yup
      .string()
      .required("First Name is required")
      .matches(/^[a-zA-Z]*$/, "Characters only allowed in first name")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters"),
    last_name: yup
      .string()
      .required("Last Name is required")
      .matches(/^[a-zA-Z]*$/, "Characters only allowed in last name")
      .min(3, "Last Name must be at least 3 characters")
      .max(15, "Last Name must be at most 15 characters"),
    email: yup
      .string()
      .email("Enter Valid email")
      .required("Email is required"),
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be between 3 and 12 characters")
      .max(12, "Username must be between 3 and 12 characters"),

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

const UserSignup = () => {
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
      .post(`http://localhost:8000/user/register`, {
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
        email: data.email,
        username: data.username,
        type: "user",
      })
      .then((value) => {
        alert("User Register successful");
        navigate("/userSignin");
      })
      .catch((err) => {
        console.log("Error : " + err.message);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <div class="form_wrapper">
          <div class="form_container">
            <div class="title_container">
              <h2>User Signup Form</h2>
            </div>
            <div class="row clearfix">
              <div class="">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="row clearfix">
                    <div class="col_half">
                      <div class="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" class="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="First Name"
                          {...register("first_name", {
                            required: true,
                          })}
                        />
                      </div>
                      {errors.first_name && (
                        <span class="error_field">
                          {errors.first_name.message}
                        </span>
                      )}
                    </div>

                    <div class="col_half">
                      <div class="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" class="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...register("last_name")}
                        />
                      </div>
                      {errors.last_name && (
                        <span class="error_field">
                          {errors.last_name.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                      })}
                    />
                  </div>
                  {errors.email && (
                    <span class="error_field" style={{ marginTop: "-5" }}>
                      {errors.email.message}
                    </span>
                  )}

                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Username"
                      {...register("username")}
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
                      placeholder="Password"
                      {...register("password")}
                    />
                  </div>

                  {errors.password && (
                    <span class="error_field" style={{ marginTop: "-5" }}>
                      {errors.password.message}
                    </span>
                  )}

                  <div class="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" class="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Re-type Password"
                      {...register("confirm_password")}
                    />
                  </div>
                  {errors.confirm_password && (
                    <span class="error_field" style={{ marginTop: "-5" }}>
                      {errors.confirm_password.message}
                    </span>
                  )}

                  <input class="button" type="submit" value="Register" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <p class="credit">
          Already have an Account? <Link to="/userSignin">Login</Link>
        </p>
      </div>

      {/* Footer  */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UserSignup;
