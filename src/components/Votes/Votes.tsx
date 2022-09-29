import ProgressBar from "../ProgressBar/ProgressBar";
import "./Votes.scss";

const Votes = () => {
  return (
    <section className="Votes">
      <h4>Vote Here</h4>
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

      <ProgressBar></ProgressBar>
      <ProgressBar></ProgressBar>
      <ProgressBar></ProgressBar>
    </section>
  );
};

export default Votes;
