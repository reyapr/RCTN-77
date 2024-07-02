import { Button } from "@mui/material";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../actions/counter";

const Counter = () => {
  const counter = useSelector((state) => {
    return {
      title: state.counter.title,
      value: state.counter.value,
    };
  });

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment);
  };

  const handleDecrement = () => {
    dispatch(decrement);
  };

  return (
    <div className={styles.container}>
      <h1>{counter.title}</h1>
      <h3>{counter.value}</h3>
      <div className={styles["buttons-container"]}>
        <Button variant="outlined" onClick={handleIncrement}>
          +
        </Button>
        <Button variant="outlined" color="error" onClick={handleDecrement}>
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;
