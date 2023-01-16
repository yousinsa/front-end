import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <NavbarDiv>
      <Navbar bg="dark" variant="dark" style={{ height: "8vh" }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "1.5rem" }}>
            YouSinsa
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Upload</Nav.Link>
            <Nav.Link href="/mypage">Mypage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </NavbarDiv>
  );
};

const NavbarDiv = styled.header`
  width: 100vw;
`;

export default NavigationBar;
