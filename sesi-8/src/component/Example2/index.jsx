import { useState } from "react";
import styled from "styled-components";
import Title from "../Title";

const styleButton = {
  backgroundColor: "gray",
  color: "white",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
};

const SubTitle = styled.h2`
  color: green;
  background-color: ${(props) => props.bgColor};
`;

const Bold = styled.b({
  color: "red",
});

const Example2 = () => {
  const [bgColor, setBgColor] = useState("papayawhip");

  const handleClick = () => {
    if (bgColor === "papayawhip") {
      setBgColor("cyan");
    } else {
      setBgColor("papayawhip");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="title title-text">Sesi 8</h1>
        <Title title="Sesi 8+1" />
        <SubTitle bgColor={bgColor}>Sub Title</SubTitle>
        <Bold>Bold</Bold>
        <div
          style={{
            backgroundColor: "cyan",
            color: "black",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px",
          }}
        >
          Styling Component
        </div>
        <button onClick={handleClick} style={styleButton}>
          Change Color
        </button>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            alias incidunt ipsa dicta, et iste, voluptatem at perspiciatis
            facere cupiditate quasi laudantium debitis expedita enim non
            quisquam architecto perferendis ratione?
          </p>
          <a href="#" className="card-link">
            Details
          </a>
          <a href="#" className="card-link">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Example2;
