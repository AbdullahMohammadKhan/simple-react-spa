import React from "react";
import EnrolledList from "../EnrolledList/EnrolledList.js";
import Price from "../Price/Price.js";
import { Card } from "react-bootstrap";

const Cart = ({ enrolled, price }) => {
  return (
    <Card border="light" style={{ width: "18rem", position: "fixed" }}>
      <Card.Header>Cart</Card.Header>
      <div style={{ display: enrolled.length ? "block" : "none" }}>
        <Card.Body>
          <EnrolledList enrolled={enrolled} />
          <Price price={price} />
        </Card.Body>
      </div>
    </Card>
  );
};

export default Cart;
