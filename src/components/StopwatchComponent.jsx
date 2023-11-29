import React, { useState, useEffect } from 'react';

const StopwatchComponent = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStartClick = () => {
    setRunning(true);
  };

  const handleStopClick = () => {
    setRunning(false);
  };

  const handleClearClick = () => {
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div id="timer" style={{ fontSize: '50px', color: 'green' }}>
        {time} seconds
      </div>
      <button id="start" onClick={handleStartClick}>
        Start
      </button>
      <button id="stop" onClick={handleStopClick}>
        Stop
      </button>
      <button id="clear" onClick={handleClearClick}>
        Clear
      </button>
      <hr />
    </div>
  );
};

export default StopwatchComponent;