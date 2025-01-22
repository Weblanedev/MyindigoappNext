import React from "react";

const LetteredHeading = ({ no, title }: { no: string; title: string }) => {
  return (
    <h6 className=" leading-[28px] font-semibold text-[18px] text-paragraph capitalize">
      {no}. {title}
    </h6>
  );
};

export default LetteredHeading;
