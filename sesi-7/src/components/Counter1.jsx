import { Component } from "react";

export default class Counter1 extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.count !== nextProps.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log("ini ada di dalam counter 1");
    return (
      <div>
        <h1>Counter 1</h1>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.setCounter1(this.props.count + 1)}>
          +
        </button>
        <button onClick={() => this.props.setCounter1(this.props.count - 1)}>
          -
        </button>
      </div>
    );
  }
}
