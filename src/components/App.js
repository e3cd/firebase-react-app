import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>MarioPlan</h1>
        </div>
      </BrowserRouter>
    );
  }
}
