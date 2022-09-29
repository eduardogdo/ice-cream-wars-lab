import "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <div>
      <label>Progress</label>
      <progress max={100} value={50} style={{}}></progress>
    </div>
  );
};

export default ProgressBar;
