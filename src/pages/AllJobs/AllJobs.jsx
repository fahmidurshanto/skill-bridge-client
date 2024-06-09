import axios from "axios";
import React, { useState, useEffect } from "react";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy data for demonstration purposes
  useEffect(() => {
    axios
      .get("http://localhost:3000/allJobs")
      .then((data) => setJobs(data.data))
      .catch((error) => console.log(error.message));
    // setJobs([
    //   {
    //     id: 1,
    //     postedBy: "John Doe",
    //     title: "Frontend Developer",
    //     postingDate: "2023-06-01",
    //     deadline: "2023-07-01",
    //     salaryRange: "$60,000 - $80,000",
    //   },
    //   {
    //     id: 2,
    //     postedBy: "Jane Smith",
    //     title: "Backend Developer",
    //     postingDate: "2023-05-15",
    //     deadline: "2023-06-15",
    //     salaryRange: "$70,000 - $90,000",
    //   },
    // ]);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    console.log(job);
    job?.jobs[(0, 1, 2, 4)]?.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center my-10">All Jobs</h2>
      <input
        type="text"
        placeholder="Search by Job Title"
        className="input input-bordered w-full mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary Range</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.postedBy}</td>
                <td>{job.title}</td>
                <td>{job.postingDate}</td>
                <td>{job.deadline}</td>
                <td>{job.salaryRange}</td>
                <td>
                  <button className="btn btn-primary">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
