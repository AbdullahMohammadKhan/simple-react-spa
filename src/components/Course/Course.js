import React from "react";
import { Card, Button } from "react-bootstrap";

const Course = ({ name, img, description, handleAddCourse, price }) => {
  return (
    <div className="mb-5">
      <Card className="bg-dark text-white mb-2">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          <br></br>
          <Card.Title>
            <h1>{name}</h1>
          </Card.Title>
          <br></br>
          <Card.Text>{description}</Card.Text>
          <h4 className="text-warning">Price : {price} $</h4>
        </Card.ImgOverlay>
      </Card>

      <Button onClick={() => handleAddCourse(price, name)} variant="warning">
        Enroll Now !!
      </Button>
    </div>
  );
};

export default Course;
