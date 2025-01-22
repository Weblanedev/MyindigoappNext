import React from "react";

const NumberedHeading = ({ no, title }: { no: string; title: string }) => {
  return (
    <h6 className=" text-paragraph text-[24px] font-semibold leading-8">
      {no}. {title}
    </h6>
  );
};

export default NumberedHeading;
