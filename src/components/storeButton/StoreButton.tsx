import React, { ReactNode } from "react";

const StoreButton = ({
  icon,
  storeName,
  heading,
}: {
  icon: ReactNode;
  storeName: string;
  heading: string;
}) => {
  return (
    <button className=" py-[6.67px] px-4 bg-Primary500 rounded-[10.29px] flex items-center gap-2">
      {icon}
      <div className=" flex flex-col items-start">
        <p className=" text-xs font-normal leading-[12px] sm:leading-[12.64px] text-white">
          {heading}
        </p>
        <p className=" text-sm sm:text-[14px] font-semibold leading-[17px] sm:leading-[17.64px] text-white">
          {storeName}
        </p>
      </div>
    </button>
  );
};

export default StoreButton;
