import { AboutUsCardUnderlayIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const AboutUsCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <div className=" w-full bg-[#242127] py-6 px-7 flex flex-col rounded-[24px] gap-8 h-[584px]">
        <div className=" bg-[#38333D] overflow-hidden flex justify-center relative rounded-xl py-6 h-[280px]">
          <div className=" relative z-20">
            <Image alt={title} src={icon} width={224} height={224} />
          </div>
          <div className=" absolute bottom-0 left-0 right-0 ">
            <AboutUsCardUnderlayIcon/>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <h6 className=" text-white text-[24px] font-medium leading-[36px]">
            {title}
          </h6>
          <p className="text-Gray100 text-[18px] font-normal leading-[26px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
