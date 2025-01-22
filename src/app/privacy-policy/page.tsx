
"use client";
import Navbar from "@/components/navbar/Navbar";
import PrivacyPolicy from "./modules/PrivacyPolicy";

const page = () => {
  return (
    <>
      <Navbar privacyLayout={true}  />
      <PrivacyPolicy/>
    </>
  );
};

export default page;
