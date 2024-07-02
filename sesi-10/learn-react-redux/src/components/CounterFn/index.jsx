import { Paper } from "@mui/material";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../actions/counterFn";
import CounterInput from "../CounterInput";

const CounterFn = () => {
  const state = useSelector((state) => {
    return {
      counterFn: state.counterFn.value,
    };
  });

  const dispatch = useDispatch();

  const handleIncrement = (value) => {
    dispatch(increment(value));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <CounterInput
        title="Functional Component Counter"
        counterFn={state.counterFn}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </Paper>
  );
};

export default CounterFn;
