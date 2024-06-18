import { Component } from "react";

export default class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timer: null,
    };
  }

  componentDidMount() {
    // localStorage.setItem("date", this.state.date);
    this.timer = setInterval(() => {
      console.log(`interval berjalan ${this.state.date.toISOString()}`);
      this.setState({ date: new Date() });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isCountChange = this.props.count !== nextProps.count;
    const isDateChange = this.state.date !== nextState.date;
    if (isCountChange || isDateChange) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    console.log(this.timer, "this timer");
    clearInterval(this.timer);
  }

  render() {
    // console.log("ini ada di dalam counter 2");
    return (
      <div>
        <h1>Counter 2</h1>
        <b>{this.state.date.toISOString()}</b>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.setCounter2(this.props.count + 1)}>
          +
        </button>
        <button onClick={() => this.props.setCounter2(this.props.count - 1)}>
          -
        </button>
      </div>
    );
  }
}
