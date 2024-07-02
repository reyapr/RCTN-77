import { useEffect } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, getUsers } from "../../actions/user";

const UserList = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserDetails(2));
  }, []);

  return (
    <div className={styles.container}>
      <h1>User List</h1>
      <div className={styles["user-container"]}>
        {userState.values.map((user) => {
          return (
            <div key={user.id} className={styles["user-wrapper"]}>
              <b>Email:</b> <span>{user.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
