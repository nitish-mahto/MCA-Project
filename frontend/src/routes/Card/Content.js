const productData = [
  {
    id: 1,
    name: "Product1",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg",
    price: 2000,
    rating: 5,
    timeLeft: 27,
    totalSales: 7479,
  },

  {
    id: 2,
    name: "Product2",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578940/2018/10/23/fe701151-69e6-4e20-9e2a-ace63081a8e11540282217137-Harpa-Women-Dresses-191540282216937-5.jpg",
    price: 2000,
    rating: 5,
    timeLeft: 27,
    totalSales: 7479,
  },

  {
    id: 3,
    name: "Product3",
    image:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6625378/2018/6/5/fcec8d8e-4253-4fa4-ae6e-c6805b3b8fd31528183265021-na-2331528183264786-1.jpg",
    price: 2000,
    rating: 5,
    timeLeft: 27,
    totalSales: 7479,
  },
];

export default productData;

// <div>
//   <div className="container">
//     <div className="row">
//       <div className="col-md-3">
//         <div className="dress-card">
//           <div className="dress-card-head">
//             <img
//               className="dress-card-img-top"
//               src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg"
//               alt=""
//             />
//             <div className="surprise-bubble">
//               <span className="dress-card-heart">
//                 <i className="fas fa-heart"></i>
//               </span>
//               <Link to="/#">
//                 {" "}
//                 <span>More</span>
//               </Link>
//             </div>
//           </div>
//           <div className="dress-card-body">
//             <h4 className="dress-card-title">Harpa</h4>
//             <p className="dress-card-para">Womans printed clothing</p>
//             <p className="dress-card-para">
//               <span className="dress-card-price">Rs.839 &ensp;</span>
//               <span className="dress-card-crossed">Rs.2099</span>
//               <span className="dress-card-off">&ensp;(60% OFF)</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="dress-card">
//           <div className="dress-card-head">
//             <img
//               className="dress-card-img-top"
//               src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6625378/2018/6/5/fcec8d8e-4253-4fa4-ae6e-c6805b3b8fd31528183265021-na-2331528183264786-1.jpg"
//               alt=""
//             />
//             <div className="surprise-bubble">
//               <span className="dress-card-heart">
//                 <i className="fas fa-heart"></i>
//               </span>
//               <Link to="/#">
//                 {" "}
//                 <span>More</span>
//               </Link>
//             </div>
//           </div>
//           <div className="dress-card-body">
//             <h4 className="dress-card-title">Harpa</h4>
//             <p className="dress-card-para">Womans printed clothing</p>
//             <p className="dress-card-para">
//               <span className="dress-card-price">Rs.839 &ensp;</span>
//               <span className="dress-card-crossed">Rs.2099</span>
//               <span className="dress-card-off">&ensp;(60% OFF)</span>
//             </p>
//             {/* <div className="row">
//                     <div className="col-md-6 card-button">
//                       <Link href="">
//                         <div className="card-button-inner bag-button">
//                           Add to Bag
//                         </div>
//                       </Link>
//                     </div>
//                     <div className="col-md-6 card-button">
//                       <Link href="">
//                         <div className="card-button-inner wish-button">
//                           Whishlist
//                         </div>
//                       </Link>
//                     </div>
//                   </div> */}
//           </div>
//         </div>
//       </div>

//       <div className="col-md-3">
//         <div className="dress-card">
//           <div className="dress-card-head">
//             <img
//               className="dress-card-img-top"
//               src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg"
//               alt=""
//             />
//             <div className="surprise-bubble">
//               <span className="dress-card-heart">
//                 <i className="fas fa-heart"></i>
//               </span>
//               <Link to="/#">
//                 {" "}
//                 <span>More</span>
//               </Link>
//             </div>
//           </div>
//           <div className="dress-card-body">
//             <h4 className="dress-card-title">Harpa</h4>
//             <p className="dress-card-para">Womans printed clothing</p>
//             <p className="dress-card-para">
//               <span className="dress-card-price">Rs.839 &ensp;</span>
//               <span className="dress-card-crossed">Rs.2099</span>
//               <span className="dress-card-off">&ensp;(60% OFF)</span>
//             </p>
//             <div className="row">
//               <div className="col-md-6 card-button">
//                 <Link href="">
//                   <div className="card-button-inner bag-button">Add to Bag</div>
//                 </Link>
//               </div>
//               <div className="col-md-6 card-button">
//                 <Link href="">
//                   <div className="card-button-inner wish-button">Whishlist</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-3">
//         <div className="dress-card">
//           <div className="dress-card-head">
//             <img
//               className="dress-card-img-top"
//               src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578940/2018/10/23/fe701151-69e6-4e20-9e2a-ace63081a8e11540282217137-Harpa-Women-Dresses-191540282216937-5.jpg"
//               alt=""
//             />
//             <div className="surprise-bubble">
//               <span className="dress-card-heart">
//                 <i className="fas fa-heart"></i>
//               </span>
//               <Link to="/#">
//                 {" "}
//                 <span>More</span>
//               </Link>
//             </div>
//           </div>
//           <div className="dress-card-body">
//             <h4 className="dress-card-title">Harpa</h4>
//             <p className="dress-card-para">Womans printed clothing</p>
//             <p className="dress-card-para">
//               <span className="dress-card-price">Rs.839 &ensp;</span>
//               <span className="dress-card-crossed">Rs.2099</span>
//               <span className="dress-card-off">&ensp;(60% OFF)</span>
//             </p>
//             <div className="row">
//               <div className="col-md-6 card-button">
//                 <Link href="">
//                   <div className="card-button-inner bag-button">Add to Bag</div>
//                 </Link>
//               </div>
//               <div className="col-md-6 card-button">
//                 <Link href="">
//                   <div className="card-button-inner wish-button">Whishlist</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
