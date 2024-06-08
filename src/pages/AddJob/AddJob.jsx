import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
const AddJob = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddJob = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <h3 className="text-3xl font-semibold text-center mb-2 underline">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... px-5 text-white rounded-md">
          {user?.displayName}
        </span>{" "}
        Add your job information below
      </h3>
      <form onSubmit={handleAddJob} className=" md:grid grid-cols-2 py-32">
        {/* Job title field */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="job_title">
            Job Title
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5 shadow-md shadow-gray-500"
            type="text"
            name="job_title"
            placeholder="Job title"
            required
          />
        </div>

        {/* Job Posting Date */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="postingDate">
            Job posting date
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5 shadow-md shadow-gray-500"
            type="date"
            name="postingDate"
            required
          />
        </div>
        {/*  Application Deadline*/}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label
            className="text-xl font-semibold"
            htmlFor="applicationDeadline"
          >
            Application Deadline
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5 shadow-md shadow-gray-500"
            type="date"
            name="applicationDeadline"
            required
          />
        </div>
        {/* Salary range*/}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="salaryRange">
            Salary range
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5 shadow-md shadow-gray-500"
            type="text"
            name="salaryRange"
            placeholder="Salary Range"
            required
          />
        </div>
        {/*  Job Applicants Number
         */}
        <div className="flex flex-col w-full md:w-3/4 mx-auto ">
          <label className="text-xl font-semibold" htmlFor="total_applicants">
            Total Applicants
          </label>
          <input
            className="p-3 border border-gray-300 md:border-none  rounded-md mb-5 shadow-md shadow-gray-500"
            type="text"
            name="total_applicants"
            placeholder="Applicants number"
            required
          />
        </div>
        {/* submit button */}
        <input
          className="btn btn-outline btn-[purple] w-full md:w-3/4 mx-auto  my-5"
          type="submit"
          value="View details"
        />
      </form>
    </div>
  );
};

export default AddJob;
