import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/71Dct0EW90L._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>

          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/61Jh3QGHPQL._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>

          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/61qkdjjIA3L._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>

          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/71D1GIa1oPL._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/71q2AtNKADL._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/61gPOiG6YiL._SX3000_.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(80%) " }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
