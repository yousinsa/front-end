import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import RegisterData from "./Data/RegisterData";

const Register = () => {
  const [authCode, setAuthCode] = useState<boolean>(false);

  return (
    <RegisterOutContainer>
      <RegisterFormOutContainer>
        <RegisterTitle>Register</RegisterTitle>
        <Form
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {RegisterData.filter((item) => item.id === "email").map((item) => {
            return (
              <>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Col sm>
                    <Form.Control
                      type={item.id}
                      placeholder={item.placeHolder}
                    />
                  </Col>
                </Form.Group>
              </>
            );
          })}
          {authCode && (
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Col sm>
                <Form.Control
                  style={{
                    width: "180px",
                    height: "100%",
                    paddingTop: "10px",
                    fontSize: "0.8rem",
                  }}
                  placeholder="인증코드를 입력하세요"
                />
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  style={{
                    justifyContent: "flex-end",
                    width: "80px",
                    height: "100%",
                  }}
                >
                  인증
                </Button>
              </Col>
            </Form.Group>
          )}

          <Button
            style={{ marginBottom: "5px", height: "80%" }}
            variant="secondary"
            type="submit"
          >
            인증
          </Button>
          {RegisterData.filter((item) => item.id === "password").map((item) => {
            return (
              <>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Col sm>
                    <Form.Control
                      type={item.id}
                      placeholder={item.placeHolder}
                    />
                  </Col>
                </Form.Group>
              </>
            );
          })}

          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </RegisterFormOutContainer>
    </RegisterOutContainer>
  );
};
const RegisterOutContainer = styled.section`
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
const RegisterTitle = styled.h1`
  margin-bottom: 50px;
`;
const RegisterFormOutContainer = styled.div`
  background-color: white;
  box-shadow: 5px 5px 26px 5px lightgray;
  width: 30%;
  height: 70%;
  display: grid;
  align-content: center;
`;

export default Register;
