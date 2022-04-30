import React, { Component } from 'react';

export default class Greeting3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Students!',
    };
  }

  changeNameAndNotifyCurrStateOfName = () => {
    this.setState({ name: 'Students and Friends!' });
    setTimeout(() => alert(this.state.name), 3000);
  };

  render() {
    const { name } = this.state;
    const changeNameAndNotifyCurrStateOfRenderedName = () => {
      this.setState({ name: 'Students and Friends!' });
      setTimeout(() => alert(name), 3000);
    };

    return (
      <>
        <p>Hello, {this.state.name}</p>
        <button onClick={this.changeNameAndNotifyCurrStateOfName}>
          Change name to "Students and friends!" and print updated name
        </button>
        <button onClick={changeNameAndNotifyCurrStateOfRenderedName}>
          Change name to "Students and friends!" and print rendered name
        </button>
      </>
    );
  }
}
