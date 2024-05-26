import { SiBookstack } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navLinks = (
    <div className="lg:flex">
      {/* Home, Add Book, All Books, Borrowed
Books, and Login */}
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge  hover:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge   hover:text-white">
        <NavLink to="/addAJob">Add A Job</NavLink>
      </li>
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge  hover:text-white">
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge  hover:text-white">
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
      </li>
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge  hover:text-white">
        <NavLink to="/myJobs">My Jobs</NavLink>
      </li>
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge  hover:text-white">
        <NavLink to="/login">Login</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar text-white bg-indigo-800 flex justify-between  shadow-xl mb-3 px-5">
      {/* Dropdown  for mobile devices navbar */}
      <details className="dropdown lg:hidden shadow-lg bg-transparent">
        <summary className="m-1 btn">
          <RiArrowDropDownLine className="text-3xl bg-gray-400 rounded-e-badge" />
        </summary>
        <div className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 text-yellow-800">
          {navLinks}
        </div>
      </details>
      {/* Website Logo */}
      <Link to="/" className="btn btn-ghost text-xl font-bold ">
        <SiBookstack /> Skill Bridge
      </Link>
      {/* NavLinks */}
      <div className="hidden lg:block">{navLinks}</div>
      {/* user information */}
      <div className=" flex-col items-end">
        <CgProfile className="text-4xl font-bold" />
        <p>User Name</p>
      </div>
    </div>
  );
};

export default Navbar;
