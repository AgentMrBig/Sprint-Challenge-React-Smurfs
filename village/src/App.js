import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
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
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }

  /* START Helper functions */

  getSmurfs() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({ smurfs: res.data })
        console.log(this.state.smurfs)
      })
      .catch(error => {
        console.log(error);
        this.setState({ getErrorMessage: 'Could not retrieve any smurfs' });
      });
  }
}


