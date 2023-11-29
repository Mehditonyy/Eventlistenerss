import React, { useState } from 'react';

const ToggleBoxComponent = () => {
  const [boxColor, setBoxColor] = useState('');

  const handleBoxClick = () => {
    setBoxColor((prevColor) => (prevColor ? '' : 'blue'));
  };

  return (
    <div>
      <h1>Toggle the Box</h1>
      <div id="box" style={{ backgroundColor: boxColor }} onClick={handleBoxClick}></div>
      <hr />
    </div>
  );
};

export default ToggleBoxComponent;
