import React from "react";
import { Link } from "react-router-dom";
import "./Nv.css";

const Nv = () => {
  return (
    <>
      <div>
        <header>
          <nav className="navbar navbar-toggleable-md navbar-dark">
            <div className="container">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav1"
                aria-controls="navbarNav1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="#">
                <strong>Navbar</strong>
              </Link>
              <div className="collapse navbar-collapse" id="navbarNav1">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">Pricing</Link>
                  </li>
                  <li className="nav-item dropdown btn-group">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More info
                    </Link>
                    <div
                      className="dropdown-menu dropdown"
                      aria-labelledby="dropdownMenu1"
                    >
                      <Link className="dropdown-item">Contact</Link>
                      <Link className="dropdown-item">Billing address</Link>
                      <Link className="dropdown-item">Discounts</Link>
                    </div>
                  </li>
                </ul>
                <form className="form-inline waves-effect waves-light">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.2s">
                <div className="widget-wrapper">
                  <h4>Categories:</h4>
                  <br />
                  <div className="list-group">
                    <Link to="#" className="list-group-item active">
                      Woman
                    </Link>
                    <Link to="#" className="list-group-item">
                      Man
                    </Link>
                    <Link to="#" className="list-group-item">
                      Shoes
                    </Link>
                    <Link to="#" className="list-group-item">
                      T-shirt
                    </Link>
                    <Link to="#" className="list-group-item">
                      Jewellery
                    </Link>
                  </div>
                </div>

                <div
                  className="widget-wrapper wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <h4>Subscription form:</h4>
                  <br />
                  <div className="card">
                    <div className="card-block">
                      <p>
                        <strong>Subscribe to our newsletter</strong>
                      </p>
                      <p>
                        Once a week we will send you a summary of the most
                        useful news
                      </p>
                      <div className="md-form">
                        <i className="fa fa-user prefix"></i>
                        <input
                          type="text"
                          id="form1"
                          className="form-control"
                        />
                        <label for="form1">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fa fa-envelope prefix"></i>
                        <input
                          type="text"
                          id="form2"
                          className="form-control"
                        />
                        <label for="form2">Your email</label>
                      </div>
                      <button className="btn btn-default">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                  <div className="col-lg-12">
                    <div className="divider-new">
                      <h2 className="h2-responsive">What's new?</h2>
                    </div>

                    <div
                      id="carousel-example-1z"
                      className="carousel slide carousel-fade"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carousel-example-1z"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li
                          data-target="#carousel-example-1z"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carousel-example-1z"
                          data-slide-to="2"
                        ></li>
                      </ol>

                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img
                            src="http://mdbootstrap.com/img//Photos/Slides/img%20(107).jpg"
                            alt="First slide"
                          />
                          <div className="carousel-caption">
                            <h4>New collection</h4>
                            <br />
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="http://mdbootstrap.com/img//Photos/Slides/img%20(109).jpg"
                            alt="Second slide"
                          />
                          <div className="carousel-caption">
                            <h4>Get discount!</h4>
                            <br />
                          </div>
                        </div>

                        <div className="carousel-item">
                          <img
                            src="http://mdbootstrap.com/img//Photos/Slides/img%20(36).jpg"
                            alt="Third slide"
                          />
                          <div className="carousel-caption">
                            <h4>Only now for $10</h4>
                            <br />
                          </div>
                        </div>
                      </div>

                      <Link
                        className="carousel-control-prev"
                        to="#carousel-example-1z"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                      </Link>
                      <Link
                        className="carousel-control-next"
                        to="#carousel-example-1z"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <br />
                <hr className="extra-margins" />

                <div className="row">
                  <div className="col-lg-4">
                    <div className="card  wow fadeIn" data-wow-delay="0.2s">
                      <div className="view overlay hm-white-slight">
                        <img
                          src="http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(32).jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <Link to="#">
                          <div className="mask"></div>
                        </Link>
                      </div>

                      <div className="card-block">
                        <h4 className="card-title">Watches</h4>

                        <p className="card-text">
                          It's never too late or too early to get a watch!
                        </p>
                        <Link to="#" className="btn btn-default">
                          Buy now for <strong>$10</strong>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card  wow fadeIn" data-wow-delay="0.4s">
                      <div className="view overlay hm-white-slight">
                        <img
                          src="http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <Link to="#">
                          <div className="mask"></div>
                        </Link>
                      </div>

                      <div className="card-block">
                        <h4 className="card-title">Bags</h4>

                        <p className="card-text">
                          When you really need to carry extra stuff
                        </p>
                        <Link to="#" className="btn btn-default">
                          Buy now for <strong>$30</strong>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card  wow fadeIn" data-wow-delay="0.6s">
                      <div className="view overlay hm-white-slight">
                        <img
                          src="http://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(1).jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <Link to="#">
                          <div className="mask"></div>
                        </Link>
                      </div>

                      <div className="card-block">
                        <h4 className="card-title">Shoes</h4>

                        <p className="card-text">
                          You might carry it in some comfortable shoes.
                        </p>
                        <Link to="#" className="btn btn-default">
                          Buy now for <strong>20$</strong>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="page-footer center-on-small-only">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 offset-lg-1 hidden-lg-down">
                <h5 className="title">ABOUT MATERIAL DESIGN</h5>
                <p>
                  Material Design (codenamed Quantum Paper) is a design language
                  developed by Google.{" "}
                </p>

                <p>
                  Material Design for Bootstrap (MDB) is a powerful Material
                  Design UI KIT for most popular HTML, CSS, and JS framework -
                  Bootstrap.
                </p>
              </div>

              <hr className="hidden-md-up" />

              <div className="col-lg-2 col-md-4 offset-lg-1">
                <h5 className="title">About us</h5>
                <ul>
                  <li>
                    <Link to="#!">Address</Link>
                  </li>
                  <li>
                    <Link to="#!">Team</Link>
                  </li>
                  <li>
                    <Link to="#!">Phone number</Link>
                  </li>
                </ul>
              </div>

              <hr className="hidden-md-up" />

              <div className="col-lg-2 col-md-4">
                <h5 className="title">Metrics</h5>
                <ul>
                  <li>
                    <Link to="#!">Shoe sizes</Link>
                  </li>
                  <li>
                    <Link to="#!">T-shirt sizes</Link>
                  </li>
                  <li>
                    <Link to="#!">Sweatshirt sizes</Link>
                  </li>
                  <li>
                    <Link to="#!">Pants sizes</Link>
                  </li>
                </ul>
              </div>

              <hr className="hidden-md-up" />

              <div className="col-lg-2 col-md-4">
                <h5 className="title">Useful links</h5>
                <ul>
                  <li>
                    <Link to="#!">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#!">Delivery</Link>
                  </li>
                  <li>
                    <Link to="#!">Countries</Link>
                  </li>
                  <li>
                    <Link to="#!">Returns</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div className="call-to-action">
            <h4> Created with Material Design for Bootstrap</h4>
            <br />
            <h5>Get our UI KIT for free</h5>
            <ul>
              <li>
                <Link
                  target="_blank"
                  to="http://mdbootstrap.com/getting-started/"
                  className="btn btn-info"
                >
                  Download now!
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="http://mdbootstrap.com/material-design-for-bootstrap/"
                  className="btn btn-default"
                >
                  Learn more
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-copyright">
            <div className="container-fluid">
              © 2015 Copyright:{" "}
              <Link to="http://www.MDBootstrap.com"> MDBootstrap.com </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Nv;
