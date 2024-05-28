import { FaFacebook } from "react-icons/fa";

import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="shadow-2xl shadow-black mb-10 footer footer-center p-10 bg-yellow-700 text-primary-content">
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
          <FaFacebook className="text-white" />
        </Link>

        <br />
        <Link to="https://github.com/fahmidurshanto">
          {" "}
          <FaGithubSquare className="text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
