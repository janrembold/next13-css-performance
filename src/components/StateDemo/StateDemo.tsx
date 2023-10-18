"use client";

import { useEffect, useState } from "react";
import styles from "./StateDemo.module.css";

export const StateDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className={styles.container}>
      <h1>State Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className={styles.button}>
        Increment
      </button>
    </div>
  );
};
