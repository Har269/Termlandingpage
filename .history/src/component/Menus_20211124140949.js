import React, { Component } from 'react';
import {Button,Navbar,Nav,NavDropdown,Offcanvas,Container,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class navs extends Component {
    render() {
        return (
            <>
               <Navbar bg="info"  expand="lg" className="mt-3">
  <Container fluid>
    <Navbar.Brand href="#">Insurejoy</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 bg-white text-black"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="https://www.insurejoy.com/">Home</Nav.Link>
        <Nav.Link href="https://www.insurejoy.com/about">AbouUs</Nav.Link>
        <NavDropdown title="Insurances" id="navbarScrollingDropdown">
          <NavDropdown.Item href="https://www.insurejoy.com/#?ProductTerm">Term</NavDropdown.Item>
          <NavDropdown.Item href="https://www.insurejoy.com/#?ProductHealth">Health</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"  class>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </>
        );
    }
}

export default navs;