import React, { useState } from 'react';

const MirrorComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Mirror</h1>
      <input onChange={handleInputChange} value={inputValue} />
      <p id="mirror">{inputValue}</p>
      <hr />
    </div>
  );
};

export default MirrorComponent;