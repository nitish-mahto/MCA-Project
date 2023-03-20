import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function ProductCard(props) {
  return (
    <div className="dress-card" onClick={(e) => props.onClick(e, props.i)}>
      <div className="dress-card-head">
        <img className="dress-card-img-top" src={props.imagesrc} alt="" />
        <div className="surprise-bubble">
          <span className="dress-card-heart">
            <i className="fas fa-heart"></i>
          </span>
          <Link to="/#">
            {" "}
            <span>More</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

const Card = () => {
  const handleClick = (event, index) => {
    event.preventDefault();
    console.log("index: " + index);
  };

  return (
    <>
     
      <div className="container">
        <div className="row">
          {[
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg",
          ].map((img, i) => (
            <div className="col-md-3">
              <ProductCard imagesrc={img} i={i} onClick={handleClick} />
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default Card;
