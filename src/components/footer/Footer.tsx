/* eslint-disable react/jsx-key */
import {
  AppleIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  XIcon,
} from "@/assets";
import Link from "next/link";
import React from "react";
import StoreButton from "../storeButton/StoreButton";

const Footer = () => {
  const socials = [
    // eslint-disable-next-line react/jsx-key
    <FacebookIcon />,
    <InstagramIcon />,
    <XIcon />,
    <LinkedinIcon />,
  ];
  return (
    <footer>
      <div className="container flex flex-col lg:flex-row lg:items-center justify-between py-8 lg:py-12 gap-12">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className=" flex flex-col gap-5 lg:flex-row lg:gap-8">
          <Link
            className="hover:text-Primary500 text-base text-Gray600 leading-6 font-medium"
            href={"/privacy-policy"}
          >
            Privacy Policy
          </Link>
          <Link
            className="hover:text-Primary500 text-base text-Gray500 leading-6 font-medium"
            href={"/terms-of-use"}
          >
            Terms of Service
          </Link>
        </div>
        <div className=" flex flex-row gap-2">
          {socials.map((social, idx) => {
            return (
              <span
                key={idx}
                className=" cursor-pointer size-12 rounded-full bg-[#F3E0FF] flex justify-center items-center"
              >
                {social}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-4 lg:hidden ">
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
    </footer>
  );
};

export default Footer;
