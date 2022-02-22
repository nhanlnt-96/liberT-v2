import {Container} from "react-bootstrap";
import Img1 from "../../../assets/imgs/collections/img1.png";
import Img2 from "../../../assets/imgs/collections/img2.png";
import Img3 from "../../../assets/imgs/collections/img3.png";
import Img4 from "../../../assets/imgs/collections/img4.png";

const collectionsData = [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4];

export const FirstBatchCollection = () => {
  return (
    <Container className="slideshow-comp" fluid>
      <div className="slideshow-comp-slider">
        <div className="slideshow-comp-track"
             style={{width: `calc(250px * ${collectionsData.length * 3})`}}>
          {
            collectionsData.map((val, index) => (
              <div key={index} className="slideshow-comp-slide">
                <img src={val} alt="liber-t"/>
              </div>
            ))
          }
          {
            collectionsData.map((val, index) => (
              <div key={index} className="slideshow-comp-slide">
                <img src={val} alt="liber-t"/>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
};