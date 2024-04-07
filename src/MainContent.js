import React, { useState } from "react";
import Number from "./Number";
import Buttons from "./Buttons";

const MainContent = () => {
  const [counter, setCounter] = useState(0);

  function handleClickPlus() {
    setCounter(counter + 1);
  }

  function handleClickMin() {
    setCounter(counter - 1);
  }
  function handleClickClose() {
    setCounter(0);
  }
  return (
    <>
      <Number number={counter} />
      <Buttons
        clickPlus={handleClickPlus}
        clickMin={counter ? handleClickMin : null}
        clickClose={handleClickClose}
      />
    </>
  );
};

export default MainContent;
