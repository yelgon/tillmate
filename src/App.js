import React from "react";
import "./App.css";
import Home from "./components/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Page6 from "./components/page6";

function App() {
  return (
    <Router>
      <Home />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/page/2" component={Page2} />
      <Route exact path="/page/3" component={Page3} />
      <Route exact path="/page/4" component={Page4} />
      <Route exact path="/page/5" component={Page5} />
      <Route exact path="/page/6" component={Page6} />
    </Router>
  );
}
export default App;
