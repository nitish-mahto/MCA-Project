import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

const ViewUserData = () => {
  const [userData, SetuserData] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    // console.log("loadUser called");
    const result = await axios.get("http://localhost:8000/getData");
    SetuserData(result.data.data);
    console.log(result);
  };

  const deleteUser = async (id) => {
    await axios
      .delete("http://localhost:8000/delete-user-data/" + id)
      .then(() => {
        alert("User deleted successfully");
        loadUser();
      })
      .catch((err) => {
        console.log(err);
        alert("Could Not Deleted : ", err);
      });
  };

  const [search, setSearch] = useState("");

  const searchItems = userData.filter((User) => {
    if (search === "") {
      return User;
    } else if (User.first_name.toLowerCase().includes(search.toLowerCase())) {
      return User;
    } else if (User.last_name.toLowerCase().includes(search.toLowerCase())) {
      return User;
    } else if (User.email.toLowerCase().includes(search.toLowerCase())) {
      return User;
    } else if (User.username.toLowerCase().includes(search.toLowerCase())) {
      return User;
    } else if (User.type.toLowerCase().includes(search.toLowerCase())) {
      return User;
    }
  });

  // console.log("Searched Items: " + searchItems);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="content">
          <div className="container">
            <table className="table table-hover" border="0">
              <thead>
                <tr>
                  <th colSpan="2">
                    <h2>User's Details</h2>
                  </th>
                  <th colSpan="2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      style={{ width: " 140%", borderRadius: "8px" }}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                  </th>
                </tr>
                <tr>
                  <th scope="col">Sr. No</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Type</th>
                  <th scope="col">Event</th>
                </tr>
              </thead>

              {searchItems.map((User, index) => (
                <tbody>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{User.first_name}</td>
                    <td>{User.last_name}</td>
                    <td>{User.email}</td>
                    <td>{User.username}</td>
                    <td>{User.type}</td>
                    <td>
                      <button type="button" class="btn btn-success m-1">
                        <Link
                          to={`/ViewUserDetails/${User._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                      </button>
                      <button type="button" class="btn btn-danger m-1">
                        <Link
                          to=""
                          onClick={() => deleteUser(User._id)}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Delete
                        </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserData;
