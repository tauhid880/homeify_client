import React from "react";

const Count = () => {
  return (
    <div className="text-center py-20 px-5">
      <div
        className="stats w-full stats-vertical lg:stats-horizontal shadow-xl py-10 bg-[#0201010d]"
        data-aos="fade-up"
      >
        <div className="stat">
          <div className="stat-title">
            <p className="text-black font-bold">Total Buyer</p>
          </div>
          <div className="stat-value">3K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <p className="text-black font-bold">Total Seller</p>
          </div>
          <div className="stat-value">1K</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <p className="text-black font-bold">New Registers</p>
          </div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Count;
