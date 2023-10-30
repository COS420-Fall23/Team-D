import React from "react";
import { LoginButton } from "./components/LoginButton";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Name Of Application</h1>
      <LoginButton></LoginButton>
    </div>
  );
}

export default App;
