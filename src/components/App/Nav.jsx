import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  return (
    <ul>
      <Link to="/home">
        <li>Home</li>
      </Link>
      <Link to="/allStudents">
        <li>All Students</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  );
}

export default Nav;
