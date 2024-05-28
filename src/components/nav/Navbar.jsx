import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white">
        <ul className="flex space-x-5 justify-center font-bold text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portforlio</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
