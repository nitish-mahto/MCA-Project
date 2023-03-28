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
    email: yup
      .string()
      .email("Enter Valid email")
      .required("Email is required"),
  })
  .required();

const ChangeEmail = () => {
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
      .put(
        "http://localhost:8000/change-email",
        { ...data },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((result) => {
        alert(result.err.response.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error: " + err);
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
              <h2>Change Email</h2>
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
                      {...register("email")}
                      placeholder="Enter Email Id"
                    />
                  </div>
                  {errors.email && (
                    <span class="error_field">{errors.email.message}</span>
                  )}

                  <input class="button mt-2" type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <p class="credit">
          <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
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

export default ChangeEmail;
