import logo from './logo.svg';
import './App.scss';
import io from 'socket.io-client';
import React,{useState} from 'react';

const socket = io.connect('http://localhost:5000')

function App() {
  const [state, setstate] = useState(initialState);
  return (
    <div className="main-container">
      <div className="grid"></div>
      <div className="dice-container"></div>
    </div>
  );
}

export default App;
