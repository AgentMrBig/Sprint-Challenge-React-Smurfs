import React, { Component } from 'react';
import './smurfForm.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(event, {
      ...this.state
    })


    this.setState({
      id: '',
      name: '',
      age: '',
      height: ''
    });

    setTimeout(() => {
      //this.props.loadSmurfs()
      this.props.history.push('/');
    }, 1000);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <h2>Who's That Smurf?</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
