import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import SlideInMenu from "./SlideInMenu";

const apiToken = "jvOs1YZOFc0zU5cQYhSstapPuodPyRI59bawkVYuL0pPxFV6WaMWXEyMpTuU";
let includes = "&include=";
let url =
  "https://soccer.sportmonks.com/api/v2.0/leagues?api_token=" +
  apiToken +
  includes;

const getInfo = async () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
  console.log();
};

console.log(url);

getInfo();

function App() {
  return (
    <div className="App">
      <div className="content">Test</div>
    </div>
  );
}

export default App;
