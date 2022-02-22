import React from "react";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import Img1 from "../../assets/imgs/nftExplain/img1.png";

import "./NFTExplain.scss";

const NftExplain = () => {
  return (
    <Container fluid className="nft-explain d-flex justify-content-center align-items-center">
      <div className="bg-blur"/>
      <Container className="nft-explain-container">
        <Row className="nft-explain-content">
          <Col lg={6} md={12} sm={12} data-aos="zoom-in" className="left-side">
            <img src={Img1} alt="liber-t"/>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-side">
            <div data-aos="fade-left" className="content-container">
              <p className="desc">NFTs are built on the same kind of infrastructure – blockchain – that cryptocurrencies
                are. Because they use blockchain, the transfer of an interest in NFTs is recorded on the blockchain,
                putting
                ownership on a permanent record, making it impossible (or at least very hard) to falsify.</p>
            </div>
            <div className="faq-container">
              <Accordion>
                <Accordion.Item data-aos="fade-right" eventKey="0">
                  <Accordion.Header>But why are NFTs in such high demand?</Accordion.Header>
                  <Accordion.Body>
                    <p>The majority of the NFTs you purchase is nothing but a digital certificate that you can't touch,
                      wear or use in your everyday life.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item data-aos="fade-right" eventKey="1">
                  <Accordion.Header>What if you could? What if wearable, & interactable NFTs came into the
                    picture?</Accordion.Header>
                  <Accordion.Body>
                    <p>Interactable & Wearable NFTs is doing just that, we're hear to change the game in more ways than
                      you
                      can imagine.</p>
                    <p>Everything from custom clothing, jewelry, RC Models, gaming charactors and more is what you will
                      find at I & W NFTs.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
    ;
};

export default NftExplain;