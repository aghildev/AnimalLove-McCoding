import { useState } from "react";
import heart from "../assets/svg/heart.svg";

const AnimalsShow = ({ animal }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div style={{ border: "1px solid black" }} onClick={handleClick}>
      <img
        src={animal}
        alt="animal"
        style={{ width: "200px", height: "200px" }}
      />
      <img src={heart} alt="animal" style={{ width: 10 * clicks + "px" }} />
    </div>
  );
};

export default AnimalsShow;
