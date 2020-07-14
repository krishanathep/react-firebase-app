import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Navbar from "./layouts/Navbar";
import Repairs from "./components/Repairs";
import Home from "./components/Home";
import Equipments from "./components/Equipments";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/repairs' component={Repairs} />
            <Route path='/todos' component={Todos} />
            <Route path='/equipments' component={Equipments} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;