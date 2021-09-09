import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
  render() {     
    return (
      <Grid 
        container 
        spacing={3}
        style={{ marginTop: "8vh" }}
        justifyContent="center"
      >
        {/* TODO: Find a better way to bind component state data (or use a ref and pass ref.value into login()) */}
        <TextField
          id="api-key-input"
          label="API Key"
          type="password"
          value={this.props.apiKey}
          onChange={this.props.handleAPIKeyChange}
        />
        <Link className="router-link" to="/reviews">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </Grid>
    );
  }
}