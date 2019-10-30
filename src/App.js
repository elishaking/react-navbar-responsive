import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar
        links={[
          {
            to: "/",
            text: "Home"
          }
        ]} />
    </div>
  );
}

export default App;
