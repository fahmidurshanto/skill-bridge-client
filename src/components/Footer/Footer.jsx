import { FaFacebook, FaGithub } from "react-icons/fa";

import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="shadow-xl shadow-black mb-10 footer footer-center p-10 bg-yellow-700 text-primary-content">
      <aside>
        <img
          src="https://i.ibb.co/prGqXLn/skill-bridge-logo.jpg"
          className="rounded-2xl"
        />
        <p className="font-bold">
          Skill Bridge <br />
          Providing reliable Job solution since 2024.
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <div className="text-3xl flex justify-center items-center">
        <Link to="https://www.facebook.com/mdfahmidurrahman.shanto.9/">
          <FaFacebook className="text-sky-500 bg-white p-1 rounded-full" />
        </Link>

        <br />
        <Link to="https://github.com/fahmidurshanto">
          {" "}
          <FaGithub className="text-white bg-black p-1" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
