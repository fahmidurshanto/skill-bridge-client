import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios
        .get("http://localhost:3000/apply", {
          withCredentials: true,
        })
        .then((response) => {
          setAppliedJobs(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch applied jobs:", error);
        });
    }
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Applied Jobs</h1>
      {appliedJobs.length === 0 ? (
        <p>You have not applied for any jobs yet.</p>
      ) : (
        appliedJobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden mb-4"
          >
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={job?.companyLogoUrl}
                  alt="Company Logo"
                  className="h-16 w-16 rounded-full"
                />
                <h2 className="text-2xl font-semibold ml-4">{job?.title}</h2>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  <span className="font-bold text-black">Description: </span>
                  {job.job_details}
                </p>
              </div>
              <div className="mt-4">
                <span className="font-bold">Salary Range: </span>
                <span>{job.salaryRange}</span>
              </div>
              <div className="mt-4">
                <span className="font-bold">Application Deadline: </span>
                <span>{new Date(job.deadline).toLocaleDateString()}</span>
              </div>
              <Link
                to={`/jobDetails/${job._id}`}
                className="btn btn-primary mt-4"
              >
                View Job Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AppliedJobs;
