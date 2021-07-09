import React from "react";
import data from "../data";
import { Container, Row, Col, Card } from "reactstrap";
import Product from "./Product";
import "./Products.css";

function Products() {
  return (
    <Container>
      <div className="text-center m-3 p-5">
        <Row>
          {data.map((pro) => (
            <Col sm={12} md={6} lg={6}>
              <Product
                key={pro.id}
                image={pro.image}
                id={pro.id}
                name={pro.name}
                price={pro.price}
                subtitle={pro.subtitle}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
export default Products;
