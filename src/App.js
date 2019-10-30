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
          },
          {
            to: "/about",
            text: "About"
          },
          {
            to: "/contact",
            text: "Contact"
          },
          {
            to: "/signin",
            text: "Sign In"
          },
        ]} />
    </div>
  );
}

export default App;
