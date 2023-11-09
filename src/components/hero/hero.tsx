import React from "react";
import HeroBanner from "./herobanner";
import Technology from "../technology/technology";
const Hero = () => {
  return (
    <div className="absolute w-full top-[5rem] right-[0rem] left-[0rem] bg-gray-200 h-[40.5rem] overflow-hidden text-center text-[3.46rem]">
      <Technology />
      <div className="absolute top-[calc(50%_-_187.1px)] left-[calc(50%_-_410px)] w-[51.25rem] h-[29.64rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_410px)] w-[51.25rem] h-[8.75rem]">
          <div className="absolute top-[0.06rem] left-[calc(50%_-_326.8px)] tracking-[-1.5px] leading-[4.38rem] font-medium flex items-center justify-center w-[40.86rem] h-[4.19rem]">
            High-performing teams of
          </div>
          <div className="absolute top-[4.44rem] left-[calc(50%_-_327.7px)] text-[3.36rem] tracking-[-1.5px] leading-[4.38rem] font-medium flex items-center w-[40.98rem] h-[4.19rem] text-aquamarine">
            <span className="[line-break:anywhere] w-full">
              <span>vetted software engineers</span>
              <span className="text-white">.</span>
            </span>
          </div>
        </div>
        <div className="absolute top-[8.75rem] left-[calc(50%_-_220.6px)] w-[27.58rem] h-[6.05rem] text-[4rem]">
          <div className="absolute top-[0.63rem] left-[calc(50%_-_220.6px)] tracking-[-2px] leading-[4.8rem] font-medium flex items-center justify-center w-[1.25rem] h-[4.8rem]">
            [
          </div>
          <div className="absolute top-[0.63rem] left-[calc(50%_-_108.8px)] tracking-[-2px] leading-[4.8rem] font-medium flex items-center justify-center w-[0.71rem] h-[4.8rem]">
            ,
          </div>
          <div className="absolute top-[0.63rem] left-[calc(50%_-_5.6px)] tracking-[-2px] leading-[4.8rem] font-medium flex items-center justify-center w-[0.71rem] h-[4.8rem]">
            ,
          </div>
          <div className="absolute top-[0.63rem] left-[calc(50%_+_97.6px)] tracking-[-2px] leading-[4.8rem] font-medium flex items-center justify-center w-[0.71rem] h-[4.8rem]">
            ,
          </div>
          <div className="absolute top-[0.63rem] left-[calc(50%_+_200.8px)] tracking-[-2px] leading-[4.8rem] font-medium flex items-center justify-center w-[1.25rem] h-[4.8rem]">
            ]
          </div>
          <HeroBanner />
        </div>
        <div className="absolute space-x-1.5 top-[14.8rem] left-[calc(50%_-_320px)] w-[40rem] h-[8.1rem] text-[1.11rem]">
          <div className="absolute top-[1.69rem] left-[calc(50%_-_293px)] leading-[1.8rem] flex items-center justify-center w-[20.12rem] h-[1.31rem] whitespace-nowrap">{`Scale your team up and down with The`}</div>
          <div className="absolute top-[1.69rem] left-[calc(50%_+_28.7px)] box-border w-[8.16rem] h-[1.38rem] text-[1.07rem] border-b-[1px] border-solid border-white ">
            <div className="absolute top-[0rem] left-[calc(50%_-_65.3px)] leading-[1.8rem] flex items-center justify-center w-[8.18rem] h-[1.31rem] cursor-pointer hover:bg-[#49ffe6] hover:text-black">
              top 1.36% talent
            </div>
          </div>
          <div className="absolute top-[1.69rem] left-[calc(50%_+_159.2px)] text-[1.09rem] leading-[1.8rem] flex items-center justify-center w-[8.38rem] h-[1.31rem]">
            {" "}
            skilled in React,
          </div>
          <div className="absolute top-[3.49rem] left-[calc(50%_-_261.4px)] text-[1.08rem] leading-[1.8rem] flex items-center justify-center w-[32.69rem] h-[1.31rem]">
            Node.js, .NET and AWS. Onboarding within 10 days guaranteed.
          </div>
        </div>
        <div className="absolute top-[22.9rem] left-[calc(50%_-_114.7px)] bg-aquamarine w-[14.34rem] h-[3.25rem] text-[1rem] text-gray-200 font-ibm-plex-mono">
          <div className="absolute top-[1.13rem] left-[calc(50%_-_82.7px)] tracking-[0.5px] leading-[1rem] uppercase font-semibold flex items-center justify-center w-[8.86rem] h-[1rem]">
            GET A PROPOSAL
          </div>
          <img
            className="absolute top-[calc(50%_-_7px)] left-[calc(50%_+_68.7px)] w-[0.88rem] h-[0.88rem] overflow-hidden"
            alt=""
            src="/svg.svg"
          />
        </div>
        <div className="absolute top-[26.15rem] left-[calc(50%_-_89.7px)] w-[11.21rem] h-[3.49rem] text-[0.77rem]">
          <img
            className="absolute top-[calc(50%_-_3.9px)] left-[0rem] w-[4.13rem] h-[1.99rem]"
            alt=""
            src="/divcluthlogo.svg"
          />
          <div className="absolute top-[calc(50%_+_3.2px)] left-[4.5rem] w-[1.15rem] h-[1.1rem]">
            <div className="absolute top-[0.06rem] left-[calc(50%_-_9.2px)] leading-[0.98rem] flex items-center justify-center w-[1.16rem] h-[1rem]">
              4.9
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_+_5px)] left-[6.03rem] w-[5.19rem] h-[0.88rem]"
            alt=""
            src="/divnclutchstarswr.svg"
          />
        </div>
        t
      </div>
    </div>
  );
};

export default Hero;
