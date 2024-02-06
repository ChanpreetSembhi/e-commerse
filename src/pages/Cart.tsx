import { Link } from "react-router-dom";
import Empty from "../assets/empty-cart.png";
export default function Error() {
  return (
    <section className="py-20">
      <div className="md:max-w-md max-w-sm mx-auto">
        <img src={Empty} alt="error" className="mx-auto" />
        <div className="text-center mt-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold pb-1.5">
              Your cart is empty and sad: ?
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">Add something to make it happy!</p>
          </div>
          <Link
            to="/"
            className="bg-indigo-500 hover:bg-indigo-600 text-gray-50 text-xl rounded-lg py-3 px-12"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
