import React from "react";
import styled from "styled-components";

const SocialLogin = () => {
  return (
    <Container>
      <Item>
        <ImgDiv>
          <Img
            alt="페이스북"
            src="https://i.pinimg.com/564x/74/d9/1a/74d91ae6d3eaee595f4792208be8cc26.jpg"
          ></Img>
        </ImgDiv>
        <ItemTextDiv>페이스북으로 로그인</ItemTextDiv>
      </Item>
      <Item>
        <ImgDiv>
          <Img
            alt="네이버"
            src="https://i.pinimg.com/564x/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.jpg"
          ></Img>
        </ImgDiv>
        <ItemTextDiv>네이버로 로그인</ItemTextDiv>
      </Item>
      <Item>
        <ImgDiv>
          <Img
            alt="구글"
            src="https://i.pinimg.com/564x/18/e6/d0/18e6d0542e3c111a8300e81600094c1f.jpg"
          ></Img>
        </ImgDiv>
        <ItemTextDiv>구글로 로그인</ItemTextDiv>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 150px;
`;
const Item = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  height: 25%;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
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
`;

export default SocialLogin;
