import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const JobDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [resumeLink, setResumeLink] = useState("");
  const job = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    applicants,
    bannerUrl,
    salaryRange,
    _id,
    deadline,
    job_category,
    job_details,
    postingDate,
    postedBy = user?.displayName,
    title,
  } = job;

  const handleApply = (e) => {
    e.preventDefault();
    const application = {
      user: { name: user?.displayName, email: user?.email },
      jobId: _id,
      resumeLink: resumeLink,
      applicants: applicants,
      bannerUrl: bannerUrl,
      job_details: job_details,
      salaryRange: salaryRange,
      postedBy: postedBy,
      _id: _id,
      title: title,
      postingDate: postingDate,
      job_category: job_category,
    };

    axios
      .post("http://localhost:3000/apply", application, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Application submitted successfully:", response.data);
        Swal.fire({
          title: "Application submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // EmailJS integration
        emailjs
          .send(
            "service_dwv7bll",
            "template_5ku2num",
            {
              job_title: title,
              user_name: user?.displayName,
              user_email: user?.email,
              resume_link: resumeLink,
            },
            "ta1jOsUdFh0lK-tWQ"
          )
          .then(
            (result) => {
              console.log("Email sent successfully:", result.text);
              Swal.fire({
                title: "Application and Email sent successfully!",
                icon: "success",
                confirmButtonText: "OK",
              });
            },
            (error) => {
              console.error("Error sending email:", error.text);
              Swal.fire({
                title: "Application submitted, but email failed!",
                text: `Email sending failed: ${error.text}`,
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          );

        setShowModal(false);
      })
      .catch((error) => {
        console.error("Failed to submit application:", error);
        Swal.fire({
          title: "Failed to submit application!",
          text: `Failed to submit application: ${
            error.response?.data.message || error?.message
          }`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const isEmployer = job?.postedBy === user.email;
  const isDeadlinePassed = Date.now() > new Date(deadline).getTime();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={bannerUrl}
          alt="Job Banner"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center">
            <img
              src={job?.companyLogoUrl}
              alt="Company Logo"
              className="h-16 w-16 rounded-full"
            />
            <h2 className="text-2xl font-semibold ml-4">{job?.title}</h2>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold text-black">Description: </span>
              {job_details}
            </p>
          </div>
          <div className="mt-4">
            <span className="font-bold">Salary Range: </span>
            <span>{salaryRange}</span>
          </div>
          <div className="mt-4">
            <span className="font-bold">Number of Applicants: </span>
            <span>{applicants}</span>
          </div>
          {!isEmployer && !isDeadlinePassed && (
            <div className="mt-6">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Apply Now
              </button>
            </div>
          )}
          {isDeadlinePassed && (
            <p className="text-red-500 mt-4">Application deadline has passed</p>
          )}
          {isEmployer && (
            <p className="text-red-500 mt-4">
              You cannot apply for your own job
            </p>
          )}
        </div>
      </div>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Submit Application</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Name:</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={user?.displayName}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email:</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={user?.email}
                  readOnly
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Resume Link:</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={resumeLink}
                  onChange={(e) => setResumeLink(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleApply}>
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
