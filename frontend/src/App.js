import React from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}
const Header = (username) => {
  return (
      <div>
          <h4> Welcome {username}</h4>
          <button></button>
      </div>
  );
};

export default App;
