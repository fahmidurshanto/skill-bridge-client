const MyJob = ({ job }) => {
  const {
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
      </div>
    </div>
  );
};

export default MyJob;
