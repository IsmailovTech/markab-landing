import React, { useState } from "react";
import logo from "../../Assets/images/Logo.svg";
import youtube from "../../Assets/images/YoutubeIcon.svg";
import instagram from "../../Assets/images/Instagramicon.svg";
import number from "../../Assets/images/number.svg";
import { FormattedMessage } from "react-intl";

function Navbar({ handleLocaleChange }) {
  return (
    <div className="w-full shadow-xl">
      <div className="w-full container mx-auto px-2 sm:px-8 md:px-10 lg:px-24 xl:px-36 pb-4 sm:pb-0 h-[86px] sm:h-[70px] flex items-end sm:items-center justify-between ">
        <a href="tel:+998905434642" className="flex md:hidden  ">
          <img
            src={number}
            alt="icon"
            className="bg-green-main p-2 rounded-xl"
          />
        </a>
        <img
          src={logo}
          alt="photo"
          aria-label="Logo-markab"
          className=" w-[180px] sm:w-[200px]"
        />
        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/watch?v=wGsYdVS-DJE&list=RDhBYB6rR_gos&index=7"
            target="_blank"
            className=" hidden md:block"
          >
            <img src={youtube} alt="youtube icon" />
          </a>

          <a
            href="https://www.youtube.com/watch?v=wGsYdVS-DJE&list=RDhBYB6rR_gos&index=7"
            target="_blank"
            className=" hidden md:block"
          >
            <img src={instagram} alt="instagram icon" />
          </a>
          <button
            onClick={handleLocaleChange}
            className="px-3 py-[5px] sm:py-[8px] sm:px-3 h-[40px] bg-green-main hover:bg-emerald-600 transition-all text-white rounded-xl"
          >
            <FormattedMessage id="language" />
          </button>

          <a
            href="tel:+998905434642"
            className="hidden md:flex text-sm h-[40px] w-[156px]  items-center justify-center rounded-xl bg-green-main hover:bg-emerald-600 transition-all text-white  "
          >
            +998 90 543 46 42
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
