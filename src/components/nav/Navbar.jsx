import { Link } from "react-router-dom";
import { BiLogoSkype } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white w-full h-20 p-5 fixed top-0 left-0">
        <div className="flex justify-around items-center">
          <div className="flex items-center font-semibold">
            <BiLogoSkype size={40} />
            My Blog Site
          </div>
          <ul className="flex space-x-8 justify-center font-semibold text-lg  ">
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
          <div className="gap-3 font-semibold hidden md:flex">
            <button className="bg-[#232327] text-white rounded-md py-1 px-2">
              Login
            </button>
            <button className="bg-white text-black rounded-md py-1 px-2">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
