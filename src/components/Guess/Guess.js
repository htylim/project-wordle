import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS_PER_GUESS } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ children, answer }) {
  const result = checkGuess(children, answer);

  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_PER_GUESS).map((idx) => (
        <span key={idx} className={`cell ${result ? result[idx].status : ""}`}>
          {result ? result[idx].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
