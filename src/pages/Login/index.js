import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Paper, Grid, Input, InputLabel, FormControl, Button, Typography } from '@material-ui/core';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { firebaseAuth, uiConfig } from '../../utils/firebaseUtils';

import './styles.css';

class Login extends Component {

  componentDidMount = async () => {
   //verificar se usuario ja esta logado ou nao
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid>
          <Paper className="formLoginContainer">
            <form>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              <Button type="submit" fullWidth variant="contained" color="primary">LOGIN</Button>
            </form>
            <Typography variant="h6" align="center">Login with social medias</Typography>
            <StyledFirebaseAuth uiConfig={ uiConfig } firebaseAuth={ firebaseAuth } />
            <Typography variant="h6" align="center">Or</Typography>
            <Button component={ Link } to="/register" fullWidth variant="contained" color="primary">Register</Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Login;
