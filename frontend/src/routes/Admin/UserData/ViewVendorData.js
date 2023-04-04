import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

const ViewVendorData = () => {
  const [vendorData, SetVendorData] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    // console.log("loadUser called");
    const result = await axios.get(
      "http://localhost:8000/admin/viewVendorData"
    );
    SetVendorData(result.data.data);
    console.log(result);
  };

  const deleteUser = async (id) => {
    await axios
      .delete("http://localhost:8000/admin/deleteData/" + id)
      .then(() => {
        alert("Vendor deleted successfully");
        loadUser();
      })
      .catch((err) => {
        console.log(err);
        alert("Could Not Deleted : ", err);
      });
  };

  const [search, setSearch] = useState("");

  const searchItems = vendorData.filter((Vendor) => {
    if (search === "") {
      return Vendor;
    } else if (Vendor.first_name.toLowerCase().includes(search.toLowerCase())) {
      return Vendor;
    } else if (Vendor.last_name.toLowerCase().includes(search.toLowerCase())) {
      return Vendor;
    } else if (Vendor.email.toLowerCase().includes(search.toLowerCase())) {
      return Vendor;
    } else if (Vendor.username.toLowerCase().includes(search.toLowerCase())) {
      return Vendor;
    } else if (Vendor.type.toLowerCase().includes(search.toLowerCase())) {
      return Vendor;
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
                    <h2>Vendor's Details</h2>
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

              {searchItems.map((Vendor, index) => (
                <tbody>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Vendor.first_name}</td>
                    <td>{Vendor.last_name}</td>
                    <td>{Vendor.email}</td>
                    <td>{Vendor.username}</td>
                    <td>{Vendor.type}</td>
                    <td>
                      <button type="button" class="btn btn-success m-1">
                        <Link
                          to={`/ViewVendorDetails/${Vendor._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                      </button>
                      <button type="button" class="btn btn-danger m-1">
                        <Link
                          to=""
                          onClick={() => deleteUser(Vendor._id)}
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

export default ViewVendorData;
