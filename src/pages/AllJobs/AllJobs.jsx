import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/alljobs")
      .then((response) => {
        console.log(response.data);
        setJobs(response.data);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Skill Bridge | All Jobs</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 animate__animated animate__rubberBand">
        All Jobs
      </h1>
      <input
        type="text"
        className="input input-bordered w-full mb-4"
        placeholder="Search by job title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table w-full">
        <thead>
          <tr>
            <th>Posted By</th>
            <th>Job Title</th>
            <th>Posting Date</th>
            <th>Application Deadline</th>
            <th>Salary Range</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.postedBy}</td>
              <td>{job.title}</td>
              <td>{job.postingDate}</td>
              <td>{job.deadline}</td>
              <td>{job.salaryRange}</td>
              <td>
                <Link to={`/alljobs/${job._id}`}>
                  <button className="btn btn-primary">View details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllJobs;
