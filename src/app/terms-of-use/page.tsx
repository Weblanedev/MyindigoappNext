"use client";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Terms from "./modules/Terms";

const page = () => {
  return (
    <>
      <Navbar privacyLayout={true} />
      <Terms />
    </>
  );
};

export default page;
