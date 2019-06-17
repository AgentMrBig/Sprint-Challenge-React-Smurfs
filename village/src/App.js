import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        id: '',
        name: '',
        age: '',
        height: '',
      }
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    this.getSmurfs();
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="navi">
          <NavLink className="navLink" to="/">Home</NavLink>
          <NavLink className="navLink" to="/smurf-form">Found A Smurf?</NavLink>
        </div>
        <Route
          exact
          path='/'
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path='/smurf-form'
          render={props => <SmurfForm {...props} loadSmurfs={this.getSmurfs} addSmurf={this.addSmurf} />}
        />


      </div>
    );
  }

  /* START Helper functions */

  getSmurfs() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data })
        //console.log(this.state.smurfs)
        console.log('got smurfs', res.data)
      })
      .catch(error => {
        //console.log(error);
        this.setState({ getErrorMessage: 'Could not retrieve any smurfs' });
      });
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurf: res.data })
        console.log('addSmurf ', res);
      })
      .catch(error => {
        console.log(error);
      })
  }
}


