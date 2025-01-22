"use client";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "General information",
    link: "general",
  },
  {
    label: "How we collect personal data",
    link: "how",
  },
  {
    label: "The Information We Collect",
    link: "collect",
  },
  {
    label: "Purposes and Lawful Basis for Processing Personal Information",
    link: "personal",
  },
  {
    label: "Purpose Limitation",
    link: "purpose",
  },
  {
    label: "Data Minimization",
    link: "data",
  },
  {
    label: "Cookies",
    link: "cookies",
  },
  {
    label: "Age Restriction",
    link: "age",
  },
  {
    label: "How We Protect your Information",
    link: "protect",
  },
  {
    label: "Transfer of Personal Information",
    link: "transfer",
  },
  {
    label: "Choices and Rights",
    link: "choices",
  },
  {
    label: "Contact",
    link: "contact",
  },
  {
    label: "Updates, Modifications & Amendments",
    link: "update",
  },
];
const Aside = ({
  activeLink,
  setActiveLink,
}: {
  activeLink: string;
  setActiveLink: (id: string)=>void;
}) => {

  const handleLinkCLick = (id: string) => {
    setActiveLink(id);
    
    document?.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <aside className="rounded-[8px]  no-scrollbar sticky top-4   overflow-y-scroll overflow-hidden  bg-[#F5F4F6] w-[300px] min-w-[300px]  h-[520px]  hidden lg:flex ">
      <div className=" flex flex-col">
        {links?.map((item, id) => {
          return (
            <div
              onClick={() => {
                handleLinkCLick(item.link);
              }}
              className={` ${
                activeLink === item.link
                  ? " border-l-Primary500"
                  : "border-l-[#E6E8EF]"
              }  border-l-[3px] border-solid py-4 px-6 `}
              key={id}
            >
              <Link
                className={`font-medium leading-6 ${
                  activeLink === item.link
                    ? "text-primary90"
                    : " text-[#101828]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                }}
                href={`/`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Aside;
