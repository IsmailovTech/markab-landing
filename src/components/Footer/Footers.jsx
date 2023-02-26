import React from "react";
import logo from "../../Assets/images/foot.png";
import instagram from "../../Assets/images/instagram.svg";
import linkedin from "../../Assets/images/linkedin.svg";
import twitter from "../../Assets/images/twitter.svg";
import youtube from "../../Assets/images/youtube.svg";
import facebook from "../../Assets/images/facebook.svg";
import { FormattedMessage } from "react-intl";

function Footers() {
  const socials = [
    {
      img: youtube,
      href: "",
    },
    {
      img: twitter,
      href: "",
    },
    {
      img: instagram,
      href: "",
    },
    {
      img: linkedin,
      href: "",
    },
    {
      img: facebook,
      href: "",
    },
  ];

  const footerData = [
    {
      title: <FormattedMessage id="location" />,
      content: <FormattedMessage id="place" />,
      number: "tel: +998 95 860 95 55",
    },
    {
      title: <FormattedMessage id="call" />,
      content: <FormattedMessage id="place2" />,
      number: "+998 95 870 95 55",
    },
  ];

  return (
    <>
      <div className="w-full bg-green-main max-h-[380px]  pb-8 md:pb-14 sm:mt-24">
        <div className="container mx-auto px-2 sm:px-8 md:px-10 lg:px-24 xl:px-36 pt-5 flex flex-col md:flex-row">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[173px]  sm:w-[200px] md:w-[297px]"
            />

            {/*======================= Google map */}

            <div className=" w-[173px] h-[106px] md:w-[417px] md:h-[257px] mt-2 md:mt-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d748.4575812462535!2d69.3207024!3d41.377771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3eca14f685b%3A0xd2dc23a047e926ed!2sMirandi%20Restaurant!5e0!3m2!1sen!2s!4v1677341517065!5m2!1sen!2s"
                // width="417"
                // height="257"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-[173px] h-[106px] md:w-[417px] md:h-[257px] rounded-2xl md:rounded-[40px] "
              ></iframe>
            </div>
          </div>

          {/* ===================== Footer infos */}
          <div className=" mt-2 sm:mt-10 md:mt-20 ml-0 md:ml-8 gap-16">
            <ul className="flex gap-4 md:gap-10">
              {footerData.length &&
                footerData.map((data, index) => (
                  <ul
                    key={index}
                    className="flex flex-col gap-1 sm:gap-2 text-white text-xs sm:text-xl md:text-2xl max-w-[172px] sm:max-w-[310px] "
                  >
                    <li className="text-lg sm:text-2xl md:text-3xl sm:mb-2">
                      {data.title}
                    </li>
                    <li>{data.content}</li>
                    <li>{data.number}</li>
                  </ul>
                ))}
            </ul>

            {/* ================= Footer Icons */}

            <ul className="flex items-center gap-6 md:gap-8 mt-5 md:mt-10 ml-14 md:ml-8">
              {socials.length &&
                socials.map((el, index) => (
                  <li key={index}>
                    <a href={el.href}>
                      <img src={el.img} alt="logo footer" />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-9 sm:h-10 md:h-14 bg-white container mx-auto px-2 sm:px-8 md:px-10 lg:px-24 xl:px-36 flex items-center justify-center">
        <p className="text-[9px] sm:text-base md:text-lg flex gap-1 sm:gap-4 md:gap-6">
          Copyright © Markab | Designed by{" "}
          <a
            href="https://www.instagram.com/abba.uz/"
            target="_blank"
            className="text-green-main"
          >
            abba marketing
          </a>
          - Powered by
          <a
            href="https://www.instagram.com/abba.uz/"
            target="_blank"
            className="text-green-main"
          >
            ABBA
          </a>
        </p>
      </div>
    </>
  );
}

export default Footers;
