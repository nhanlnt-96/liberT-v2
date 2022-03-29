import React from "react";
import {Container} from "react-bootstrap";
import {FaQuoteRight} from "react-icons/all";

const bannerData = ["Mint your FD and Receive your Diamonds", "Mint Hold Trade a RealDiamonds as NFT", "Welcome To Revolution,To Freedom"];

export const BannerContent = () => {
  return (
    <Container fluid className="banner-content-container">
      <div>
        <div data-aos="zoom-in" className="content-title">
          <h1 className="title">Welcome to</h1>
          <h1 className="title">the First Diamonds Related NFT</h1>
        </div>
        <div className="content-container">
          {
            bannerData.map((val, index) => (
              <div data-aos="zoom-in"
                   key={index}
                   className="content-box d-flex justify-content-center align-items-center">
                <p className="desc">{val}</p>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
};