import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          Contact <span className="text-gray-700 font-semibold">Us</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          src={assets.contact_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>
          <p className="text-gray-600">
            53673 Whillims Station <br /> Suite 342, Washingtone, USA
          </p>
          <p className="text-gray-500">
            Tel: (424) 853-3335 <br /> Email: gamjoly@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at Prescripto
          </p>
          <p className="text-gray-500">
            Learn mre about teams and job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
