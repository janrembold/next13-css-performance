"use client";

import { useEffect, useState } from "react";

export const StateDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1>State Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-green-500">
        Increment
      </button>
    </div>
  );
};
