import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
// import axios from "axios";

const UserDashboard = () => {
  //   const [userData, setUserData] = useState();
  //   const [VendorData, setVendorData] = useState();
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/admin/totalUsers")
  //       .then((result) => {
  //         console.log("Result: ", JSON.stringify(result.data.total_users));
  //         setUserData(result.data.total_users);
  //       })
  //       .catch((err) => {
  //         console.log("Error: " + err);
  //       });
  //     axios
  //       .get("http://localhost:8000/admin/totalVendors")
  //       .then((result) => {
  //         console.log("Result: ", JSON.stringify(result.data.total_users));
  //         setVendorData(result.data.total_vendors);
  //       })
  //       .catch((err) => {
  //         console.log("Error: " + err);
  //       });
  //   }, []);

  return (
    <>
      <div>
        <Navbar />
        <br />
        <br />
        <div className="container">
          <h1>Your Account</h1>
          <br />
          <div className="container">
            <div class="row m-2">
            
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i className="fa fa-shopping-bag"></i>&nbsp;&nbsp;Yours
                      Orders
                    </h4>
                    <p class="card-text">Track, return or buy things again</p>
                    <Link to="/viewUserData" class="btn btn-success">
                      View
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i className="fa fa-lock"></i>&nbsp;&nbsp;Login & Security
                    </h4>
                    <p>Edit Login, name & Mobile Number</p>
                    <Link
                      to="/viewVendorData"
                      class="btn btn-danger"
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i class="fa fa-rectangle"></i>&nbsp;&nbsp;Prime
                    </h4>
                    <p>View Benefits & Payment Settings</p>
                    <Link
                      to="/viewVendorData"
                      class="btn btn-danger"
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i class="fa fa-location"></i>&nbsp;&nbsp;Your Address
                    </h4>
                    <p>Edit Addresses for orders and gifts</p>
                    <Link
                      to="/changeAddresses"
                      class="btn btn-danger"
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="row m-2">
              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i className="fa fa-credit-card"></i>&nbsp;&nbsp;Payment
                      Options
                    </h4>
                    <p class="card-text">Edit or add payment methods</p>
                    <Link to="/viewUserData" class="btn btn-success">
                      View
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i class="fa fa-location"></i>&nbsp;&nbsp;Pay Balance
                    </h4>
                    <p>Add money to your balance</p>
                    <Link
                      to="/viewVendorData"
                      class="btn btn-danger"
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">
                      <i class="fa fa-headphones"></i>&nbsp;&nbsp;Contact Us
                    </h4>
                    <p>Get in Touch</p>
                    <Link
                      to="/contact"
                      class="btn btn-danger"
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
