import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
import axios from "axios";
import Swal from "sweetalert2";
registerLocale("es", es);

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const bannerURL = form.bannerURL.value;
    const jobTitle = form.title.value;
    const userName = form.userName.value;
    const category = form.category.value;
    const salaryRange = form.salary.value;
    const jobDescription = form.description.value;
    const postingDate = startDate.toLocaleDateString();
    const deadline = form.deadline.value;
    const totalApplicants = 0;

    const newJob = {
      pictureUrl: bannerURL,
      title: jobTitle,
      userName,
      category,
      salaryRange,
      description: jobDescription,
      postingDate,
      applicationDeadline: deadline,
      applicants: totalApplicants,
    };

    axios
      .post("http://localhost:3000/myjobs", newJob)
      .then((response) => {
        const addedJob = response.data;
        if (addedJob.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error adding job:", error);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <img
        src="https://i.ibb.co/mNypSBw/undraw-add-information-j2wg.png"
        className="w-1/2 hidden md:block"
      />
      <div>
        <h3 className="text-3xl font-bold underline my-10">
          Add your Job here
        </h3>
        <form className="grid grid-cols-2 gap-8" onSubmit={handleAddJob}>
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
              defaultValue={0}
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
            />
          </div>
          {/* Submit button */}
          <input
            className="p-3 shadow-sm shadow-gray-500 my-2 rounded-md col-span-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
