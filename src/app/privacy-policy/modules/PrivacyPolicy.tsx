"use client";
import React, { useState } from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

const PrivacyPolicy = () => {
  const [activeLink, setActiveLink] = useState("general");

  return (
    <div className="  pt-[72px] pb-[124px]  bg-white  relative">
      <div className=" flex lg:gap[80px] container  gap-[100px] relative">
        <Aside activeLink={activeLink} setActiveLink={setActiveLink} />

        <MainContent setActiveLink={setActiveLink} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
