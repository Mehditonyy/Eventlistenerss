import React, { useState } from 'react';

const RaceComponent = () => {
  const [carPosition, setCarPosition] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setCarPosition((prevPosition) => prevPosition + 5);
    }
    if (e.key === 'ArrowLeft') {
      setCarPosition((prevPosition) => prevPosition - 5);
    }
  };

  return (
    <div>
      <h1>Race</h1>
      <p>Move car to the right by pressing the right arrow</p>
      <div id="car" style={{ fontSize: '100px', marginTop: '-50px', marginLeft: `${carPosition}px` }}>
        🏎
      </div>
      <hr />
    </div>
  );
};
