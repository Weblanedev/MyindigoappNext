"use client";

import React from "react";
import Slider from "react-slick";
// In your _app.js or component file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUsCard from "@/components/cards/AboutUsCard";

const whatWedo = [
  {
    title: "Quick Transfers",
    description: "Indigo makes it easy to convert cryptocurrencies like Bitcoin into your local currency in fast and seamless, giving you a smooth experience.",
    icon: "/rocket-dynamic-premium.png",
  },
  {
    title: "24/7 Customer Support",
    description:
      "Indigo takes your financial matters seriously. That's why they have a dedicated and well-trained customer support team ready to assist you with any questions or concerns you may have",
    icon: "/phone-missing-dynamic-premium.png",
  },
  {
    title: "No Wallet Services",
    description:
      "Unlike other apps, Indigo doesn't hold onto your money in a wallet. This means you're less likely to encounter any fraudulent activity while using the app.",
    icon: "/wallet-dynamic-premium.png",
  },
  {
    title: "Enhanced Security",
    description:
      "At Indigo, your safety is our priority. We've implemented top-notch security measures to protect your transactions and personal information. With encryption protocols and advanced authentication methods, you can trust that your assets are secure while using our platform.",
    icon: "/lock-dynamic-premium.png",
  },
];
const AboutUs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    vertical: false,
    horizontal: true,

    nextArrow: <div></div>,
    prevArrow: <div></div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          vertical: false,
        },
      },
    ],
  };
  return (
    <div
    id="aboutUs"
      style={{
        background: "linear-gradient(116.55deg, #38333D 0%, #29252C 100%)",
      }}
      className="py-10 sm:py-20 w-screen"
    >
      <div className=" w-full flex flex-col gap-[72px] overflow-hidden ">
        <div className=" container flex flex-col items-center gap-4 ">
          <span className=" leading-[26px] font-normal text-lg text-Gray100 bg-Primary500 rounded-[32px] py-[10px] px-3 sm:py-3 sm:px-4">
            About Us
          </span>
          <p className=" text-white font-semibold text-center leading-[56px] text-[30px] sm:text-[44px]">
            What We Do For You
          </p>
        </div>
        <Slider {...settings}>
          {whatWedo.map((item, idx) => {
            return (
              <div key={idx} className=" px-4">
                <AboutUsCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
