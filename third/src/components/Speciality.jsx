import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Find by Speciality </h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply our extensive list of trust doctors, schedule your appointment
        hassele-free
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scroll(0, 0)}
            to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col items-center text-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={item.image} alt="" className="w-16 sm:w-24 mb-2 " />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
