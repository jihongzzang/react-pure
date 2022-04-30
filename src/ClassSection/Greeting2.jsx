import React, { Component } from 'react';

export default class Greeting2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Students!',
    };
    // this.changeName = this.changeName.bind(this);
  }

  // changeName() {
  //   this.setState({ name: 'Students and Friends!' });
  // }

  changeName = () => {
    this.setState({ name: 'Students and Friends!' });
  };

  render() {
    return (
      <>
        <p>Hello, {this.state.name}</p>
        <button onClick={this.changeName}>
          Change name to "Students and friends!
        </button>
      </>
    );
  }
}
