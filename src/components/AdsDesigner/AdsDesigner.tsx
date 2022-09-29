import "./AdsDesigner.scss";

const AdsDesigner = () => {
  return (
    <section className="AdsDesigner">
      <h4>Ad Designer</h4>
      <div className="card">
        <p>Vote For</p>
        <h4>Chocolate</h4>
      </div>
      <p>What to Support</p>
      <ul>
        <li>
          <button className="btn" disabled>
            Chocolate
          </button>
        </li>
        <li>
          <button className="btn">Vanilla</button>
        </li>
        <li>
          <button className="btn">Strawberry</button>
        </li>
      </ul>
      <p>Color Theme</p>
      <ul>
        <li>
          <button className="btn">Light</button>
        </li>
        <li>
          <button className="btn " disabled>
            Dark
          </button>
        </li>
      </ul>
      <p>Font Size</p>
      <ul>
        <li>
          <button className="btn">Down</button>
        </li>
        <li>56</li>
        <li>
          <button className="btn">Up</button>
        </li>
      </ul>
    </section>
  );
};

export default AdsDesigner;
