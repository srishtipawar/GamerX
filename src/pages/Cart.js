import React from "react";
import "./Cart.css";
import { useStateValue } from "../StateProvider";
import { Container, Row, Col, Card } from "reactstrap";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import Subtotal from "../components/Subtotal";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart grey lighten-5">
      <Container>
        {
          basket?.length==0
          ?<div>
             <h2>Your cart is empty</h2>
             <p>
               You have no items in your cart 
             </p>
           </div>
          :<Row>
            <Col lg={8}>
            {basket.map((item, ind) => (
              <CartProduct
                key={ind}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                subtitle={item.subtitle}
                hideButton="true"
              />
            ))}
            </Col>
            <Col lg={4}>
            {basket.length > 0 && (
              <div className='checkout__right'>
                <Subtotal />
              </div>
            )}
            </Col>
          </Row>
        }
      
      </Container>


    </div>
  );
}

export default Cart;
