import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Logo from "../../assets/imgs/banner/logo.webp";
import {BannerContent} from "./components/BannerContent";
import {useDispatch, useSelector} from "react-redux";
import {connect} from "../../redux/blockchain/blockchainActions";
import {fetchData} from "../../redux/data/dataActions";
import MintBox from "../mintBox/MintBox";
import ToastNoti from "../toastNoti/ToastNoti";

import "./BannerComp.scss";

const BannerComp = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  
  return (
    <Container fluid className="banner-comp d-flex justify-content-center align-items-center">
      <div className="bg-blur"/>
      <Row className="banner-comp-logo">
        <img src={Logo} alt="liber-t"/>
      </Row>
      <Container className="banner-comp-container">
        <Row>
          <Col lg={blockchain.account ? 6 : 12}
               md={12}
               sm={12}
               className="banner-comp-container-content d-flex flex-column align-items-center justify-content-center">
            <BannerContent/>
            {
              !blockchain.account && (
                <div data-aos="zoom-in" className="connect-btn d-flex justify-content-center align-items-center">
                  <button onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}>Connect wallet
                  </button>
                </div>
              )
            }
          </Col>
          {
            blockchain.account && (
              <Col lg={6} md={12} sm={12} className="banner-comp-container-mint">
                <MintBox/>
              </Col>
            )
          }
        </Row>
      </Container>
      <ToastNoti errorMsg={blockchain.errorMsg}/>
    </Container>
  );
};

export default BannerComp;