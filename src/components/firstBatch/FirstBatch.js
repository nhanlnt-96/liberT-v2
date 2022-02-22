import React from "react";
import {Container, Row} from "react-bootstrap";
import {FirstBatchCollection} from "./components/FirstBatchCollection";

import "./FirstBatch.scss";

const contentData = [
  "LiberT series NFTs that are direectly tagged to jewerly assets & raw moissanite diamonds.", "3D" +
  " NFT Cards of the latest RGT Crawler with speciality accessories - the more you customize the original model the" +
  " more unique the matching becomes.", "3D NFT Cards of a 1:4 scale motorcross bike with speciality accessories - the more you customize the original model the more unique the matching becomes.", "3D NFT Cards of a 1:12/1:16 scale RC Construction models with speciality accessories - the more you customize the original model the more unique the matching becomes."
];

const FirstBatch = () => {
  return (
    <Container fluid className="first-batch-comp">
      <div className="bg-blur"/>
      <Row className="first-batch-collection">
        <FirstBatchCollection/>
      </Row>
      <Container className="first-batch-container d-flex flex-column justify-content-center align-items-center">
        <Row data-aos="fade-down" className="first-batch-title justify-content-center align-items-center">
          <h2 className="title">Our first batch of NFTs this year will be</h2>
        </Row>
        <Row className="first-batch-content">
          <div className="content-container">
            <div className="content-items">
              {
                contentData.map((val, index) => (
                  <div data-aos="zoom-in" key={index} className="item">
                    <p className="desc">{val}</p>
                  </div>
                ))
              }
            </div>
            <div className="footer-content">
              <p className="desc">Our future roadmap includes plans to build a virtual store/marketplace where you will
                be
                able to navigate throughout to view and make purchases</p>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default FirstBatch;