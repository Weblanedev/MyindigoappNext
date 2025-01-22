import {
  HowItWorksUnderlay1,
  HowItWorksUnderlay1Small,
  HowItWorksUnderlay2,
  HowItWorksUnderlay2Sm,
  HowItWorksUnderlay3,
  HowItWorksUnderlay3Sm,
  HowItWorksUnderlay4,
  HowItWorksUnderlay4Sm,
  HowItWorksUnderlay5,
  HowItWorksUnderlay5Sm,
  HowItWorksUnderlay6,
  HowItWorksUnderlay6Sm,
} from "@/assets";
import Image from "next/image";
import React from "react";

const steps = [
  "/signup-mockup.png",
  "/verify-mockup.png",
  "/choose-crypto-mockup.png",
  "/convert-mockup.png",
  "/receive-funds-mockup.png",
];
const HowItWorksMainCard = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className=" relative bg-how-to-cards-custom-gradient min-h-[400px] flex justify-center items-center rounded-[24px] overflow-hidden">
      <div className=" absolute top-0 left-0">
        <span className="hidden lg:flex">
          <HowItWorksUnderlay1 />
        </span>
        <span className=" flex lg:hidden">
          <HowItWorksUnderlay1Small />
        </span>
      </div>
      <div className=" absolute top-0 right-0">
        <span className="hidden lg:flex">
          <HowItWorksUnderlay2 />
        </span>
        <span className=" flex lg:hidden">
          <HowItWorksUnderlay2Sm />
        </span>
      </div>
      <div className=" absolute bottom-[100px] left-0">
        <span className="hidden lg:flex">
          <HowItWorksUnderlay3 />
        </span>
        <span className=" flex lg:hidden">
          <HowItWorksUnderlay3Sm />
        </span>
      </div>
      <div className=" absolute bottom-[100px] right-0">
        <span className="hidden lg:flex">
          <HowItWorksUnderlay4 />
        </span>
        <span className=" flex lg:hidden">
          <HowItWorksUnderlay4Sm />
        </span>
      </div>
      <div className=" absolute bottom-0 left-0">
        <span className="hidden lg:flex">
          <HowItWorksUnderlay5 />
        </span>
        <span className=" flex lg:hidden">
          <HowItWorksUnderlay5Sm />
        </span>
      </div>
      <div className=" absolute bottom-0 right-0">
        <span className="hidden lg:flex">
          <HowItWorksUnderlay6 />
        </span>
        <span className=" flex lg:hidden">
          <HowItWorksUnderlay6Sm />
        </span>
      </div>
      <div className=" z-10 relative flex justify-center overflow-hidden items-center">
        {steps?.map((item, idx) => {
          return (
            <Image
              key={idx}
              className={` w-[148px] h-[300px] lg:w-[202px] lg:h-[408px]
        transition-all duration-500 ease-in-out
        ${activeIndex === idx + 1 ? "opacity-100 " : "opacity-0 hidden"}
      `}
              src={item}
              alt=""
              width={202}
              height={408}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorksMainCard;
