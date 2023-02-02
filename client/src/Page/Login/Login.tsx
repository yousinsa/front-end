import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import LoginData from "./LoginDaTa";

type LoginType = {
  email: string;
  password: string;
};

const Login = () => {
  const [userInfo, setUserInfo] = useState<LoginType>({
    email: "",
    password: "",
  });
  console.log(LoginData.filter((item) => item.id === "form"));
  return (
    <LoginOutContainer>
      <LoginFormOutContainer>
        <LoginTitle>Login</LoginTitle>
        <Form
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {LoginData.filter((item) => item.id === "form").map((item) => {
            return (
              <>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Col sm>
                    <Form.Control type={item.title} placeholder={item.title} />
                  </Col>
                </Form.Group>
              </>
            );
          })}

          <br />

          <div className="d-grid gap-1">
            {LoginData.filter((item) => item.id === "button").map((item) => {
              return (
                <>
                  <a href={item.link}>
                    <Button
                      variant="secondary"
                      style={{ height: "100%", width: "100%" }}
                    >
                      {item.title}
                    </Button>
                  </a>
                </>
              );
            })}
          </div>
        </Form>
      </LoginFormOutContainer>
    </LoginOutContainer>
  );
};

const LoginOutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
  }
`;
const LoginTitle = styled.h1`
  margin-bottom: 50px;
`;
const LoginFormOutContainer = styled.div`
  background-color: white;
  box-shadow: 5px 5px 26px 5px lightgray;
  width: 30%;
  height: 70%;
  display: grid;
  align-content: center;
`;

export default Login;
