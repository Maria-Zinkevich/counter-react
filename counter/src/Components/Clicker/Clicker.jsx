import React, { useState } from "react";
import resetImg from "../Clicker/reset-img.svg";
import styles from "./clicker.module.css";

export function Clicker() {
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
    <div className={`${styles.counter__wrap}`}>
      <div className={`${styles.counter__number}`}>{value}</div>
      <div className={`${styles.counter__buttons}`}>
        <button
          className={`${styles.counter__button} ${styles.counter__decrement}`}
          onClick={decrement}
        >
          -
        </button>
        <button
          className={`${styles.counter__button} ${styles.counter__reset}`}
          onClick={reset}
        >
          <img alt="reset" src={resetImg} />
        </button>
        <button
          className={`${styles.counter__button} ${styles.counter__increment}`}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
