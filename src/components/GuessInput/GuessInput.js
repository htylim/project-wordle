import React from "react";
import { NUM_OF_LETTERS_PER_GUESS } from "../../constants";

function GuessInput({ submitGuess, disabled }) {
  const [guessInput, setGuessInput] = React.useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    submitGuess(guessInput);
    setGuessInput("");
  }

  function onInputChange(event) {
    const nextGuessInput = event.target.value.toUpperCase();
    setGuessInput(nextGuessInput);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern={`[A-Za-z]{${NUM_OF_LETTERS_PER_GUESS}}`}
        title={`${NUM_OF_LETTERS_PER_GUESS} letter word`}
        value={guessInput}
        onChange={onInputChange}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
