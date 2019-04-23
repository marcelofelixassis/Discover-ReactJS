import React, { Component } from 'react';
import { Paper, Grid, Input, InputLabel, FormControl, Button } from '@material-ui/core';
import AuthService from '../../services/authService';
import { notification } from '../../services/toastService';

import './styles.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    AuthService.userRegister(this.state).then(() => {
      let userData = AuthService.currentUser();
      userData ? (
        AuthService.userRegisterMoreInfos(this.state.name, userData.uid).then(() => {
          notification("User created!", 'success')
          this.props.history.push("Login");
        }).catch(() => {
          notification("Error! Try again later", 'error')
        })
      ) : (
        notification("Error! Try again later", 'error')
      );
    }).catch(err => {
      notification(err.message, 'error');
    });
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid>
          <Paper className="formLoginContainer">
            <form onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="name">Your Name</InputLabel>
                    <Input id="name" name="name" autoFocus value={this.state.name} onChange={this.handleChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange} />
                </FormControl>
                <Button type="submit" fullWidth variant="contained" color="primary">REGISTER</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Register;
