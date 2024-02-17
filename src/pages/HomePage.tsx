import { Link } from "react-router-dom";
import CategoryCard from "../component/CategoryCard";
import {
  feedbacks,
  menCategory,
  newArrivals,
  womenCategory,
  womenProducts,
} from "../store/api";
import FeedbackCard from "../component/FeedbackCard";
// banner background
import bannerOne from "../assets/banner/banner-one.jpg";
import bannerTwo from "../assets/banner/banner-two.jpg";
import savingBannerOne from "../assets/banner/saving-zone-one.jpg";
import savingBannerTwo from "../assets/banner/saving-zone-two.jpg";
import savingBannerThree from "../assets/banner/saving-zone-three.jpg";
import savingBannerFour from "../assets/banner/saving-zone-four.jpg";
import savingBannerFive from "../assets/banner/saving-zone-five.jpg";
import fashionBannerOne from "../assets/banner/fashion-banner-one.jpg";
import fashionBannerTwo from "../assets/banner/fashion-banner-two.jpg";
// Brand Logos
import nike from "../assets/brand-logo/nike.png";
import hsm from "../assets/brand-logo/h&m.png";
import levi from "../assets/brand-logo/levi.png";
import polo from "../assets/brand-logo/polo.png";
import puma from "../assets/brand-logo/puma.png";
import { RiArrowDownLine } from "@remixicon/react";
import ProductCard from "../component/ProductCard";

function HomePage() {
  return (
    <main className="py-10">
      {/* new arrivals */}
      <section className="py-8">
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-6">
          New Arrival
        </h4>
        <div className="grid grid-cols-4 gap-6">
          {newArrivals.map((arrival) => (
            <div key={arrival.id}>
              <img
                src={arrival.img}
                alt="new-arrivals"
                className="rounded-xl"
              />
              <h6 className="font-semibold pt-3">{arrival.name}</h6>
            </div>
          ))}
        </div>
      </section>
      {/* Offer Banners */}
      <section className="py-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div
            style={{ backgroundImage: `url(${bannerOne})` }}
            className="bg-cover rounded-xl p-6 flex items-center aspect-video"
          >
            <div className="w-1/2 text-white">
              <h6 className="font-semibold text-lg">Low Price</h6>
              <div className="my-6">
                <h4 className="text-3xl font-semibold pb-2">High Coziness</h4>
                <p className="text-sm">UPTO 50% OFF</p>
              </div>
              <h6 className="font-semibold">Explore Items</h6>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bannerTwo})` }}
            className="bg-cover rounded-xl p-6 flex items-center aspect-video"
          >
            <div className="w-1/2 text-white">
              <h6 className="font-semibold text-lg">Beyoung Presents</h6>
              <div className="my-6">
                <h4 className="text-3xl font-semibold pb-2">
                  Breezy Summer Style
                </h4>
                <p className="text-sm">UPTO 50% OFF</p>
              </div>
              <h6 className="font-semibold">Explore Items</h6>
            </div>
          </div>
        </div>
      </section>
      {/* Big saving zone */}
      <section className="py-8">
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-6">
          Big Saving Zone
        </h4>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div
            style={{ backgroundImage: `url(${savingBannerOne})` }}
            className="bg-cover rounded-xl p-6 aspect-square flex items-center"
          >
            <div className="w-1/2 text-white">
              <h5 className="text-3xl font-bold">Hawaiian Shirts</h5>
              <p className="text-sm py-3">Dress up in summer vibe</p>
              <p className="font-semibold">UPTO 50% OFF</p>
              <RiArrowDownLine className="size-10 m-8" />
              <Link
                to="#"
                className="border border-gray-50 text-white rounded-md hover:bg-gray-50 hover:text-gray-600 text-sm transition-all duration-200 uppercase py-2 px-5"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${savingBannerTwo})` }}
            className="bg-cover rounded-xl p-6 aspect-square flex items-center justify-end"
          >
            <div className="w-1/2 text-white text-right">
              <span className="bg-gray-700 font-semibold text-xs rounded-md py-2.5 px-4">
                Limited Stock
              </span>
              <div className="mt-6">
                <h5 className="text-3xl font-bold">
                  Printed
                  <br /> T-Shirt
                </h5>
                <p className="text-sm py-3">New Designs Every Week</p>
                <p className="font-semibold">UPTO 40% OFF</p>
                <RiArrowDownLine className="size-10 m-8 ml-auto" />
                <Link
                  to="#"
                  className="border border-gray-50 text-white rounded-md hover:bg-gray-50 hover:text-gray-600 text-sm transition-all duration-200 uppercase py-2 px-5"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${savingBannerThree})` }}
            className="bg-cover rounded-xl p-6 aspect-square flex items-center justify-end"
          >
            <div className="w-1/2 text-gray-700 text-right">
              <h5 className="text-3xl font-bold">Cargo Joggers</h5>
              <p className="text-sm py-3">Move with style & comfort</p>
              <p className="font-semibold">UPTO 50% OFF</p>
              <RiArrowDownLine className="size-10 m-8 ml-auto" />
              <Link
                to="#"
                className="border border-gray-700 text-gray-700 rounded-md hover:bg-gray-600 hover:text-gray-50 text-sm transition-all duration-200 uppercase py-2 px-5"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:col-span-3">
            <div
              style={{ backgroundImage: `url(${savingBannerFour})` }}
              className="bg-cover rounded-xl p-6 aspect-video flex items-center justify-end"
            >
              <div className="w-1/2 text-gray-700">
                <h5 className="text-3xl font-bold">Urban Shirts</h5>
                <p className="text-sm py-3">Live In Confort</p>
                <p className="font-semibold">FLAT 60% OFF</p>
                <RiArrowDownLine className="size-10 m-8" />
                <Link
                  to="#"
                  className="border border-gray-700 text-gray-700 rounded-md hover:bg-gray-600 hover:text-gray-50 text-sm transition-all duration-200 uppercase py-2 px-5"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${savingBannerFive})` }}
              className="bg-cover rounded-xl p-6 aspect-video flex items-center justify-end"
            >
              <div className="w-1/2 text-gray-700">
                <h5 className="text-3xl font-bold">Oversized T-Shirts</h5>
                <p className="text-sm py-3">Street Style Icon</p>
                <p className="font-semibold">FLAT 60% OFF</p>
                <RiArrowDownLine className="size-10 m-8" />
                <Link
                  to="#"
                  className="border border-gray-700 text-gray-700 rounded-md hover:bg-gray-600 hover:text-gray-50 text-sm transition-all duration-200 uppercasef py-2 px-5"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fashion better banner */}
      <section className="py-8">
        <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl overflow-hidden">
          <div
            style={{ backgroundImage: `url(${fashionBannerOne})` }}
            className="bg-cover"
          >
            <div className="max-w-sm md:max-w-lg mx-auto flex flex-col justify-center h-full w-full p-14 md:p-0">
              <div className="mb-10 text-white">
                <h4 className="text-2xl md:text-4xl font-bold pb-3">
                  WE MADE YOUR EVERYDAY FASHION BETTER!
                </h4>
                <p className="text-gray-300 text-xs md:text-sm">
                  In our journey to improve everyday fashion, euphoria presents
                  EVERYDAY wear range - Comfortable & Affordable fashion 24/7
                </p>
              </div>
              <div>
                <Link
                  to="#"
                  className="bg-gray-50 hover:bg-gray-200 text-sm rounded-lg transition-all duration-200 py-3 px-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <img
            src={fashionBannerTwo}
            alt="banner"
            className="w-full hidden md:block"
          />
        </div>
      </section>

      {/* category for mens */}
      <section className="py-8">
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-6">
          Categories For Men
        </h4>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 md:gap-8">
          {menCategory.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              img={category.img}
              name={category.name}
            />
          ))}
        </div>
      </section>

      {/* category for womens */}
      <section className="py-8">
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-6">
          Categories For Women
        </h4>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 md:gap-8">
          {womenCategory.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              img={category.img}
              name={category.name}
            />
          ))}
        </div>
      </section>

      {/* Top Brands Deal */}
      <section className="py-8">
        <div className="bg-gray-800 text-gray-50 rounded-xl py-14 px-24 text-center">
          <div className="mb-10">
            <h2 className="font-bold text-5xl pb-4">Top Brands Deal</h2>
            <p className="text-lg text-gray-300">
              Up To <span className="text-yellow-500">60%</span> off on brands
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="bg-white aspect-auto flex items-center justify-center rounded-xl py-4">
              <img src={nike} alt="nike-logo" />
            </div>
            <div className="bg-white aspect-auto flex items-center justify-center rounded-xl py-4">
              <img src={levi} alt="levi-logo" />
            </div>
            <div className="bg-white aspect-auto flex items-center justify-center rounded-xl py-4">
              <img src={hsm} alt="h&m-logo" />
            </div>
            <div className="bg-white aspect-auto flex items-center justify-center rounded-xl py-4">
              <img src={polo} alt="polo-logo" />
            </div>
            <div className="bg-white aspect-auto flex items-center justify-center rounded-xl py-4">
              <img src={puma} alt="puma-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* In The Limelight */}
      <section className="py-8">
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-6">
          In The Limelight
        </h4>
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 md:gap-8">
          {womenProducts.map((product) => (
            <ProductCard
              id={product.id}
              img={product.img}
              name={product.name}
              brand={product.brand}
              price={product.price}
            />
          ))}
        </div>
      </section>

      {/* Feedback */}
      <section className="py-8">
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-6">
          Feedback
        </h4>
        <div className="grid grid-cols-3 gap-6">
          {feedbacks.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              id={feedback.id}
              profile={feedback.profile}
              stars={feedback.stars}
              name={feedback.name}
              msg={feedback.msg}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
