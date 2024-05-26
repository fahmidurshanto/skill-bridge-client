const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
  };

  return (
    <div className="h-[80vh] bg-orange-200">
      <h3 className="text-4xl text-center  mb-5  font-semibold">Login here</h3>
      <form className="p-10  rounded-md " onSubmit={handleLogin}>
        {/* email input field */}
        <div className="flex flex-col  items-center p-3">
          <input
            className="p-3 w-full md:w-1/2 text-gray-500 rounded-md"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        {/* email input field */}
        <div className="flex flex-col  items-center p-3 ">
          <input
            className="p-3 w-full md:w-1/2 text-gray-500 rounded-md"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="w-full md:w-1/2 mx-auto">
          <input
            className="py-3 w-full  font-bold btn-outline text-xl rounded-md"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
