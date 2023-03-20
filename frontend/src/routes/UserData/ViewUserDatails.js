import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewUserDetails = () => {
  const params = useParams();

  const [User, SetUser] = useState([]);

  useEffect(() => {
    loadUser(params.id);
  }, [params.id]);

  const loadUser = async (id) => {
    const result = await axios.get(
      `http://localhost:8000/view-user-details/${id}`
    );
    SetUser(result.data.data);
    console.log(result);
  };

  return (
    <>
      <div className="container">
        <table className="table table-hover" border="1">
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Event</th>
            </tr>
          </thead>
          {User.map((User, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{User.first_name}</td>
                <td>{User.last_name}</td>
                <td>{User.email}</td>
                <td>{User.username}</td>
                <td>
                  <button type="button" class="btn btn-success">
                    <Link
                      to={`/viewUserData`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <i class="fa fa-arrow-left" aria-hidden="true"></i>
                      &nbsp;&nbsp;BACK
                    </Link>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default ViewUserDetails;
