import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';


// TODO: try using react-router, route-guards 
// ----------------------------------------------------------------------------------
// TODO: different ids in users and login table for a user? -> use only 1 table 
// TODO: add 'cross' button in input field to clear url field

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
