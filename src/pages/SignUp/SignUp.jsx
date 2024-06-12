import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser, googleSignIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  //   Google Sign in function
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome ${res?.user?.displayName}. You signed up successfully`,
        });
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
    const photo = form.photo_url.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
        console.log(user);
        axios.post("http://localhost:3000/users", user).then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `<h5 className="bg-gradient-to-r from-cyan-500 to-blue-500 ...">${user?.displayName} is registered successfully!</h5>`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
        navigate("/login");
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
                (error.message ===
                  "Firebase: Password should be at least 6 characters (auth/weak-password)." &&
                  "Password should be at least 6 characters") ||
                error.message === ""
              : ""
          }`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Skill Bridge | Sign Up</title>
      </Helmet>
      <h3 className="text-4xl text-center  pt-5  font-bold my-10 underline  animate__animated animate__heartBeat">
        Sign Up here
      </h3>
      <div className="grid md:grid-cols-2">
        <img
          className="p-10 hidden md:block"
          src="https://i.ibb.co/bLjx2j1/undraw-undraw-undraw-undraw-sign-up-ln1s-1-s4bc-1-ee41-1-kf4d.jpg"
          alt=""
        />
        <form className="p-10  rounded-md " onSubmit={handleSignUp}>
          {/* name input field */}
          <div className="flex flex-col text-start  items-start p-3 ">
            <legend className="font-semibold">Name</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          {/* email input field */}
          <div className="flex flex-col  items-start p-3 ">
            <legend className="font-semibold">Email</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          {/* Photo url input field */}
          <div className="flex flex-col  items-start p-3  ">
            <legend className="font-semibold">Photo URL</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="text"
              name="photo_url"
              placeholder="Photo Url"
              required
            />
          </div>
          {/* password input field */}
          <div className="flex flex-col  items-start p-3  ">
            <legend className="font-semibold">Password</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
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
                  (error.message ===
                    "Firebase: Password should be at least 6 characters (auth/weak-password)." &&
                    "Password should be at least 6 characters") ||
                  error.message === ""
                : ""}
            </p>
          </div>
          <div className="w-full  flex flex-col items-start p-3">
            <input
              className="py-3 w-full  font-bold btn-outline text-xl rounded-md"
              type="submit"
              value="Sign up"
            />
          </div>
        </form>
      </div>

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
