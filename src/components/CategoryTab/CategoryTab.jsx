import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ApiContext } from "../../ApiProvider/ApiProvider";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
const CategoryTab = () => {
  const { onSiteJobs, jobs, remoteJobs, hybridJobs, partTimeJobs, allJobs } =
    useContext(ApiContext);
  const { user } = useContext(AuthContext);

  console.log(onSiteJobs, jobs, remoteJobs, hybridJobs, partTimeJobs, allJobs);
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
          {onSiteJobs.map((onsiteJob) => (
            <div key={onsiteJob._id} className="flex border">
              <div className="p-10">
                <h1 className="text-2xl">Job Title: {onsiteJob?.title}</h1>
                <p className="text-gray-500">
                  Category: {onsiteJob?.job_category}
                </p>
                <p className="text-gray-500">Posted By:</p>
                <p className="text-gray-500">
                  Posting Date: {onsiteJob?.postingDate}
                </p>
                <p className="text-gray-500">
                  Application Deadline: {onsiteJob?.deadline}
                </p>
                <p className="text-gray-500">
                  Salary range: {onsiteJob?.salaryRange}
                </p>
                <p className="text-gray-500">
                  Total Applicants: {onsiteJob?.applicants}
                </p>
                <button className="btn btn-outline ">
                  {onsiteJob?.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </TabPanel>

        {/* Remote jobs */}
        <TabPanel className="border">
          {remoteJobs.map((remoteJob) => (
            <div key={remoteJob._id} className="p-10 border">
              <h1 className="text-2xl">Job Title: {remoteJob.title}</h1>
              <p className="text-gray-500">
                Category: {remoteJob?.job_category}
              </p>
              <p className="text-gray-500">Posted By: </p>
              <p className="text-gray-500">
                Posting Date: {remoteJob?.postingDate}
              </p>
              <p className="text-gray-500">
                Application Deadline: {remoteJob?.deadline}
              </p>
              <p className="text-gray-500">
                Salary range: {remoteJob?.salaryRange}
              </p>
              <p className="text-gray-500">
                Total Applicants: {remoteJob?.applicants}
              </p>
              <button className="btn btn-outline ">
                {remoteJob?.viewDetails}
              </button>
            </div>
          ))}
        </TabPanel>

        {/* Hybrid jobs */}
        <TabPanel className="border">
          {hybridJobs.map((hybridJob) => (
            <div key={hybridJob._id} className="p-10 border">
              <h1 className="text-2xl">Job Title: {hybridJob?.title}</h1>
              <p className="text-gray-500">
                Category: {hybridJob?.job_category}
              </p>
              <p className="text-gray-500">Posted By: </p>
              <p className="text-gray-500">
                Posting Date: {hybridJob?.postingDate}
              </p>
              <p className="text-gray-500">
                Application Deadline: {hybridJob?.deadline}
              </p>
              <p className="text-gray-500">
                Salary range: {hybridJob?.salaryRange}
              </p>
              <p className="text-gray-500">
                Total Applicants: {hybridJob?.applicants}
              </p>
              <button className="btn btn-outline ">
                {hybridJob?.viewDetails}
              </button>
            </div>
          ))}
        </TabPanel>
        {/* Part time jobs */}
        <TabPanel className="border">
          {partTimeJobs.map((partTimeJob) => (
            <div key={partTimeJob._id} className="p-10 border">
              <h1 className="text-2xl">Job Title: {partTimeJob.title}</h1>
              <p className="text-gray-500">
                Category: {partTimeJob?.job_category}
              </p>
              <p className="text-gray-500">Posted By: </p>
              <p className="text-gray-500">
                Posting Date: {partTimeJob?.postingDate}
              </p>
              <p className="text-gray-500">
                Application Deadline: {partTimeJob?.deadline}
              </p>
              <p className="text-gray-500">
                Salary range: {partTimeJob?.salaryRange}
              </p>
              <p className="text-gray-500">
                Total Applicants: {partTimeJob?.applicants}
              </p>
              <button className="btn btn-outline ">
                {partTimeJob?.viewDetails}
              </button>
            </div>
          ))}
        </TabPanel>
        {/* All jobs */}
        <TabPanel className="border">
          {allJobs.map((job) => (
            <div key={job._id} className="p-10 border">
              <h1 className="text-2xl">Job Title: {job.title}</h1>
              <p className="text-gray-500">Category: {job?.job_category}</p>
              <p className="text-gray-500">Posted By: </p>
              <p className="text-gray-500">Posting Date: {job?.postingDate}</p>
              <p className="text-gray-500">
                Application Deadline: {job?.deadline}
              </p>
              <p className="text-gray-500">Salary range: {job?.salaryRange}</p>
              <p className="text-gray-500">
                Total Applicants: {job?.applicants}
              </p>
              <button className="btn btn-outline ">{job?.viewDetails}</button>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
