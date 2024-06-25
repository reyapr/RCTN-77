import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      <Link to="me">About Me</Link> {"  "}
      <Link to="company">About Company</Link>
      <Outlet />
    </div>
  );
};

export default About;
