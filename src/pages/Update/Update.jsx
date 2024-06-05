import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import auth from "../../Authentication/firebase.config";

const Update = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  console.log(auth.currentUser?.displayName);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    console.log(user);
  };
  return (
    <div>
      <Helmet>
        <title>Skill Bridge || Update</title>
      </Helmet>
      <h3 className="text-4xl text-center  pt-5  font-bold underline">
        Update your profile
      </h3>
      <div className="grid md:grid-cols-2">
        <form className="p-10  rounded-md " onSubmit={handleUpdate}>
          {/* name input field */}
          <div className="flex flex-col items-start p-3 ">
            <legend className="font-semibold">Name</legend>
            <input
              className="p-3 w-full text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.displayName || ""}
            />
          </div>
          {/* email input field */}
          <div className="flex flex-col items-start p-3 ">
            <legend className="font-semibold">Email</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={user?.email || ""}
              required
            />
          </div>
          {/* Photo url input field */}
          <div className=" p-3  flex flex-col items-start">
            <legend className=" font-semibold">Photo URL</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="text"
              name="photo_url"
              placeholder="Photo Url"
              defaultValue={user?.photoURL || ""}
              required
            />
          </div>
          {/* password input field */}
          <div className=" p-3 flex flex-col items-start ">
            <legend className=" font-semibold">Password</legend>
            <input
              className="p-3 w-full  text-gray-500 shadow-md shadow-gray-500  rounded-md"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="w-full  flex flex-col items-start p-3">
            <input
              className="py-3 w-full  font-bold btn-outline text-xl rounded-md"
              type="submit"
              value="Update"
            />
          </div>
        </form>

        <img
          className="p-10 my-10 hidden md:block"
          src="https://i.ibb.co/vht4jyb/undraw-insert-block-re-4t4l.jpg"
          alt=""
        />
        {/* <p className="font-semibold p-10 my-10 text-gray-500">
          Welcome to your Profile Update page! Here, you can easily manage and
          update your personal information to ensure your profile remains
          current and accurate. Whether you need to change your contact details,
          update your bio, or refresh your profile picture, this page provides a
          user-friendly interface to make these adjustments hassle-free. Keeping
          your profile up-to-date helps you stay connected and ensures that
          others have the most accurate information about you. Please take a
          moment to review and update your details below. Your privacy and
          security are our top priorities, so rest assured that your information
          is protected.
        </p> */}
      </div>
    </div>
  );
};

export default Update;
