import { useState } from "react";
import { VotesModel } from "../../models/VotesModel";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Votes.scss";

const Votes = () => {
  const [votes, setVotes] = useState<VotesModel[]>([
    { name: "Chocolote", votes: 0 },
    { name: "Vanilla", votes: 0 },
    { name: "Strawberry", votes: 0 },
  ]);

  const setVotesFunc = (index: number) => {
    let copy = [...votes];
    copy[index] = { name: copy[index].name, votes: copy[index].votes + 1 };
    console.log(copy);
    setVotes(copy);
  };

  return (
    <section className="Votes">
      <h4>Vote Here</h4>
      <ul>
        <li>
          <button className="btn" onClick={() => setVotesFunc(0)}>
            {votes[0].name}
          </button>
        </li>
        <li>
          <button className="btn" onClick={() => setVotesFunc(1)}>
            {votes[1].name}
          </button>
        </li>
        <li>
          <button className="btn" onClick={() => setVotesFunc(2)}>
            {votes[2].name}
          </button>
        </li>
      </ul>

      <ProgressBar label={votes[0].name} value={votes[0].votes}></ProgressBar>
      <ProgressBar label={votes[1].name} value={votes[1].votes}></ProgressBar>
      <ProgressBar label={votes[2].name} value={votes[2].votes}></ProgressBar>
    </section>
  );
};

export default Votes;
