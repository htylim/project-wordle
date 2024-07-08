import React from "react";
import Banner from "../Banner";

function HappyBanner({ numGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
