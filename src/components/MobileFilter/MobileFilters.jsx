import React from "react";
import filter from "../../Assets/images/Filtericon.svg";

function MobileFilters() {
  return (
    <div>
      <div className="bg-gray-line w-full py-10"></div>
      <div className="w-full container mx-auto px-36">
        <div className=" flex flex-col max-w-[727px]">
          <h1 className="text-[40px] font-semibold text-green-main">
            Markab orqali mobil qurilmalarni bo’lib to’lashga arzon narxlarda
            xarid qiling!
          </h1>
          <p className="text-2xl mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type{" "}
          </p>
        </div>

        <div className="border-y border-black mt-16">
          <div className="mt-2 border-r border-black">
            <button className="text-white bg-gradient-to-br from-green-main to-emerald-400 hover:bg-gradient-to-bl   text-[40px]  w-[361px] text-center flex items-center justify-start px-6 gap-14 rounded-lg ">
              <img src={filter} alt="filter icon" />
              Modellar
            </button>
            asdfsadf
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilters;
