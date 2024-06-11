// JobDetails.jsx
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={job.bannerUrl}
          alt="Job Banner"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center">
            <img
              src={job.companyLogoUrl}
              alt="Company Logo"
              className="h-16 w-16 rounded-full"
            />
            <h2 className="text-2xl font-semibold ml-4">{job.title}</h2>
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
            <span className="font-bold">Number of Applicants: </span>
            <span>{job.applicants}</span>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
