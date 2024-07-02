/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import styles from "./index.module.css";

const CounterInput = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <h3>{props.counterFn}</h3>
      <div className={styles["action-container"]}>
        <Button
          color="success"
          variant="outlined"
          onClick={() => props.handleIncrement()}
        >
          +
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={props.handleDecrement}
        >
          -
        </Button>
        <Button variant="outlined" onClick={() => props.handleIncrement(10)}>
          + 10
        </Button>
      </div>
      <Button color="error" variant="contained" onClick={props.handleReset}>
        Reset
      </Button>
    </>
  );
};

export default CounterInput;
