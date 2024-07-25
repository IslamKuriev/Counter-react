import React, { useEffect, useState } from "react";
import Number from "./Number";
import Buttons from "./Buttons";

const MainContent = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
  const storedCounter = localStorage.getItem("counter")
  if(storedCounter) {
    setCounter(parseInt(storedCounter))
  } 
  }, [])

  function handleClickPlus() {
    const newCounter = counter + 1
    setCounter(newCounter);
    localStorage.setItem("counter", newCounter)
  }

  function handleClickMin() {
    const newCounter = counter - 1
    setCounter(newCounter);
    localStorage.setItem("counter", newCounter)

  }
  function handleClickClose() {
    setCounter(0);
    localStorage.setItem("counter", 0)

  }
  return (
    <>
      <Number setCounter={setCounter} number={counter} />
      <Buttons
        clickPlus={handleClickPlus}
        clickMin={counter === true ? handleClickMin : null}
        clickClose={handleClickClose}
      />
    </>
  );
};

export default MainContent;
