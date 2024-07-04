"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Carousel from "@/components/carousel";

type AddOnItemProps = {
  icon: string;
  title: string;
  description: string;
  price: string;
};

interface CoverItemProps {
  title: string;
  price: string;
  description: string;
  knowMoreText: string;
  imageSrc: string;
  recommended?: boolean;
}

export default function Checkout2() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState("White");

  const coverItems: CoverItemProps[] = [
    {
      title: "Protect your Charger & Screen",
      price: "₹799/year",
      description:
        "Secure your scooters display and charger from accidental damage and theft ..",
      knowMoreText: "know more",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/15f0a4a3ad38bc410807139c471872329909d34c6398cb595f102c5224ffad2b?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      recommended: true,
    },
    {
      title: "Protection from Rodents",
      price: "₹699/year",
      description:
        "Ride worry-free with rodent and animal attack coverage. Uncheck to opt-out ..",
      knowMoreText: "know more",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3984edeb58cf9feba3e86a6fa4c38857dcaa1174e12bbe31b4251b27366edb0e?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    },
  ];

  const avatars = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/af232b9c11c5cc13e755a1df36fb0f836ccdc4314eda3a0fb9116a76e3b5d45c?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c48ac4a734b5eb7a4d93d9b2c00098817745cb6e81091b27128bfef53a4244eb?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/915b7b92417209dc24714e4f0e0a8b4a512043caa6512768bf5f35dbb7a55f7a?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/13abbb49bccab024979470231a11ea4887292960a9da5e6ca8e35314add4b94a?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      isActive: true,
    },
  ];

  const addOns: AddOnItemProps[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb58dab99c81e3f92fd92ab0ff40315ac0853f11d05fd9279fb62a03d6489e42?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      title: "Personal Accident Cover",
      description: "(Mandatory if you don't have one)",
      price: "₹443",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/67effc394c0ac2b375e5c4e80b19e6d1497bceab1cdb2e97fa8548a14eedba14?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      title: "Zero Depreciation",
      description: "(Claim full cost of repaired parts)",
      price: "₹1255",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e370ccdf5446bb2bbdb07b8b076c39e6b1ab5bc332c35caca9d7acad0cc7bc8?apiKey=971b6410d97242e7b97afd5891e4e40f&",
      title: "Road Side Assistance",
      description: "(On road towing and repair services)",
      price: "₹47",
    },
  ];

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  const toggleSlideOver = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex h-[960px]">
        <Carousel />

        {isOpen && (
          <div
            className="relative z-10"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            {/* <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div> */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-start mb-5">
                          {/* <h2 className="text-lg font-medium text-gray-900 " id="slide-over-title"></h2> */}
                          <div className="ml-3 flex h-7 items-center">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center px-2 w-10 h-10 bg-white rounded-3xl">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e455e6fcec841c5511270fffb50ca3d3edf11f26cf429c036ed1a3f7b29029?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                  alt={"alt"}
                                  className="w-full aspect-square"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex gap-5 justify-center self-stretch font-medium text-black max-w-[456px]">
                            <p className="text-2xl leading-8">
                              Insurance included in on-road price
                            </p>
                            <p className="flex-1 self-start text-xl">₹10616</p>
                          </div>

                          <div>
                            <div className="flex gap-1.5 self-stretch pr-2.5 text-sm leading-5 text-black text-opacity-60 mt-3">
                              <p>1 year own damage + 5 year Third party</p>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/410fd7174dfded14e597646f67b6663bce3fc71cdb58323bafc7cd7b3f8f5638?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                alt=""
                                className="shrink-0 my-auto aspect-square w-[18px]"
                              />
                            </div>
                          </div>
                          <div className="border-t border-gray-300 my-4"></div>

                          <div>
                            <p className="self-stretch text-sm leading-5 max-w-[456px] text-black text-opacity-60">
                              Insurance is required by law to ride the scooter
                            </p>
                          </div>

                          <nav className="flex overflow-x-auto gap-3 items-start self-stretch pt-4 pr-20 pb-1.5">
                            {avatars.map((avatar, index) => (
                              <div
                                key={index}
                                className={`flex justify-center items-center px-1.5 w-14 h-14 bg-gray-100 rounded-3xl border-4 ${
                                  avatar.isActive
                                    ? "border-lime-400"
                                    : "border-gray-100"
                                } border-solid`}
                              >
                                <img
                                  loading="lazy"
                                  src={avatar.src}
                                  alt=""
                                  className="aspect-square w-[46px]"
                                />
                              </div>
                            ))}
                          </nav>

                          <div className="flex flex-col self-stretch p-5 bg-white border-2 border-lime-400 border-solid max-w-[456px]">
                            <header className="flex gap-2">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27671ece40e52b14ff135537cd9f8f585af923536b35090850b564f93e49fc2b?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                alt=""
                                className="shrink-0 self-start mt-1.5 w-8 aspect-[1.39]"
                              />
                              <div className="flex gap-0">
                                <div className="flex flex-col flex-1">
                                  <h2 className="text-sm leading-6 text-black">
                                    DIGIT
                                  </h2>
                                  <div className="flex gap-0.5 py-1.5">
                                    <span className="text-base leading-6 text-black">
                                      ₹132999
                                    </span>
                                    <span className="flex-auto text-sm leading-5 text-black text-opacity-60">
                                      Insured Value
                                    </span>
                                  </div>
                                </div>
                                <span className="self-start text-base leading-5 text-black">
                                  ₹9118
                                </span>
                              </div>
                            </header>
                            <div className="flex gap-0 pr-20 mt-4 text-xs leading-5 whitespace-nowrap text-black text-opacity-60">
                              <h3>ADD-ONS</h3>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a2c994cebddaee77285ddfc1f1d4b6ed422d968383376bbf5c900d7a2327d6?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                                alt=""
                                className="shrink-0 self-start aspect-square w-[18px]"
                              />
                            </div>
                            <hr className="shrink-0 mt-2 h-px border-t border-solid border-black border-opacity-10" />
                            {addOns.map((addOn, index) => (
                              <div key={index} className="flex gap-4 mt-4 ">
                                <input
                                  type="checkbox"
                                  className="h-7 w-7 text-green-700 border-green-300 rounded bg-white"
                                />
                                <div className="flex ">
                                  <div className="flex flex-col flex-1 ">
                                    <h3 className="text-sm leading-6 text-black">
                                      {addOn.title}
                                    </h3>
                                    <p className="text-sm leading-5 text-black text-opacity-60">
                                      {addOn.description}
                                    </p>
                                  </div>
                                  <span className=" flex justify-end text-sm leading-6 text-black text-opacity-60">
                                    {addOn.price}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col self-stretch pt-6 max-w-[456px]">
                          <header className="flex gap-0 pr-20">
                            <h2 className="text-sm leading-5 uppercase text-black text-opacity-60">
                              Additional Cover
                            </h2>
                            <span className="justify-center px-1.5 text-xs font-medium leading-5 text-green-600 whitespace-nowrap bg-green-100 rounded-[31px]">
                              RECOMMENDED
                            </span>
                          </header>
                          {coverItems.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col px-4 py-6 mt-4 w-full border border-solid bg-neutral-50 border-black border-opacity-10"
                            >
                              <div className="flex gap-5 justify-between w-full font-medium leading-6 text-black">
                                <div className="flex gap-5 justify-between text-base">
                                  <input
                                    type="checkbox"
                                    className="h-7 w-7 text-green-500 border-green-300 rounded bg-white"
                                    checked
                                  />
                                  <h3>{item.title}</h3>
                                </div>
                                <div className="self-start text-sm">
                                  {item.price}
                                </div>
                              </div>
                              <p className="self-center mt-1.5 text-sm leading-5">
                                <span className="text-black">
                                  {item.description}
                                </span>
                                <span className="text-green-600">
                                  {item.knowMoreText}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="text-xs leading-5 text-center max-w-[383px] text-black text-opacity-60">
      <p className="text-xs">
        By continuing, I agree to the{" "}

     
        
     
            <a href='#' className="text-black underline text-xs">
            privacy policy 
  </a>
  & T&Cs of &nbsp;
  <a href='#' className="text-black underline text-xs">
  DIGIT &nbsp;
  </a>
  & &nbsp;
  <a href='#' className="text-black underline text-xs">
  Ola &nbsp;
  </a>
  <a href='#' className="text-black underline text-xs">
  Financial Services
  </a>
        
      </p>
    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
