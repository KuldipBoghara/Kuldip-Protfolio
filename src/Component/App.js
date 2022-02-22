import React from 'react';

import '../Style/App.css';
import Name from './Name';
import RightPanel from './RightPanel';

const App = () => {
  return (
    <div className="background">
      <div className="frame">
        <div className="left">
          <Name />
        </div>
        <div className="right">
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
