import { ContactUsUnderlayIcon1, ContactUsUnderlayIcon2 } from "@/assets";
import React from "react";

const ContactUs = () => {
  return (
    <div
    id="contact"
      style={{
        background: `
          linear-gradient(95.92deg, #4C1570 0%, #340E4D 100%)
        `,
      }}
      className="w-screen py-20 flex flex-col items-center relative overflow-hidden "
    >
      <div className=" absolute left-0 top-0">
        <ContactUsUnderlayIcon1 />
      </div>
      <div className=" absolute bottom-[-150px] right-0">
        <ContactUsUnderlayIcon2 />
      </div>
      <div className=" flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
          <h6 className=" text-white text-center font-medium text-[28px] leading-[36px]">
            Got questions or queries?
          </h6>
          <p className=" text-center font-normal text-[18px] leading-[26px] text-Gray300">
            Our team is available 24/7 to help you resolve your issues and get
            your running smoothly
          </p>
        </div>
        <div className=" flex justify-center">
          <span className=" cursor-pointer bg-[#FFFFFF] rounded-[16px] py-[10px] px-8 font-medium text-[16px] leading-[20.16px]">
            Contact Us
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
