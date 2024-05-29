import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ApiContext } from "../../ApiProvider/ApiProvider";
const CategoryTab = () => {
  const { onSiteJobs, jobs, remoteJobs, hybridJobs, partTimeJobs } =
    useContext(ApiContext);
  console.log(jobs.length);
  return (
    <div className="p-8">
      <Tabs>
        <TabList>
          {jobs.map((job) => (
            <Tab key={job._id}>{job.category}</Tab>
          ))}
          <Tab>All Jobs</Tab>
        </TabList>

        {/* Onsite jobs  */}
        <TabPanel>
          {onSiteJobs.map((onsiteJob) =>
            onsiteJob.jobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })
          )}
        </TabPanel>

        {/* Remote jobs */}
        <TabPanel>
          {remoteJobs.map((remoteJob) =>
            remoteJob.jobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })
          )}
        </TabPanel>

        {/* Hybrid jobs */}
        <TabPanel>
          {hybridJobs.map((hybridJob) =>
            hybridJob.jobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })
          )}
        </TabPanel>
        {/* Part time jobs */}
        <TabPanel>
          {partTimeJobs.map((partTimeJob) =>
            partTimeJob.jobs.map((job) => {
              return (
                <div key={job._id}>
                  <h1>{job.title}</h1>
                </div>
              );
            })
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
