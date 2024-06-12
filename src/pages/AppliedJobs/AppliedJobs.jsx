import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useContext(AuthContext);
  console.log(appliedJobs);

  useEffect(() => {
    if (user?.email) {
      axios
        .get("http://localhost:3000/apply", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          setAppliedJobs(response.data);
          setFilteredJobs(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch applied jobs:", error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredJobs(
        appliedJobs.filter((job) => job.job_category === selectedCategory)
      );
    } else {
      setFilteredJobs(appliedJobs);
    }
  }, [selectedCategory, appliedJobs]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Helmet>
        <title>Skill Bridge | Applied Jobs</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 animate__animated animate__rubberBand">
        Applied Jobs
      </h1>
      <div className="mb-4">
        <label htmlFor="category" className="font-bold mr-2">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {Array.from(new Set(appliedJobs.map((job) => job.job_category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>
      {filteredJobs.length === 0 ? (
        <p>You have not applied for any jobs yet.</p>
      ) : (
        filteredJobs.map((job) => {
          console.log(job);
          const {
            applicants,
            bannerUrl,
            jobId,
            job_category,
            job_details,
            postedBy,
            postingDate,
            resumeLink,
            salaryRange,
            title,
          } = job;
          return (
            <div
              key={job._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden mb-4"
            >
              <div className="p-6">
                <div className="flex items-center justify-center gap-5 p-16">
                  <img
                    src={bannerUrl}
                    alt="Company Logo"
                    className="h-16 w-16 rounded-full"
                  />
                </div>
                <h2 className="text-2xl font-semibold ml-4">{title}</h2>
                <div className="mt-4">
                  <p className="text-gray-600">
                    <span className="font-bold text-black">Description: </span>
                    {job_details}
                  </p>
                </div>
                <div className="mt-4">
                  <span className="font-bold">Salary Range: </span>
                  <span>{salaryRange}</span>
                </div>
                <div className="mt-4">
                  <span className="font-bold">Application Deadline: </span>
                  <span>{new Date(job.deadline).toLocaleDateString()}</span>
                </div>
                <div className="mt-4">
                  <span className="font-bold">Category: </span>
                  <span>{job_category}</span>
                </div>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  View Job Details
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-semibold ml-4">{title}</p>
                    <p className="text-gray-600">
                      <span className="font-bold text-black">
                        Description:{" "}
                      </span>
                      {job_details}
                    </p>
                    <p>Posted by: {postedBy}</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      Salary Range: <span>{salaryRange}</span>
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AppliedJobs;
