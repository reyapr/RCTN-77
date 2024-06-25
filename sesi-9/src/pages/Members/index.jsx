import { Link, Outlet } from "react-router-dom";

const Members = () => {
  return (
    <div>
      <h1>Members</h1>
      <p>This is the members page</p>
      <Link to="John Doe">John Doe</Link>
      {"  "}
      <Link to="Jahn Dae">Jahn Dae</Link>
      <Outlet />
    </div>
  );
};

export default Members;
