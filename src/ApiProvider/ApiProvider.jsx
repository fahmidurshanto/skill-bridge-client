/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext(null);

const ApiProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [onSiteJobs, setOnSiteJobs] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [hybridJobs, setHybridJobs] = useState([]);
  const [partTimeJobs, setPartTimeJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  //   onsite jobs
  useEffect(() => {
    axios
      .get("http://localhost:3000/on_site_jobs")
      .then((res) => setOnSiteJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);
  //   remote jobs
  useEffect(() => {
    axios
      .get("http://localhost:3000/remote_jobs")
      .then((res) => setRemoteJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  //   hybrid jobs
  useEffect(() => {
    axios
      .get("http://localhost:3000/hybrid_jobs")
      .then((res) => setHybridJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  //   part time jobs
  useEffect(() => {
    axios
      .get("http://localhost:3000/part_time_jobs")
      .then((res) => setPartTimeJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  // all jobs
  useEffect(() => {
    axios
      .get("http://localhost:3000/jobs")
      .then((res) => {
        setJobs(res.data);
        const jobs = res.data.jobs;
        setAllJobs(jobs);
      })
      .catch((err) => console.log(err));
  }, []);

  const jobsInfo = {
    jobs,
    onSiteJobs,
    remoteJobs,
    hybridJobs,
    partTimeJobs,
    allJobs,
  };
  return <ApiContext.Provider value={jobsInfo}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
