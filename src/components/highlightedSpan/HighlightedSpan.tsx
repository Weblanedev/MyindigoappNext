import React from "react";

const HighlightedSpan = ({ heading }: {heading: string}) => {
  return (
    <span className=" text-paragraph text-base leading-6  font-medium">
      {heading}{" "}
    </span>
  );
};

export default HighlightedSpan;
