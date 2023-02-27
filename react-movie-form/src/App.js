import React, { Component } from "react";
import "./App.css";

import Movieform from "./Movieform";

function App() {
  return (
    <div className="App App-header">
      <div>
        <h1>Movie Form</h1>
        <Movieform />
        const [title, setTitle] = useState('') return(
        <div>
          <label>Title:</label>
          <input
            type="text"
            onChange={(event) => {
              Component(event.target.value);
            }}
          />
        </div>
        )
      </div>
    </div>
  );
}

export default App;
