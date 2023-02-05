import React, { ChangeEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { decodeToken } from "react-jwt";
import styled from "styled-components";
import LoginData from "./LoginData";
import axios from "axios";
import SetAuthorizationToken from "./utils/SetAuthorizationToken";
import { useDispatch } from "react-redux";
import { setUserInformation } from "../../Slice/userSlice";

import { useNavigate } from "react-router-dom";
type LoginType = {
  email: string;
  password: string;
};

const Login = () => {
  const [userInfo, setUserInfo] = useState<LoginType>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newUserInfo = {
      ...userInfo,
      [name]: value,
    };
    setUserInfo(newUserInfo);
  };

  const handleToSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = userInfo;
    let body = {
      memberId: email,
      password: password,
    };

    try {
      const response = await axios.post("/v2/api/auth/login", body);
      const token = await response.data.accessToken;
      localStorage.setItem("jwtToken", token);
      SetAuthorizationToken(token);
      const decodedtoken = decodeToken(token);
      dispatch(setUserInformation(decodedtoken));
      navigate("/");
    } catch (err) {
      alert("아이디혹은 비밀번호가 잘못되었습니다.");
    }
  };

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
          onSubmit={handleToSubmit}
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
                    <Form.Control name={item.link} onChange={handleChange} />
                  </Col>
                </Form.Group>
              </>
            );
          })}

          <br />

          <div className="d-grid gap-1">
            <Button
              variant="secondary"
              type="submit"
              style={{ height: "100%" }}
            >
              Sign In
            </Button>
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
