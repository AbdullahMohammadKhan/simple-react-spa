import React, { useState, useEffect } from "react";
import Navbars from "./components/Navbar/Navbars";
import fakeCourse from "./data/FakeData";
import Header from "./components/Heading/Heading";
import Body from "./components/Body/Body";
import { Container } from "react-bootstrap";

function App() {
  let [data, setData] = useState([]);
  let [enrolled, setEnrolled] = useState([]);
  let [price, setPrice] = useState(0);

  useEffect(() => {
    fakeCourse().then((fakeCourse) => {
      setData(fakeCourse);
    });
  }, []);

  let handleAddCourse = (price, name) => {
    setPrice((prev) => prev + price);
    let newEnrolled = [...enrolled, name];
    setEnrolled(newEnrolled);
  };

  return (
    <Container>
      <Navbars />
      <Header />
      <Body
        data={data}
        handleAddCourse={handleAddCourse}
        price={price}
        enrolled={enrolled}
      />
    </Container>
  );
}

export default App;
