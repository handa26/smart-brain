import Tilt from "react-parallax-tilt";

import "./Logo.css";
import brain from "../../assets/icons8-creativity-100.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tilt shadow-2">
        <div className="pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="brain-logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
