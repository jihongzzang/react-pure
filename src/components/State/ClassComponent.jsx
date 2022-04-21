import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //state 기본값 상태
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  } //그려지자 마자 호출되는 함수

  componentWillUnmount() {
    clearInterval(this.timerID);
  } // 컴포넌트가 사라지기 직전에 호출되는 함수

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  } //여기서 화면에 그려줄 jsx 리턴
}
