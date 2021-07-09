import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Product.css";

function Product({ image, price, desc, name, id, subtitle }) {
  return (
    // <div className='product'>
    //   <Link
    //     to={"/product/" + id}
    //     style={{ textDecoration: "none", color: "inherit" }}
    //   >
    //     <Card
    //       className='m-2 card'
    //       style={{ borderRadius: "10px", background: "#13181f", color: "#fff" }}
    //     >
    //       <CardImg
    //         top
    //         width='100%'
    //         height='250px'
    //         src={image}
    //         alt='Card image cap'
    //         style={{ padding: "20px" }}
    //       />
    //       <CardBody>
    //         <CardText style={{ fontWeight: "700", fontSize: "25px" }}>
    //           $ {price}
    //         </CardText>
    //         <CardTitle>{name}</CardTitle>
    //       </CardBody>
    //     </Card>
    //   </Link>
    // </div>
    <div className="product m-3 white " 
    style={{borderRadius:"20px"}}>
      <Link
        to={"/product/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {/* IMAGE */}
        <img className="product__image"src={image} />

        {/* NAME */}
        <div className="ml-3" style={{textAlign:"left",fontWeight:"700",fontSize:"20px"}}>{name}</div>

        {/* subtitle */}
        <div className="ml-3" style={{fontSize:"13px",textAlign:"left"}}>{subtitle}</div>

        {/* RATING */}
        <div className="ml-3 " style={{textAlign:"left"}}><i class="material-icons" style={{color:"#ffd600",height:"15px"}}>star</i></div>

        {/* PRICE */}
    <div className="ml-5 pb-3" style={{fontSize:"20px",textAlign:"left"}}>₹ {price}</div>
    </Link>

    </div>
  );
}

export default Product;
