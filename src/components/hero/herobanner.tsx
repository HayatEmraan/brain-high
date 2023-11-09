"use client";
import React, { useEffect } from "react";
import { setInterval } from "timers";

const HeroBanner = () => {
  const arrImg = [
    "6501a2740452f3f40e68388d-tm1webp@2x.png",
    "6501a2740452f3f40e683895-tm5webp@2x.png",
    "6501a2740452f3f40e68388f-tm2webp@2x.png",
    "6501a2740452f3f40e683897-tm7webp@2x.png",
    "6501a2740452f3f40e68388b-tm3webp@2x.png",
    "6501a2740452f3f40e683893-tm8webp@2x.png",
    "6501a2740452f3f40e683891-tm4webp@2x.png",
    "6501a2740452f3f40e68388b-tm3webp@2x.png",
  ];
  let showImg = [
    "6501a2740452f3f40e68388d-tm1webp@2x.png",
    "6501a2740452f3f40e683895-tm5webp@2x.png",
    "6501a2740452f3f40e68388f-tm2webp@2x.png",
    "6501a2740452f3f40e683897-tm7webp@2x.png",
  ];
  const randomNum = (arr: string[]): number => {
    return Math.floor(Math.random() * arr.length);
  };

  const [index, setIndex] = React.useState(showImg);

  setInterval(() => {
    const random = randomNum(arrImg);
    const getImage = arrImg[random];
    const showRandom = randomNum(showImg);
    setIndex((index) => {
      const newIndex = [...index];
      newIndex[showRandom] = getImage;
      return newIndex;
    });
  }, 3500);

  return (
    <>
      <div className="absolute h-[74.38%] w-[16.32%] top-[12.81%] right-[76.93%] bottom-[12.81%] left-[6.75%] rounded-[72px]">
        <img
          className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_36px)] w-[4.5rem] h-[4.5rem] overflow-hidden object-cover"
          alt=""
          src={index[0]}
        />
      </div>
      <div className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_87.6px)] w-[4.5rem] h-[4.5rem] ">
        <img
          className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_36px)] w-[4.5rem] h-[4.5rem] overflow-hidden object-cover"
          alt=""
          src={index[1]}
        />
      </div>
      <div className="absolute top-[calc(50%_-_36px)] left-[calc(50%_+_15.6px)] w-[4.5rem] h-[4.5rem]">
        <img
          className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_36px)] w-[4.5rem] h-[4.5rem] overflow-hidden object-cover"
          alt=""
          src={index[2]}
        />
      </div>
      <div className="absolute top-[calc(50%_-_36px)] left-[calc(50%_+_118.8px)] w-[4.5rem] h-[4.5rem]">
        <img
          className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_36px)] w-[4.5rem] h-[4.5rem] overflow-hidden object-cover"
          alt=""
          src={index[3]}
        />
      </div>
    </>
  );
};

export default HeroBanner;
