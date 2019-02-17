import React from "react";
import "./styles.css";
import HomePage from "../HomePage";
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseLine } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const theme = createMuiTheme();

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseLine />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}
