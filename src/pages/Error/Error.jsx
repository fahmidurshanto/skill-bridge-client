import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Helmet>
        <title>Skill Bridge | Error</title>
      </Helmet>
      <div className="text-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-4">
            Oops! The page you are looking for does not exist.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
