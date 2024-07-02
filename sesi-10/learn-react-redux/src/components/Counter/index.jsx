/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Paper } from "@mui/material";
import { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../../actions/counter";
import CounterInput from "../CounterInput";

class Counter extends Component {
  handleIncrement = (value) => {
    this.props.dispatch(increment(value));
  };

  handleDecrement = () => {
    this.props.dispatch(decrement());
  };

  handleReset = () => {
    this.props.dispatch(reset());
  };

  render() {
    return (
      <Paper elevation={3} className={styles.container}>
        <CounterInput
          title="Class Component Counter"
          counterFn={this.props.counter}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleReset={this.handleReset}
        />
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.value,
  };
};

export default connect(mapStateToProps)(Counter);
