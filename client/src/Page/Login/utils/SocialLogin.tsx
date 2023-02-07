import React from "react";
import styled from "styled-components";
import SocialData from "../Data/SocialData";

const SocialLogin = () => {
  return (
    <Container>
      {SocialData.map((item) => {
        return (
          <>
            <a href={item.url}>
              <Item>
                <ImgDiv>
                  <Img alt={item.title} src={item.src}></Img>
                </ImgDiv>
                <ItemTextDiv>{item.text}</ItemTextDiv>
              </Item>
            </a>
          </>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 150px;
  a {
    color: black;
    text-decoration: none;
  }
`;
const Item = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 25%;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
const Img = styled.img`
  height: 35px;
`;
const ImgDiv = styled.div`
  height: 100%;
  width: 20%;
`;
const ItemTextDiv = styled.div`
  padding-top: 8px;
  align-items: center;
  margin-left: 10px;
  width: 80%;
`;

export default SocialLogin;
