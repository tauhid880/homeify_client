import React from "react";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = [
    {
      image: "https://i.ibb.co/1fRtJQg/bbb.jpg",
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: "https://i.ibb.co/ZHCVVTb/beeee.jpg",
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: "https://i.ibb.co/mbg5jS5/kk.jpg",
      prev: 2,
      id: 3,
      next: 1,
    },
  ];

  return (
    <div className="carousel w-full">
      {bannerData.map((banner, index) => (
        <BannerItem key={index} banner={banner}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
