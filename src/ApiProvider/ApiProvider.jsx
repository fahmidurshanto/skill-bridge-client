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
  const [categoryAllJobs, setCategoryAllJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  //   onsite jobs
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/on_site_jobs")
      .then((res) => setOnSiteJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);
  //   remote jobs
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/remote_jobs")
      .then((res) => setRemoteJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  //   hybrid jobs
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/hybrid_jobs")
      .then((res) => setHybridJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  //   part time jobs
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/part_time_jobs")
      .then((res) => setPartTimeJobs(res.data))
      .catch((error) => console.log(error.message));
  }, []);

  // all jobs from category tab
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/jobs")
      .then((res) => {
        setJobs(res.data);
        const jobs = res.data.jobs;
        setCategoryAllJobs(jobs);
      })
      .catch((err) => console.log(err));
  }, []);

  // All jobs api
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/allJobs")
      .then((res) => setAllJobs(res.data))
      .catch((error) => console.log(error.message));
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
