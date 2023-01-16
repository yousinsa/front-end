import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const NavigationBar = () => {
  return (
    <NavbarDiv>
      <Navbar bg="dark" variant="dark" style={{ height: "10vh" }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "1.5rem" }}>
            You💖Sinsa
          </Navbar.Brand>
          <NavbarItemContainer>
            <Nav className="me-auto">
              <Nav.Link href="/community">Community</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/login">Upload</Nav.Link>
              <Nav.Link href="/mypage">Mypage</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </NavbarItemContainer>
        </Container>
      </Navbar>
    </NavbarDiv>
  );
};

const NavbarDiv = styled.header`
  width: 100vw;
`;
const NavbarItemContainer = styled.div`
  font-size: 1.2rem;
`;

export default NavigationBar;
