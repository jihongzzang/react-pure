import React, { Component } from 'react';

export default class Greeting extends Component {
  showName = () => {
    alert(this.props.name);
  };

  handleShowName = () => {
    setTimeout(() => {
      this.showName();
    }, 3000);
  };

  // showName() {
  //   alert(this.props.name);
  // }

  // handleShowName() {
  //   setTimeout(() => {
  //     this.showName(); //Cannot read properties of undefined(reading 'showName')
  //   }, 3000);
  // }

  render() {
    console.log(this);

    return (
      <>
        <div>Greeting</div>
        <button onClick={this.handleShowName}>show name</button>
      </>
    );
  }
}
