"use client";
import { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button className="bg-black py-2 px-8 text-white rounded-full my-3" onClick={() => setCounter((counter) => counter + 1)}>
        increment count
      </button>
    </div>
  );
};
