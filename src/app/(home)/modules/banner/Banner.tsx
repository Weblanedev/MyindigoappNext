import {
  AppleIcon,
  BannerLine,
  ClockIcon,
  GooglePlayIcon,
  TextCrownIcon,
} from "@/assets";
import StoreButton from "@/components/storeButton/StoreButton";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="py-10 lg:py-20 bg-white ">
      <div className="container grid grid-cols-1 xl:grid-cols-[1fr_1.3fr]">
        <div className=" flex flex-col justify-center gap-[60px] xl:gap-[120px]">
          <div className=" flex flex-col gap-8 xl:gap-[36px]">
            <div className=" flex flex-col gap-4 xl:gap-6">
              <div className=" flex items-center xl:items-start flex-col">
                <div className=" relative">
                  <span className=" text-[36px] text-Primary500 leading-[46px] font-bold sm:text-[56px] sm:leading-[64px]">
                    Sell Your Crypto
                  </span>
                  <div className=" absolute top-[-15px] right-[-35px]">
                    <TextCrownIcon />
                  </div>
                </div>
                <span className="text-[36px] text-Gray900 leading-[46px] font-bold sm:text-[56px] sm:leading-[64px]">
                  Hassle-Free!
                </span>
              </div>
              <div>
                <p className=" text-Gray700 font-normal text-center xl:text-start text-[18px] sm:text-[20px] leading-[26px] sm:leading-7">
                  Turn your digital assets into cash instantly
                </p>
              </div>
            </div>

            <div className=" flex flex-row items-center justify-center xl:justify-start gap-4">
              <StoreButton
                icon={<GooglePlayIcon />}
                heading={"Get it on"}
                storeName={"Google Play"}
              />
              <StoreButton
                icon={<AppleIcon />}
                heading={"Download on"}
                storeName={"Apple Store"}
              />
            </div>
          </div>
          <div className=" flex">
            <div className=" bg-[#F5F4F6] hidden py-4 px-3 xl:flex rounded-[32px] flex-row items-center gap-[10px]">
              <ClockIcon />
              <p className=" font-normal leading-[26px] text-[18px] text-Gray700">
                Get started in less than 60s!
              </p>
            </div>
          </div>
        </div>
        <div className=" relative flex justify-center ">
          <div className=" relative">
            <Image
              alt="banner"
              src="/banner_img.png"
              className=" w-[380px] h-[363px]  xl:h-[640px] xl:w-full"
              width={640}
              height={640}
            />
            <div className="absolute left-0 top-10 sm:left-[-10px] sm:top-[72px] z-10">
              <Image
                alt="banner_img"
                src={"/banner_imgI.png"}
                width={270.41}
                height={142.09}
                className=" h-[78px] w-[148px] xl:h-[142px] xl:w-[270px]"
              />
            </div>
          </div>

          <div className=" absolute hidden xl:inline-flex top-[-40px] right-[-20px] xl:top-[-10px] xl:right-[-5px]">
            <BannerLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
