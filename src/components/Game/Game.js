import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { GAME_LOST, GAME_WON, GAME_RUNNING } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // array of guesses, format [{ key: string, value: string }]
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_RUNNING);

  function submitGuess(value) {
    const key = crypto.randomUUID();
    const guess = { key, value };

    const nextGuessList = [...guesses, guess];
    setGuesses(nextGuessList);

    if (value.toUpperCase() === answer.toUpperCase()) {
      setGameStatus(GAME_WON);
    } else if (nextGuessList.length === 6) {
      setGameStatus(GAME_LOST);
    }
  }

  return (
    <>
      <GuessResults guessList={guesses} answer={answer} />
      <GuessInput
        submitGuess={submitGuess}
        disabled={gameStatus !== GAME_RUNNING}
      />
      {gameStatus === GAME_WON && <HappyBanner numGuesses={guesses.length} />}
      {gameStatus === GAME_LOST && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
