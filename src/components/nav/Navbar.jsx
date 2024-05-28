import { Link } from "react-router-dom";
import { BiLogoSkype } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black text-white w-full h-20 p-5 fixed top-0 left-0">
        <div className="flex justify-around items-center">
          <div className="">
            <BiLogoSkype size={40} />
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
          <div className="flex gap-3 font-semibold">
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
