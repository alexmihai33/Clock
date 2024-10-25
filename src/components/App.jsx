import React from "react";
import { useState } from "react";

let currentTime = new Date().toLocaleTimeString();

function App() {
  let [time, setTime] = useState("TIME");

  function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime((time = currentTime));
  }

  setInterval(getCurrentTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
