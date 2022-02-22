import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import NftExplain from "../nftExplain/NFTExplain";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row>
        <NftExplain/>
      </Row>
    </Container>
  );
};

export default MainLayout;