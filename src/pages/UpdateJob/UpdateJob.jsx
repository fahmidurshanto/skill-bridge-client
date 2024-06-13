import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const {
    applicants,
    applicationDeadline,
    category,
    description,
    pictureUrl,
    postingDate,
    salaryRange,
    title,
    userName,
    _id,
  } = job;

  const handleUpdateJob = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bannerURL = form.bannerURL.value;
    const jobTitle = form.title.value;
    const userName = form.userName.value;
    const category = form.category.value;
    const salaryRange = form.salary.value;
    const jobDescription = form.description.value;
    const postedBy = user?.displayName;
    const postingDate = startDate.toLocaleDateString();
    const deadline = form.deadline.value;
    const totalApplicants = 0;

    const newJob = {
      pictureUrl: bannerURL,
      title: jobTitle,
      userName,
      category,
      salaryRange,
      postedBy,
      description: jobDescription,
      postingDate,
      applicationDeadline: deadline,
      applicants: totalApplicants,
    };

    axios
      .put(
        ` https://skill-bridge-server.onrender.com/myjobs/${_id}`, // URL
        newJob, // Data to be sent
        {
          withCredentials: true, // Include credentials
          headers: {
            Authorization: `Bearer ${user?.token}`, // Include token if necessary
          },
        }
      )
      .then((response) => {
        const updatedJob = response.data;
        console.log(updatedJob);
        if (updatedJob.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error?.message,
          confirmButtonText: "Ok",
        });
        console.error("Error updating job:", error?.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Skill Bridge | Update your Job</title>
      </Helmet>
      <img
        src="https://i.ibb.co/mNypSBw/undraw-add-information-j2wg.png"
        className="w-1/2 hidden md:block"
      />
      <div>
        <h3 className="text-3xl font-bold underline my-10 animate__animated animate__rubberBand">
          Update your Job information
        </h3>
        <form className="grid grid-cols-2 gap-8" onSubmit={handleUpdateJob}>
          {/* Banner URL input field */}
          <div className="w-full">
            <label htmlFor="bannerURL" className="font-bold">
              Banner URL
            </label>
            <br />
            <input
              placeholder="Banner URL"
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md w-full"
              type="text"
              name="bannerURL"
              defaultValue={pictureUrl}
            />
          </div>
          {/* Job TItie input field */}
          <div>
            <label htmlFor="title" className="font-bold">
              Job title
            </label>
            <br />
            <input
              placeholder="Job title"
              defaultValue={title}
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              name="title"
            />
          </div>
          {/* user name input field */}
          <div>
            <label htmlFor="userName" className="font-bold">
              User name
            </label>
            <br />
            <input
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              type="text"
              name="userName"
              value={user ? user?.displayName : "Unknown User"}
            />
          </div>
          {/* Job Category input field */}
          <div>
            <label htmlFor="category" className="font-bold">
              Job Category
            </label>
            <br />
            <input
              placeholder="Job category"
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              type="text"
              name="category"
              defaultValue={category}
            />
          </div>
          {/* Salary range field */}
          <div>
            <label htmlFor="salary" className=" font-bold">
              Salary range
            </label>
            <br />
            <input
              placeholder="Salary range"
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              type="text"
              name="salary"
              defaultValue={salaryRange}
            />
          </div>

          {/* Application deadline field */}
          <div>
            <label htmlFor="deadline" className=" font-bold">
              Application deadline
            </label>
            <br />
            <DatePicker
              name="deadline"
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              setDefaultLocale="es"
            />
          </div>
          {/* Total Job Applicants */}
          <div>
            <label htmlFor="applicants" className="font-bold">
              Total applicants
            </label>
            <br />
            <input
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              type="number"
              name="applicants"
              defaultValue={applicants}
              readOnly
            />
          </div>
          {/* Job description field */}
          <div>
            <label htmlFor="description" className=" font-bold">
              Job description
            </label>
            <br />
            <textarea
              placeholder="Job description"
              className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md"
              type="text"
              name="description"
              defaultValue={description}
            />
          </div>
          {/* Submit button */}
          <input
            className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md col-span-2"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
