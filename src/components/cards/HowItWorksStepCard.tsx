import React, { useRef } from "react";

const HowItWorksStepCard = ({
  activeDiv,
  idx,
  step,
}: {
  activeDiv: number;
  idx: number;
  step: {
    title: string;
    description: string;
  };
}) => {
  const descriptionRefs = useRef<(HTMLSpanElement | null)[]>([]);


  return (
    <div
      key={idx}
      className={` transition-colors overflow-hidden p-6 sm:p-8 ${
        activeDiv === idx + 1
          ? " bg-white border-[1px] border-Primary500 gap-[10px]"
          : "bg-[#F5F4F6]"
      }  rounded-[24px] flex flex-col `}
    >
      <span className=" text-Primary900 font-medium leading-9 text-[24px]">
        {idx + 1}. {step.title}
      </span>
      <span
        ref={(el) => {
          descriptionRefs.current[idx] = el;
        }}
        style={{
          height:
            activeDiv ===( idx + 1)
              ? `${descriptionRefs.current[idx]?.scrollHeight}px`
              : "0px",
          transition: "height .5s ease",
        }}
        className={`overflow-hidden font-normal leading-[20px] sm:leading-[26px] text-[16px] sm:text-[18px] text-Gray600 `}
      >
        {step.description}
      </span>
    </div>
  );
};

export default HowItWorksStepCard;
