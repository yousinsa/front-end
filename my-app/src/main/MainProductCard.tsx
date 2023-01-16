import React from "react";

import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MainCard from "./MainCard";

const MainProductCard = () => {
  return (
    <MainProductArticle>
      <MainProductTitle>오늘은 이상품 어때요?</MainProductTitle>
      <Row xs={1} md={4} className="g-4 d-flex justify-content-center">
        {Array.from({ length: 8 })
          .fill(0)
          .map(() => {
            return (
              <>
                <Col>
                  <MainCard />
                </Col>
              </>
            );
          })}
      </Row>
    </MainProductArticle>
  );
};

const MainProductArticle = styled.article`
  padding: 10vh 10vw 10vh 10vw;

  width: 100vw;

  height: 100vh;
`;
const MainProductTitle = styled.h1`
  margin: 30px;
`;
export default MainProductCard;
