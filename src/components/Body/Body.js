import React from "react";
import { Row, Col } from "react-bootstrap";
import Course from "../Course/Course";
import Cart from "../Cart/Cart.js";

const Body = ({ data, handleAddCourse, price, enrolled }) => {
  return (
    <>
      <Row>
        <Col sm={9}>
          {data.map((data) => (
            <Course
              key={data.name}
              name={data.name}
              img={data.img}
              description={data.description}
              handleAddCourse={handleAddCourse}
              price={data.price}
            />
          ))}
        </Col>
        <Col sm={3}>
          <Cart enrolled={enrolled} price={price} />
        </Col>
      </Row>
    </>
  );
};

export default Body;
