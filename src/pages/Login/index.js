import React, { Component } from 'react';

import { Paper, Grid, Input, InputLabel, FormControl, Button } from '@material-ui/core';

import './styles.css';

class Login extends Component {
  render() {
    return (
      <Grid container justify="center">
          <Grid xs={4}>
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
            </Paper>
          </Grid>
      </Grid>
    );
  }
}

export default Login;
