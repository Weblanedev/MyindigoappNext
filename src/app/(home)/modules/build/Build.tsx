import { BuildTextLinesLg, BuildTextLinesSm } from "@/assets";
import BuildCard from "@/components/cards/BuildCard";
import React from "react";

const Build = () => {
  return (
    <div className=" bg-[#F5F4F6] py-10 sm:py-20">
      <div className="container flex flex-col gap-[72px]">
        <div className=" flex flex-col items-center gap-2 sm:gap-4 ">
          <h6 className=" leading-[56px] tracking-tight text-center text-[30px] font-semibold sm:text-[44px]">
            <span className=" text-Primary500 text-center relative">
              Build {""}
              <span className=" absolute inset-0 left-[-10px] top-[-5px] right-0 sm:hidden">
               <BuildTextLinesSm/>
              </span>
              <span className=" absolute hidden sm:inline-flex left-[-4px] right-0 top-[-7px] bottom-0 ">
              <BuildTextLinesLg/>
              </span>
            </span>
            <span>Your Crypto Portfolio</span>
          </h6>
          <p className=" text-Gray500 text-center font-normal leading-[20.16px] text-[16px]">
            Turn your digital assets into cash instantly!
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-y-12 ">
          <BuildCard
            icon={"/eth-dynamic-premium.png"}
            title="Sell Cryptocurrency"
            description="  Easily sell your Bitcoin, Ethereum, or any other 10+ supported
          cryptocurrency."
          />
          <BuildCard
            icon={"/flash-dynamic-premium.png"}
            title="Fast Transactions"
            description="Receive funds directly into your bank account within minutes."
          />
          <BuildCard
            icon={"/locker-dynamic-premium.png"}
            title="Secure Platform"
            description="Trust our encrypted platform to ensure the safety of your transactions."
          />
          <BuildCard
            icon={"/calender-dynamic-premium.png"}
            title="User-Friendly Interface"
            description="Intuitive design makes it simple for anyone to sell crypto."
          />
        </div>
      </div>
    </div>
  );
};

export default Build;
