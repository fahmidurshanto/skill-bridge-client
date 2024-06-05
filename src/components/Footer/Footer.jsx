import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="shadow-xl shadow-gray-400 mb-10 p-10 bg-yellow-700 text-center">
      <aside>
        <img
          src="https://i.ibb.co/prGqXLn/skill-bridge-logo.jpg"
          className="rounded-2xl mx-auto my-2"
        />
        <p className="font-bold">
          Skill Bridge <br />
          Providing reliable Job solution since 2024.
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <div className="text-3xl flex justify-center items-center gap-3 my-4">
        <Link to="https://www.facebook.com/mdfahmidurrahman.shanto.9/">
          <FaFacebook className="text-sky-500 bg-white p-1 rounded-full" />
        </Link>

        <br />
        <Link to="https://github.com/fahmidurshanto">
          {" "}
          <FaGithub className="text-white bg-black p-1 rounded-md" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
