import React from "react";
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import NftExplain from "../nftExplain/NFTExplain";
import FirstBatch from "../firstBatch/FirstBatch";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout" style={{overflow: "hidden"}}>
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row>
        <NftExplain/>
      </Row>
      <Row>
        <FirstBatch/>
      </Row>
    </Container>
  );
};

export default MainLayout;