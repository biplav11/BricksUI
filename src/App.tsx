import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./pages/Button";
import Tooltip from "./pages/Tooltip";
import Home from "./pages/Home";
import Dropdown from "./pages/dropdown";
import Typography from "./pages/Typography";
import Tag from "./pages/Tag";
import Avatar from "./pages/Avatar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/button">
            <Button />
          </Route>
          <Route path="/tooltip">
            <Tooltip />
          </Route>
          <Route path="/dropdown">
            <Dropdown />
          </Route>
          <Route path="/typography">
            <Typography />
          </Route>
          <Route path="/tag">
            <Tag />
          </Route>
          <Route path="/avatar">
            <Avatar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
