import logo from './logo.svg';
import './App.css';
import { useState, useRef, Component } from "react";
import Profile from './components/Profile';

function App() {
let [number, setNumber] = useState(0);
  function normalUpdatecount () {
    // setNumber(number + 1);
    // setNumber(number + 1);
    setNumber((prev) => prev + 1);
    inputRef.current.focus();
  }
  function deduceNumber() {
    setNumber (number - 1);
    //number = number + 1;  
  }

const inputRef = useRef(null);
function checkRef(){
  console.log(inputRef.current.value);
}
const alex = {
  userName: "Alex Johnson",
  occupation: "Frontend Developer",
  email: "alex@example.com",
  location: "San Francisco, CA",
  skills: "JavaScript, React, HTML"
}
  return (
    <>
      <div className ="App">
        <header className="App-header">
        <div>{number}</div>
        <button onClick = {normalUpdatecount}>+</button>
        <button onClick = {deduceNumber}>-</button>

        <input ref={inputRef} onChange={checkRef} type="text"/>
        <Profile {...alex}/>
        </header>
      </div>    
    </>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
