import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//need to import all components and pages
//one page
//many components
import Calendar from "./components/calendar";
import Header from "./components/header";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Calendar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
