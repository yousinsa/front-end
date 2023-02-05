import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Api = () => {
  let [data, setData] = useState<any[]>([]);
  let category = useSelector((state: any) => state.goodsInfo.category);

  useEffect(() => {
    delete axios.defaults.headers.common["Authorization"];
    // 로그인시 axios 헤더값이 기본으로 설정되있기때문에 삭제 해줘야됨
    axios
      .get("/v1/search/shop.json", {
        params: {
          query: category,
          display: 100,
        },
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
        },
      })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.items]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Row xs={1} md={3} className="g-4 d-flex justify-content-center">
        {data.map((item) => {
          return (
            <>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ width: "100%", height: "30vh" }}
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title>
                      {item.title.replace(/<[^>]*>?/g, "")}
                    </Card.Title>
                    <Card.Text>{item.lprice}원</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
export default Api;
