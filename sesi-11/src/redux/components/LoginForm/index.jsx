import {
  Button,
  CircularProgress,
  FormHelperText,
  TextField,
} from "@mui/material";
import styles from "./index.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disabled={authState.loading || !email || !password}
        variant="contained"
        type="submit"
      >
        {authState.loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Login"
        )}
      </Button>
      <FormHelperText error={authState.error}>{authState.error}</FormHelperText>
      {authState.success && (
        <FormHelperText className={styles.success}>Success !</FormHelperText>
      )}
    </form>
  );
};

export default LoginForm;
