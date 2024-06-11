import axios from "axios";
import { useEffect, useState } from "react";
import MyJob from "../../components/MyJob/MyJob";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/myJobs").then((response) => {
      setMyJobs(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center underline my-10 font-bold">
        Your Jobs
      </h1>
      <div className="grid grid-cols-4 gap-7">
        {myJobs.map((job) => (
          <MyJob key={job._id} job={job}></MyJob>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
