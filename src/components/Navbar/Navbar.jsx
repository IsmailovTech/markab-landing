import React, { useState } from "react";
import logo from "../../Assets/images/Logo.svg";
import youtube from "../../Assets/images/YoutubeIcon.svg";
import instagram from "../../Assets/images/Instagramicon.svg";
import { FormattedMessage } from "react-intl";

function Navbar({ locale, setLocale, handleLocaleChange }) {
  return (
    <div className="w-full shadow-xl">
      <div className="w-full container mx-auto px-36 h-[70px] flex items-center justify-between ">
        <img src={logo} alt="photo" aria-label="Logo-markab" className="" />
        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/watch?v=wGsYdVS-DJE&list=RDhBYB6rR_gos&index=7"
            target="_blank"
          >
            <img src={youtube} alt="youtube icon" />
          </a>

          <a
            href="https://www.youtube.com/watch?v=wGsYdVS-DJE&list=RDhBYB6rR_gos&index=7"
            target="_blank"
          >
            <img src={instagram} alt="instagram icon" />
          </a>
          <button
            onClick={handleLocaleChange}
            className="py-[8px] px-3 h-[40px] bg-green-main hover:bg-emerald-600 transition-all text-white rounded-xl"
          >
            <FormattedMessage id="language" />
          </button>

          <a
            href="tel:+998905434642"
            className="text-sm h-[40px] w-[156px] flex items-center justify-center rounded-xl bg-green-main hover:bg-emerald-600 transition-all text-white  "
          >
            +998 90 543 46 42
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
