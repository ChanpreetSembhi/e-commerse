import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterXLine } from "@remixicon/react";
import AppLink from '../assets/app-link.png'

export default function Footer() {
  return (
    <footer className="footer bg-gray-700 text-gray-50 py-3">
      <div className="xl:max-w-7xl max-w-sm mx-auto divide-y divide-gray-400">
        {/* top footer */}
        <section className="top-footer py-8">
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 mb-10">
                <div>
                    <h4 className="text-xl font-semibold pb-4">Need Help</h4>
                    <div className="flex flex-col space-y-3 *:text-sm *:text-gray-300 *:transition-all *:duration-150">
                        <Link to="#" className="hover:text-gray-50">Contact Us</Link>
                        <Link to="#" className="hover:text-gray-50">Track order</Link>
                        <Link to="#" className="hover:text-gray-50">Returns & Refunds</Link>
                        <Link to="#" className="hover:text-gray-50">FAQ's</Link>
                        <Link to="#" className="hover:text-gray-50">Career</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold pb-4">Company</h4>
                    <div className="flex flex-col space-y-3 *:text-sm *:text-gray-300 *:transition-all *:duration-150">
                        <Link to="#" className="hover:text-gray-50">About Us</Link>
                        <Link to="#" className="hover:text-gray-50">euphoria Blog</Link>
                        <Link to="#" className="hover:text-gray-50">euphoriastan</Link>
                        <Link to="#" className="hover:text-gray-50">Collaboration</Link>
                        <Link to="#" className="hover:text-gray-50">Media</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold pb-4">More Info</h4>
                    <div className="flex flex-col space-y-3 *:text-sm *:text-gray-300 *:transition-all *:duration-150">
                        <Link to="#" className="hover:text-gray-50">Terms and Conditions</Link>
                        <Link to="#" className="hover:text-gray-50">Privacy Policy</Link>
                        <Link to="#" className="hover:text-gray-50">Shipping Policy</Link>
                        <Link to="#" className="hover:text-gray-50">Sitemap</Link>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <h4 className="text-xl font-semibold pb-4">Location</h4>
                    <div className="flex flex-col space-y-3 *:text-sm *:text-gray-300 *:transition-all *:duration-150">
                        <Link to="#" className="hover:text-gray-50">support@eurphoria.in</Link>
                        <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
                        <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0">
                <div className="flex items-center space-x-3 *:size-8 *:bg-gray-300 *:text-gray-800 *:rounded-md *:flex *:items-center *:justify-center *:p-1.5 *:transition-all *:duration-200">
                    <Link to="#" className="hover:bg-indigo-500 hover:text-gray-50"><RiFacebookFill /></Link>
                    <Link to="#" className="hover:bg-indigo-500 hover:text-gray-50"><RiInstagramLine /></Link>
                    <Link to="#" className="hover:bg-indigo-500 hover:text-gray-50"><RiTwitterXLine /></Link>
                    <Link to="#" className="hover:bg-indigo-500 hover:text-gray-50"><RiLinkedinFill /></Link>
                </div>
                <div>
                    <h4 className="text-xl font-semibold pb-3">Download The App</h4>
                    <img src={AppLink} alt="app" />
                </div>
            </div>
        </section>
        {/* middle footer */}
        <section className="top-footer py-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold">Popular Categories</h4>
            <RiArrowDownSLine className="size-6" />
          </div>
        </section>
        {/* end footer */}
        <section className="top-footer py-4">
          <p className="text-center text-xs font-semibold">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
