import "./ProgressBar.scss";

const ProgressBar = (props: any) => {
  return (
    <div className="ProgressBar">
      <label>{props.label}</label>
      <progress max={100} value={props.value} style={{}}></progress>
    </div>
  );
};

export default ProgressBar;
