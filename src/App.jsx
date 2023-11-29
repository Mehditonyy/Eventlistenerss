import React from 'react';
import ToggleBoxComponent from './components/ToggleBoxComponent';
import MirrorComponent from './components/MirrorComponent';
import CounterComponent from './components/CounterComponent';
import RaceComponent from './components/RaceComponent';
import StopwatchComponent from './components/StopwatchComponent';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <ToggleBoxComponent />
      <MirrorComponent />
      <CounterComponent />
      <RaceComponent />
      <StopwatchComponent />
    </div>
  );
};

export default App;