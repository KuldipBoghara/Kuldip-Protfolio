import React from 'react';

import '../Style/App.css';
import Name from './Name';

const App = () => {
  return (
    <div className="frame">
      <div className="left">
        <Name />
      </div>
      <div className="right">Right</div>
    </div>
  );
};

export default App;
