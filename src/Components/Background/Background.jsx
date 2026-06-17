import "./Background.css";
import Viodeo1 from "../../assets/video1.mp4";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
const Background = ({ heroCount, playStatus }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={Viodeo1} type="video/mp4" />
      </video>
    );
  } else if (heroCount == 0) {
    return <img src={img1} className="background fade-in" alt="" />;
  } else if (heroCount == 1) {
    return <img src={img2} className="background fade-in" alt="" />;
  } else if (heroCount == 2) {
    return <img src={img3} className="background fade-in" alt="" />;
  }
};

export default Background;
