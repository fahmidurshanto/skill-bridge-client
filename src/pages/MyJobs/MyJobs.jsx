import axios from "axios";
import { useEffect, useState } from "react";
import MyJob from "../../components/MyJob/MyJob";
import { Helmet } from "react-helmet";

const MyJobs = () => {
  const [myJobs, setMyJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/myJobs").then((response) => {
      setMyJobs(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Skill Bridge | My Jobs</title>
      </Helmet>
      <h1 className="text-3xl text-center my-10 font-bold animate__animated animate__rubberBand">
        Your Jobs
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
        {myJobs.map((job) => (
          <MyJob key={job._id} job={job}></MyJob>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
