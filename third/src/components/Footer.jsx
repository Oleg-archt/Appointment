import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div>
      <div className="md:mx-10 flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14  my-10 mt-10 text-sm">
        {/* ------- left side ------- */}
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            aut est impedit harum officia voluptatum. Optio iusto harum possimus
            id.
          </p>
        </div>

        {/* center  */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contacts us</li>
            <li>Privasy policy</li>
          </ul>
        </div>

        {/* right side */}
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7809</li>
            <li>gamjoly@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*  bottom footer */}
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescription - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
