import { SiBookstack } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { RxDropdownMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navLinks = user ? (
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
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-md hover:text-white">
        <NavLink to="/myJobs">My Jobs</NavLink>
      </li>
      <li
        onClick={logout}
        className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-e-badge  hover:text-white cursor-pointer"
      >
        Logout
      </li>
    </div>
  ) : (
    <div className="lg:flex">
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-md hover:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="list-none font-semibold hover:bg-yellow-800 mx-3 p-1 rounded-md  hover:text-white">
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
      <li className="list-none font-semibold bg-green-600 hover:bg-yellow-800 mx-3 p-1 rounded-md px-3  hover:text-white">
        <NavLink to="/login">Login</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar text-white bg-indigo-800 flex justify-between  shadow-xl mb-3 px-5">
      {/* Dropdown  for mobile devices navbar */}
      <details className="dropdown lg:hidden shadow-lg bg-transparent">
        <summary className="m-1 btn border-none hover:text-black bg-purple-800 text-white">
          <RxDropdownMenu className="text-2xl rounded-md" />
        </summary>
        <div className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 text-black">
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
        {user ? (
          <img
            className="tooltip"
            data-tip={`${user?.displayName}`}
            src={
              user?.photoURL ? (
                user?.photoURL
              ) : (
                <CgProfile className="text-4xl font-bold" />
              )
            }
          />
        ) : (
          <CgProfile className="text-4xl font-bold" />
        )}
        <p>User Name</p>
      </div>
    </div>
  );
};

export default Navbar;
