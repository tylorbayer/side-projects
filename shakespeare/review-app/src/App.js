import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './App.css';
import Login from './components/Login';
import Reviews from './components/Reviews';

// root: {
//   flexGrow: 1,
// },
// title: {
//   flexGrow: 1,
// },

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        apiKey: ""
    }
  }

  handleAPIKeyChange(e) {
    this.setState({apiKey: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="nav-bar">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className="nav-title">
                Shakespeare Reviews
              </Typography>
              
                <Link className="router-link" to="/login">
                  <Button variant="contained" color="primary">
                    Logout
                  </Button>
                </Link>
            </Toolbar>
          </AppBar>
        </div>

        <Container>
            <Switch>
              <Route path="/login">
                <Login apiKey={this.state.apiKey} handleAPIKeyChange={this.handleAPIKeyChange.bind(this)} />
              </Route>
              <Route path="/reviews">
                <Reviews apiKey={this.state.apiKey} />
              </Route>
              <Route>
                <Redirect exact from="/" to="/login" />
              </Route>
            </Switch>
        </Container>
        </BrowserRouter>
      </div>
    );
  }
}
