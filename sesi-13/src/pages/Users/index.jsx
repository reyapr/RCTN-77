import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  });

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h4">Users</Typography>
      <Divider />
      <Button
        onClick={goToHome}
        className={styles.button}
        variant="contained"
        color="success"
        data-testid="back-to-home-btn"
      >
        Back To Home
      </Button>
      <TableContainer component={Paper} className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={styles.th}>
                <Typography>ID</Typography>
              </TableCell>
              <TableCell className={styles.th}>
                <Typography>Name</Typography>
              </TableCell>
              <TableCell className={styles.th}>
                <Typography>Username</Typography>
              </TableCell>
              <TableCell className={styles.th}>
                <Typography>Email</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, idx) => (
              <TableRow key={user.id} className={idx % 2 === 0 && styles.tr}>
                <TableCell>
                  <Typography>{user.id}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{user.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{user.username}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{user.email}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
