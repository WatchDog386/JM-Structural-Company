import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#0E4861] font-heading">404</h1>
        <p className="mb-8 text-xl text-gray-500">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center px-8 py-3 bg-[#0E4861] text-white font-bold rounded hover:bg-[#145a7a] transition-colors shadow-lg">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
