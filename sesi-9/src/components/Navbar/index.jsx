import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <div>|</div>
      <Link to="/about">About</Link>
      <div>|</div>
      <Link to="/about/others">About Others</Link>
      <div>|</div>
      <Link to="/members">Members</Link>
      <div>|</div>
      <Link to="/items">Items</Link>
      <div>|</div>
      {token && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
