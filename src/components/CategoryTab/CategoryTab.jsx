import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ApiContext } from "../../ApiProvider/ApiProvider";
const CategoryTab = () => {
  const { onSiteJobs, jobs, remoteJobs, hybridJobs, partTimeJobs } =
    useContext(ApiContext);

  return (
    <div className="p-8">
      <Tabs className="p-10">
        <TabList>
          {jobs.map((job, idx) => (
            <Tab key={idx}>{job.category}</Tab>
          ))}
          <Tab>All Jobs</Tab>
        </TabList>

        {/* Onsite jobs  */}
        <TabPanel className="grid grid-cols-3">
          {onSiteJobs.map((onsiteJob) =>
            onsiteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="flex">
                  <div className="p-10">
                    <h1 className="text-2xl">Job Title: {job.title}</h1>
                    <p className="text-gray-500">
                      Category: {job?.job_category}
                    </p>
                    <p className="text-gray-500">Posted By: </p>
                    <p className="text-gray-500">
                      Posting Date: {job?.postingDate}
                    </p>
                    <p className="text-gray-500">
                      Application Deadline: {job?.deadline}
                    </p>
                    <p className="text-gray-500">
                      Salary range: {job?.salaryRange}
                    </p>
                    <p className="text-gray-500">
                      Total Applicants: {job?.applicants}
                    </p>
                    <button className="btn btn-outline ">
                      {job?.viewDetails}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </TabPanel>

        {/* Remote jobs */}
        <TabPanel>
          {remoteJobs.map((remoteJob) =>
            remoteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
                </div>
              );
            })
          )}
        </TabPanel>

        {/* Hybrid jobs */}
        <TabPanel>
          {hybridJobs.map((hybridJob) =>
            hybridJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
                </div>
              );
            })
          )}
        </TabPanel>
        {/* Part time jobs */}
        <TabPanel>
          {partTimeJobs.map((partTimeJob) =>
            partTimeJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
                </div>
              );
            })
          )}
        </TabPanel>
        <TabPanel>
          {remoteJobs.map((remoteJob) =>
            remoteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
                </div>
              );
            })
          )}

          {onSiteJobs.map((onsiteJob) =>
            onsiteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
                </div>
              );
            })
          )}
          {hybridJobs.map((hybridJob) =>
            hybridJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
                </div>
              );
            })
          )}
          {partTimeJobs.map((partTimeJob) =>
            partTimeJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10">
                  <h1 className="text-2xl">Job Title: {job.title}</h1>
                  <p className="text-gray-500">Category: {job?.job_category}</p>
                  <p className="text-gray-500">Posted By: </p>
                  <p className="text-gray-500">
                    Posting Date: {job?.postingDate}
                  </p>
                  <p className="text-gray-500">
                    Application Deadline: {job?.deadline}
                  </p>
                  <p className="text-gray-500">
                    Salary range: {job?.salaryRange}
                  </p>
                  <p className="text-gray-500">
                    Total Applicants: {job?.applicants}
                  </p>
                  <button className="btn btn-outline ">
                    {job?.viewDetails}
                  </button>
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
