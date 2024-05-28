import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser, user, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  //   Google Sign in function
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  // Email password Sign up function
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photo_url.value;
    const password = form.password.value;
    const user = { name, email, password, photoUrl };
    console.log(user);
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        navigate("/login");
        console.log(newUser);
        axios.post("http://localhost:3000/users", newUser).then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `<h5 className="bg-gradient-to-r from-cyan-500 to-blue-500 ...">${user?.email} is registered successfully!</h5>`,

            showConfirmButton: false,
            timer: 1500,
          });
        });
      })
      .catch((error) => {
        console.log(error);

        setError(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${
            error
              ? (error.message ===
                  "Firebase: Error (auth/email-already-in-use)." &&
                  "Email already in use") ||
                (error.message ===
                  "Firebase: Error (auth/network-request-failed)." &&
                  "Please check your network") ||
                error.message === ""
              : ""
          }`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className=" bg-orange-200">
      <Helmet>
        <title>Skill Bridge || Sign Up</title>
      </Helmet>
      <h3 className="text-4xl text-center  pt-5  font-bold">Sign Up here</h3>
      <form className="p-10  rounded-md " onSubmit={handleSignUp}>
        {/* name input field */}
        <div className="flex flex-col  items-center p-3 ">
          <input
            className="p-3 w-full md:w-1/2 text-gray-500 shadow-md shadow-gray-500  rounded-md"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        {/* email input field */}
        <div className="flex flex-col  items-center p-3 ">
          <input
            className="p-3 w-full md:w-1/2 text-gray-500 shadow-md shadow-gray-500  rounded-md"
            type="text"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        {/* Photo url input field */}
        <div className="flex flex-col  items-center p-3  ">
          <input
            className="p-3 w-full md:w-1/2 text-gray-500 shadow-md shadow-gray-500  rounded-md"
            type="text"
            name="photo_url"
            placeholder="Photo Url"
            required
          />
        </div>
        {/* password input field */}
        <div className="flex flex-col  items-center p-3  ">
          <input
            className="p-3 w-full md:w-1/2 text-gray-500 shadow-md shadow-gray-500  rounded-md"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <p
            className={`${
              error ? "text-red-500" : "text-green-600"
            } text-center my-4`}
          >
            {error
              ? (error.message ===
                  "Firebase: Error (auth/email-already-in-use)." &&
                  "Email already in use") ||
                (error.message ===
                  "Firebase: Error (auth/network-request-failed)." &&
                  "Please check your network") ||
                error.message === ""
              : ""}
          </p>
        </div>
        <div className="w-full md:w-1/2 mx-auto">
          <input
            className="py-3 w-full  font-bold btn-outline text-xl rounded-md"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>

      <p className="text-center pb-5">
        Already have an account?{" "}
        <Link to="/login" className="text-violet-500 font-bold">
          Login
        </Link>
      </p>
      <p className="text-center my-2">Or</p>
      <div className="flex flex-col gap-2 justify-center items-center pb-6">
        <p onClick={handleGoogleSignUp} className="btn btn-outline">
          Sign Up with <FcGoogle className="text-4xl font-bold" />
        </p>
      </div>
    </div>
  );
};

export default SignUp;
