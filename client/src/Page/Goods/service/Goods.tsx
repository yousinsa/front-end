import React from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";

import SideBar from "../util/SideBar";
import Search from "../util/Search";
import ScrollBar from "../util/ScrollBar";
import Api from "../util/Api";

const Goods = () => {
  return (
    <GoodsContainer>
      <Search />

      <GoodsInnerContainer>
        <SideBar />
        <Api></Api>
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
