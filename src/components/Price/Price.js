import React from "react";
import { Card } from "react-bootstrap";

const Price = ({ price }) => {
  return (
    <>
      <Card.Title className="text-primary">Enrollment Fee:</Card.Title>
      <Card.Text>{price} $</Card.Text>
    </>
  );
};

export default Price;
