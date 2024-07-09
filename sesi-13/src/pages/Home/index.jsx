import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <div>
      <Typography variant="h4">Home</Typography>
      <Divider />
      <div className={styles.card}>
        <h2>Why do we need Test?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <Button
          data-testid="usr-list-btn"
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Users List
        </Button>
      </div>
    </div>
  );
};

export default Home;
