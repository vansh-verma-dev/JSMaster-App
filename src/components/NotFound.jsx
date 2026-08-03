import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-700 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-white">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-purple-100">
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-gray-100"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;