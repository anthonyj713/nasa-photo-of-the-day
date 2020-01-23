import React from "react";
import "./App.css";
// https://api.nasa.gov/planetary/apod?api_key=erTW5M9qngVOSe2b65T5b9VCOFpVtCw3CoCEeX2N
function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src="https://apod.nasa.gov/apod/image/2001/Hyades_Mtanous_1080.jpg"/>
    </div>
  );
}

export default App;

