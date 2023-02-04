import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const remove = () => count !== 0 && setCount(count - 1);
  return (
    <div className="container">
      <button onClick={add}>+</button>
      <h1>{count}</h1>
      <button onClick={remove}>-</button>
    </div>
  );
}

export default Counter;
