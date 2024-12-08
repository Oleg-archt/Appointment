import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Abount = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="text-gray-700 font-medium">
          About <span>US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            inventore ullam vero officiis alias eum explicabo ad ex laboriosam
            officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            perspiciatis natus nulla unde illo quibusdam, a, veritatis, officiis
            et dolorum laboriosam dicta laborum dolore necessitatibus?
          </p>
          <b className="text-gray-800">Our vistion</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, enim quam ut quis molestias maiores ex libero nobis
          </p>
        </div>
      </div>
      <div>
        <p className="text-xl my-4">
          Why <span className="text-gray-700 font-semibold">Choose Us</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment schedual that fits into your busy lifestyle
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your area
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Tailored recommendation and reminders to help you stay on top of
            your health
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abount;
