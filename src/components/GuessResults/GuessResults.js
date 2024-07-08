import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

// array of guesses, format [{ key: string, value: string }]
// and the string that is the answer
function GuessResults({ guessList, answer }) {
  // always shows the last NUM_OF_GUESSES_ALLOWED guesses, if less than complete with empty guesses
  const guessesToShow = guessList.slice(-NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((idx) =>
        idx < guessesToShow.length ? (
          <Guess key={guessesToShow[idx].key} answer={answer}>
            {guessesToShow[idx].value}
          </Guess>
        ) : (
          <Guess key={crypto.randomUUID()}></Guess>
        )
      )}
    </div>
  );
}

export default GuessResults;
