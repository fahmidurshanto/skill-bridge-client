import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ApiContext } from "../../ApiProvider/ApiProvider";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
const CategoryTab = () => {
  const { onSiteJobs, jobs, remoteJobs, hybridJobs, partTimeJobs } =
    useContext(ApiContext);
  const { user } = useContext(AuthContext);

  return (
    // Tabs Lists
    <div className="p-8">
      <h3 className="text-3xl font-semibold text-center">Available Jobs</h3>
      <Tabs className="p-10">
        <TabList>
          {jobs.map((job, idx) => (
            <Tab key={idx}>{job.category}</Tab>
          ))}
          <Tab>All Jobs</Tab>
        </TabList>

        {/* Onsite jobs  */}
        <TabPanel className="border">
          {onSiteJobs.map((onsiteJob) =>
            onsiteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="flex border">
                  <div className="p-10">
                    <h1 className="text-2xl">Job Title: {job?.title}</h1>
                    <p className="text-gray-500">
                      Category: {job?.job_category}
                    </p>
                    <p className="text-gray-500">Posted By:</p>
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
        <TabPanel className="border">
          {remoteJobs.map((remoteJob) =>
            remoteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10 border">
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
        <TabPanel className="border">
          {hybridJobs.map((hybridJob) =>
            hybridJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10 border">
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
        <TabPanel className="border">
          {partTimeJobs.map((partTimeJob) =>
            partTimeJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10 border">
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
        <TabPanel className="border">
          {remoteJobs.map((remoteJob) =>
            remoteJob.jobs.map((job, idx) => {
              return (
                <div key={idx} className="p-10 border">
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
