import Image from "next/image";
import React from "react";

const BuildCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row items-center justify-center w-full">
    <div className=" bg-white py-6 px-6 flex flex-col w-full sm:w-[568px] items-center rounded-[24px] gap-8 min-h-[480px]">
      <div className=" bg-custom-gradient h-[280px] w-full sm:w-[520px]  overflow-hidden flex justify-center relative rounded-xl py-6">
        <div className=" relative z-20">
          <Image alt="underlay" src={icon} width={240} height={240} />
        </div>
        <div className=" absolute bottom-0 left-0 right-0 ">
          <Image
            alt="underlay"
            src={"/build_card_int.png"}
            width={528}
            height={334}
            className=" w-[337px] h-[334px] sm:w-[528px] sm:h-[334px]"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <h6 className=" text-Gray900 text-[24px] font-medium leading-[36px]">
          {title}
        </h6>
        <p className="text-Gray600 text-[18px] font-normal leading-[26px]">
          {description}
        </p>
      </div>
    </div>
    </div>

  );
};

export default BuildCard;
