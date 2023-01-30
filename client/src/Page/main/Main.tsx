import React from "react";
import styled from "styled-components";
import MainCarousel from "./util/MainCarousel";
import MainProductCard from "./util/MainProductCard";
import VirtualProductCard from "./util/VirtualProductCard";

const Main = () => {
  return (
    <MainDiv>
      <MainCarousel />

      <MainProductCard />
      <VirtualProductCard />
    </MainDiv>
  );
};

const MainDiv = styled.section``;
export default Main;
