import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState(null);
  const { user, googleSignIn, login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  //   Google Sign in function
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((res) => {
        if (loading) {
          return <span className="loading loading-dots loading-lg"></span>;
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res?.user?.displayName} logged in successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    login(email, password)
      .then((res) => {
        if (loading) {
          return <span className="loading loading-dots loading-lg"></span>;
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res?.user?.email} in successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        setError(err?.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            `${
              error?.message === "Firebase: Error (auth/invalid-credential)."
            }` && "Invalid Email/ Password, Please check your  credentials",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Skill Bridge || Login</title>
      </Helmet>
      {user ? (
        <h2 className="flex justify-center items-center h-[70vh] text-3xl text-purple-600">
          Logged In
          <span className="font-bold ml-2">{user?.email}</span>
        </h2>
      ) : (
        <div className="">
          <h3 className="text-4xl text-center  mb-5 pt-5 font-bold underline">
            Login here
          </h3>
          <div className="grid md:grid-cols-2">
            <img
              className="p-10 my-10 hidden md:block"
              src="https://i.ibb.co/8P53FdH/undraw-Login-re-4vu2.jpg"
              alt="login"
            />
            <form className="p-10  rounded-md mt-16 " onSubmit={handleLogin}>
              {/* email input field */}
              <div className="flex flex-col  items-start p-3">
                <legend className="font-semibold">Email</legend>
                <input
                  className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              {/* email input field */}
              <div className="flex flex-col  items-start p-3 ">
                <legend className="font-semibold">Password</legend>
                <input
                  className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-full  mx-auto">
                <input
                  className="py-3 px-0 w-full  font-bold btn-outline text-xl rounded-md"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <p className="text-center">
            New to Skill Bridge?{" "}
            <Link to="/signUp" className="text-violet-500 font-bold">
              Sign Up
            </Link>{" "}
            here.
          </p>
          <p className="text-center my-2">Or</p>
          <div className="flex flex-col gap-2 justify-center items-center mb-10">
            <p onClick={handleGoogleSignUp} className="btn btn-outline">
              Sign In with <FcGoogle className="text-4xl font-bold" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
