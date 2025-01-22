"use client";
import {
  Logo,
  AppleIcon,
  ChevronRightIcon,
  GooglePlayIcon,
  BurgerIcon,
  LogoSmallIcon,
} from "@/assets";
import Link from "next/link";
import React, { useState } from "react";
import StoreButton from "../storeButton/StoreButton";

const routes = [
  { label: " How it works", link: "howItWorks" },
  { label: "About Us", link: "aboutUs" },
  { label: "FAQs", link: "faq" },
  { label: "Contact", link: "contact" },
];
const Navbar = ({ privacyLayout = false }: { privacyLayout: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" border-b-[1px] border-[#F2E6F9] py-6">
      <div className=" container flex flex-row justify-between items-center">
        <Link href={"/"}>
          <span className="hidden md:flex">
            <Logo />
          </span>
          <span className="flex md:hidden">
            <LogoSmallIcon />
          </span>
        </Link>

        <div className=" lg:flex items-center gap-[32px] hidden">
          {routes.map((item) => {
            return (
              <Link
                key={item.label}
                className=" hover:text-Primary500 text-Gray800 text-[16px] leading-[20px] font-normal"
                href={privacyLayout ? "/" : `#${item.link}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className=" flex lg:hidden"
        >
          <BurgerIcon />
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={` z-40 fixed ${
          isOpen ? ` left-0` : " left-[100%]"
        } right-0 top-0 bottom-0  bg-[#FDF7FD] min-h-[100vh] transition-[2s] flex flex-col gap-[28px] container`}
      >
        <div className=" flex items-center justify-between py-8 relative">
          <Link href={"/"}>
            <LogoSmallIcon />
          </Link>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className=" flex lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#5D005A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {routes.map((item) => {
              return (
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  key={item.label}
                  className="text-[16px] leading-[24px] font-normal p-4 bg-white rounded-[12px] flex flex-row items-center justify-between "
                  href={privacyLayout ? "/" : `#${item.link}`}
                >
                  {item.label}
                  <div>
                    <ChevronRightIcon />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className=" flex flex-row justify-center items-center gap-4 sm:gap-6">
            <StoreButton
              icon={<GooglePlayIcon />}
              heading={"GET IT ON"}
              storeName={"Google Play"}
            />
            <StoreButton
              icon={<AppleIcon />}
              heading={"Download on"}
              storeName={"App Store"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
