import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DiYeoman } from "react-icons/di";

const NavigationBar = () => {
  return (
    <NavbarDiv>
      <Navbar bg="dark" variant="dark" style={{ height: "10vh" }}>
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontSize: "1.8rem",

              width: "13%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DiYeoman size="30" />
            YouSinsa
          </Navbar.Brand>
          <NavbarItemContainer>
            <Nav className="me-auto">
              <NavDropdown title="Goods" id="basic-nav-dropdown">
                <NavDropdown.Item href="/goods">man</NavDropdown.Item>
                <NavDropdown.Item href="/goods">woman</NavDropdown.Item>
                <NavDropdown.Item href="/goods">Accessories</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/goods">Etc</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/community">Community</Nav.Link>

              <Nav.Link href="/upload">Upload</Nav.Link>

              <Nav.Link href="/mypage">Mypage</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/cart">
                <AiOutlineShoppingCart size="35" />
              </Nav.Link>
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
