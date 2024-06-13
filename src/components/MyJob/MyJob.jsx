import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJob = ({ job }) => {
  const {
    _id,
    pictureUrl,
    title,
    userName,
    category,
    salaryRange,
    description,
    postingDate,
    applicationDeadline,
    applicants,
  } = job;

  const handleDelete = () => {
    axios
      .delete(` http://localhost:3000/myJobs/${_id}`)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          // If deletion is successful, update the job list
          // You might want to update the job list in your parent component instead of here
          Swal.fire({
            icon: "success",
            title: "Job deleted successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("Job deleted successfully");
        } else {
          console.error("Failed to delete job");
        }
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <img className="w-full h-48 object-cover" src={pictureUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">
          <span className="font-bold">Posted by: </span>
          {userName}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Category: </span>
          {category}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Salary: </span>${salaryRange}
        </p>
        <p className="text-gray-600 mt-4">
          <span className="font-bold">Description: </span>
          {description}
        </p>
        <div className="mt-4">
          <p className="text-gray-500">
            <span className="font-bold">Posted on:</span> {postingDate}
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Deadline: </span>
            {applicationDeadline}
          </p>
        </div>
        <div className="mt-4">
          <span className="bg-blue-500 text-white px-2 py-1 rounded">
            Applicants: {applicants}
          </span>
        </div>
        <div className="mt-4 flex flex-col justify-start gap-5">
          <Link to={`/update/${_id}`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Update
            </button>
          </Link>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyJob;
