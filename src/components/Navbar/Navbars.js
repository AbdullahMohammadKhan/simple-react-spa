import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">এসো শিখি</Navbar.Brand>
      <Nav className="text-center"></Nav>
      <Form className="ml-auto" inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Navbars;
