import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick() {
    alert(this.state.date); // 바인딩이 필수
  }

  handleClick2 = () => {
    alert(this.state.date); // arrow 함수 사용시 바인딩이 필요없음
  };

  //this 가 누구인지 알고있다. arrow 함수사용시

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick2}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
