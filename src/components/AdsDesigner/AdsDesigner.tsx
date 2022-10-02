import { useState } from "react";
import "./AdsDesigner.scss";

const AdsDesigner = () => {
  const [flavor, setFlavor] = useState("Pick One");
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(14);

  const getFontSize = () => {
    return {
      fontSize: fontSize + "px",
    };
  };

  return (
    <section className="AdsDesigner">
      <h4>Ad Designer</h4>
      <div className={"card " + (darkMode ? "dark" : "light")}>
        <p>Vote For</p>
        <h4 style={getFontSize()}>{flavor}</h4>
      </div>
      <p>What to Support</p>
      <ul>
        <li>
          <button
            className="btn"
            onClick={() => setFlavor("Chocolate")}
            disabled={flavor === "Chocolate"}
          >
            Chocolate
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => setFlavor("Vanilla")}
            disabled={flavor === "Vanilla"}
          >
            Vanilla
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => setFlavor("Strawberry")}
            disabled={flavor === "Strawberry"}
          >
            Strawberry
          </button>
        </li>
      </ul>
      <p>Color Theme</p>
      <ul>
        <li>
          <button
            className="btn"
            onClick={() => setDarkMode(false)}
            disabled={!darkMode}
          >
            Light
          </button>
        </li>
        <li>
          <button
            className="btn"
            onClick={() => setDarkMode(true)}
            disabled={darkMode}
          >
            Dark
          </button>
        </li>
      </ul>
      <p>Font Size</p>
      <ul>
        <li>
          <button
            className="btn"
            onClick={() => setFontSize((prev) => prev - 1)}
          >
            Down
          </button>
        </li>
        <li>{fontSize}</li>
        <li>
          <button
            className="btn"
            onClick={() => setFontSize((prev) => prev + 1)}
          >
            Up
          </button>
        </li>
      </ul>
    </section>
  );
};

export default AdsDesigner;
