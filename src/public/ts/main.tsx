import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <h1>Hello world!</h1>} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
