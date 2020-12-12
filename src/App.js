import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import ImageData from "./components/imageData";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} /> {/*Route to Home */}
      <Route exact path="/album/:albumId" component={ImageData} />
      {/* Route wild card depends on albumId */}
    </Router>
  );
}
export default App;
