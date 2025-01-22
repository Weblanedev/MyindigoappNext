"use client";

import HowItWorksMainCard from "@/components/cards/HowItWorksMainCard";
import HowItWorksStepCard from "@/components/cards/HowItWorksStepCard";
import React, { useEffect, useState } from "react";

const steps = [
  {
    title: "Sign Up",
    description: "Create an account with your email and password.",
  },
  {
    title: "Verify",
    description: "Verify your identity and personal details.",
  },
  {
    title: "Choose Cryptocurrency",
    description: "Select the cryptocurrency you want to sell.",
  },
  {
    title: "Convert",
    description:
      "Copy your wallet address and convert your asset to local currency.",
  },
  {
    title: "Receive Funds",
    description:
      "Funds will be deposited directly into your linked bank account.",
  },
];
const HowItWorks = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDiv((prev) => (prev < 5 ? prev + 1 : 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="howItWorks" className=" bg-white py-10 sm:py-20">
      <div className="container flex flex-col gap-[72px]">
        <div className=" flex flex-col items-center gap-2 sm:gap-4 ">
          <h6 className=" leading-[56px] text-center text-[30px] font-semibold sm:text-[44px]">
            How it Works?
          </h6>
          <p className=" text-Gray500 text-center leading-[20.16px] text-[16px]">
            Go from crypto to cash in these simple steps
          </p>
        </div>
        <div className="grid-cols-[1fr_1.3fr] gap-10 px-6 hidden lg:grid">
          <HowItWorksMainCard activeIndex={activeDiv}  />
          <div className="flex flex-col gap-4">
            {steps?.map((step, idx) => {
              return (
                <HowItWorksStepCard
                  activeDiv={activeDiv}
                  step={step}
                  key={idx}
                  idx={idx}
                />
              );
            })}
          </div>
        </div>
        {/* MOBILE ONLY */}
        <div className=" flex flex-col  gap-12 lg:hidden">
          {steps.map((step, idx) => {
            return (
              <div key={idx} className=" flex flex-col gap-4">
                <HowItWorksMainCard  activeIndex={idx + 1} />
                <HowItWorksStepCard idx={idx} activeDiv={idx + 1} step={step} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
