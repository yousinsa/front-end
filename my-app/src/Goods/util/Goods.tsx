import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideBar from "./SideBar";
import Search from "./Search";
import ScrollBar from "./ScrollBar";

console.log(process.env);
const Goods = () => {
  return (
    <GoodsContainer>
      <Search />

      <GoodsInnerContainer>
        <SideBar />
        <Row xs={1} md={3} className="g-4 d-flex justify-content-center">
          {Array.from({ length: 8 })
            .fill(0)
            .map(() => {
              return (
                <>
                  <Col>
                    {" "}
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://i.pinimg.com/736x/e7/88/12/e78812406ffcdff8c386b9bee8ca3478.jpg"
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>
      </GoodsInnerContainer>
      <MoreContentsDiv>
        <Button variant="dark" style={{ width: "10vw", height: "50%" }}>
          더보기..
        </Button>
      </MoreContentsDiv>
      <ScrollBarContainer>
        <ScrollBar />
      </ScrollBarContainer>
    </GoodsContainer>
  );
};

const GoodsContainer = styled.div`
  width: 100vw;

  margin-top: 100px;
  position: relative;
`;
const GoodsInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MoreContentsDiv = styled.div`
  height: 10vh;
  margin-top: 50px;
`;
const ScrollBarContainer = styled.div`
  position: fixed;
  top: 90vh;
  left: 88vw;
`;
export default Goods;
