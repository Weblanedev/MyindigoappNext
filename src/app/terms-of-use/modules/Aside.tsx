"use client";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "About Us",
    link: "about",
  },
  {
    label: "Age Restriction",
    link: "age",
  },
  {
    label: "Registration and User Account",
    link: "registration",
  },
  {
    label: "Accessing the Services",
    link: "accessing",
  },
  {
    label: "Risk Statement",
    link: "risk",
  },
  {
    label: "Transaction",
    link: "transaction",
  },
  {
    label: "Account information and Transaction records",
    link: "account",
  },
  {
    label: "Using your Account",
    link: "using",
  },
  {
    label: "Exchange rate",
    link: "exchange",
  },
  {
    label: "Fees",
    link: "fees",
  },
  {
    label: "Cancellation and Refund",
    link: "cancellation",
  },
  {
    label: "Termination",
    link: "termination",
  },
  {
    label: "How We Contact Each Other",
    link: "how",
  },
  {
    label: "Intellectual Property",
    link: "intellectual",
  },
  {
    label: "Privacy notice",
    link: "privacy",
  },
  {
    label: "Website Accuracy",
    link: "website",
  },
  {
    label: "Third-Party Websites",
    link: "third",
  },
  {
    label: "Representation and Warranties",
    link: "representation",
  },
  {
    label: "Indemnification",
    link: "indemnification",
  },
  {
    label: "Limitation of Liability",
    link: "limitation",
  },
  {
    label: "Dispute Resolution",
    link: "dispute",
  },
  {
    label: "Miscellaneous Provisions",
    link: "misc",
  },
 
];
const Aside = ({ activeLink, setActiveLink }: {
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
    <aside className="rounded-[8px]  no-scrollbar sticky top-4  overflow-y-scroll overflow-hidden  bg-[#F5F4F6] w-[300px] min-w-[300px]  h-[520px]  hidden lg:flex ">
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
                  activeLink === item.link ? "text-primary90" : " text-[#101828]"
                }`}
                href={`#${item.link}`}
                onClick={(e) => {
                  e.preventDefault();
                }}
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
