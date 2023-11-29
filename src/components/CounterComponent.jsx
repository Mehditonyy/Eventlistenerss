import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handlePlusClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button id="minus" onClick={handleMinusClick}>-</button>
      <span id="display-count">{count}</span>
      <button id="plus" onClick={handlePlusClick}>+</button>
      <hr />
    </div>
  );
};

export default CounterComponent;