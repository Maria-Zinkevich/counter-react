import React, { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import resetImg from "./reset-img.svg";

function App() {
  const [value, setValue] = useState(0);

  function decrement() {
    setValue(value - 1);
  }

  function increment() {
    setValue(value + 1);
  }

  function reset() {
    setValue(0);
  }

  return (
    <div className="counter__wrap">
      <div className="counter__number">{value}</div>
      <div className="counter__buttons">
        <Button className="counter__decrement" onClick={decrement}>
          -
        </Button>
        <Button className="counter__reset" onClick={reset}>
          <img alt="reset" src={resetImg} />
        </Button>
        <Button className="counter__increment" onClick={increment}>
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
