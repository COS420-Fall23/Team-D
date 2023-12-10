import React from "react";
import "./App.css";
import { AppRouter } from "./Routes";

function App(): JSX.Element {
  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
