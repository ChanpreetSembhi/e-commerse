import { Link } from "react-router-dom";
import Error_404 from "../assets/404.png";
export default function Error() {
  return (
    <section className="py-20">
      <div className="max-w-sm md:max-w-xl mx-auto">
        <img src={Error_404} alt="error" className="mx-auto" />
        <div className="text-center mt-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold pb-1.5">Oops! Page not found</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              The page you are looking for might have been removed or
              temporarily unavailable.
            </p>
          </div>
          <Link to="/" className="bg-indigo-500 hover:bg-indigo-600 text-gray-50 text-xl rounded-lg py-3 px-12">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
