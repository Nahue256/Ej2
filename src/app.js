import React, { Component } from "react";
import "./style/style.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

//Componentes
import HomePage from "./components/homepage";
import Questions from "./components/questions";
import Scores from "./components/scores";

//Data
import QuestionsData from "./components/data/data";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/game/:id" component={Questions}></Route>
          <Route path="/scores" exact component={Scores}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
