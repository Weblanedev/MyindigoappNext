"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@/assets";
import React, { useRef, useState } from "react";

const faqs = [
  {
    question: "What cryptocurrencies do you support?",
    answer:
      "At Indigo, we support a wide range of cryptocurrencies, including but not limited to Bitcoin (BTC), Ethereum (ETH), Solana(SOL), Tether(USDT), and many others. We're constantly expanding our supported cryptocurrencies, so be sure to check our platform for the most up-to-date list.",
  },
  {
    question: "What countries do you support for payout?",
    answer:
      "We facilitate cashouts in various countries across the globe. Currently, we support cashouts in [list of supported countries]. We're continuously working to expand our reach and provide our services to more regions.",
  },
  {
    question: "How long does it take to convert crypto to cash?",
    answer:
      "We understand the importance of timely transactions. With Indigo, you can convert your cryptocurrencies to cash quickly and efficiently. In most cases, the conversion process takes less than 5 minutes, ensuring a seamless experience for our users. However, please note that occasional downtimes or network congestion may cause slight delays.",
  },
  {
    question: "Do you hold assets during the conversion process?",
    answer:
      "No, we do not hold your assets during the conversion process. Unlike traditional exchanges or platforms, Indigo operates on a non-custodial basis. This means that you retain full control of your assets throughout the entire transaction. Your cryptocurrencies are securely transferred directly to your designated wallet or bank account without any intermediary holding onto them.",
  },
  {
    question: "Are your fees transparent?",
    answer:
      "Absolutely. Transparency is paramount to us. We believe in providing our users with clear and upfront information about our fees. You can find detailed information regarding our fees on our platform, including conversion fees, transaction fees, and any other applicable charges. We strive to ensure that there are no hidden fees, so you can trust that you're getting a fair deal every time.",
  },
  {
    question: "Is your platform compliant with regulations?",
    answer:
      "Yes, Indigo is committed to upholding the highest standards of regulatory compliance. We adhere to all relevant laws and regulations in the jurisdictions where we operate. Our platform employs robust security measures and compliance procedures to safeguard against money laundering, fraud, and other illicit activities. Rest assured that your transactions on Indigo are conducted in compliance with applicable regulations, providing you with a secure and reliable service.",
  },
];

const Faqs = () => {
  const [active, setActive] = useState(-1);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <div id="faq" className=" bg-white py-10 sm:py-20 w-screen">
      <div className=" container flex flex-col gap-[72px] overflow-hidden ">
        <div className="flex flex-col items-center gap-4 ">
          <span className=" leading-[26px] font-normal text-lg text-Primary900 bg-[#EDE0F5] rounded-[32px] py-[10px] px-3 sm:py-3 sm:px-4">
            For Curious Minds
          </span>
          <p className=" text-Gray900 font-semibold text-center leading-[56px] text-[30px] sm:text-[44px]">
            Frequently Asked Questions
          </p>
        </div>
        <div className=" flex flex-col gap-4  sm:px-20">
          {faqs?.map((faq, idx) => {
            return (
              <div
                onClick={() => setActive((prev) => (prev === idx ? -1 : idx))}
                key={idx}
                className={` cursor-pointer transition-colors overflow-hidden p-6 sm:p-8 ${
                  active === idx
                    ? " bg-white border-[1px] border-Primary500"
                    : "bg-[#F5F4F6]"
                }  rounded-[24px] flex flex-col `}
              >
                <div className="flex flex-row items-center justify-between">
                  <span className=" text-Primary900 font-medium leading-7 sm:leading-9 text-[18px] sm:text-[24px]">
                    {faq.question}
                  </span>
                  <span>
                    {active === idx ? <ChevronDownIcon /> : <ChevronUpIcon />}
                  </span>
                </div>

                <div
                  ref={(el) => {
                    answerRefs.current[idx] = el; // Store the reference for each answer
                  }}
                  className={` overflow-hidden flex 
                    `}
                  style={{
                    height:
                      active === idx
                        ? `${answerRefs.current[idx]?.scrollHeight}px`
                        : "0px",
                    transition: "height .5s ease",
                  }}
                >
                  <span className="mt-2 font-normal leading-[22px] sm:leading-[26px] text-[16px] sm:text-[18px] text-Gray600 ">
                    {faq.answer}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
