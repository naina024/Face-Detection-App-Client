import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
      <div 
      style={{'background': 'radial-gradient(circle, rgba(245,239,240,1) 0%, rgba(148,187,233,1) 100%)'
    }}
      className={'h-screen'}
      >
        <Dashboard />
      </div>
  );
}

export default App;
