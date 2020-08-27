import React from "react";
import { Card } from "react-bootstrap";

const EnrolledList = ({ enrolled }) => {
  return (
    <>
      <Card.Title className="text-primary">Enrolled Courses : </Card.Title>
      <ul>
        {enrolled.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </>
  );
};

export default EnrolledList;
