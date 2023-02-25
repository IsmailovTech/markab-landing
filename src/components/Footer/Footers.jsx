import React from "react";
import logo from "../../Assets/images/foot.png";
import instagram from "../../Assets/images/instagram.svg";
import linkedin from "../../Assets/images/linkedin.svg";
import twitter from "../../Assets/images/twitter.svg";
import youtube from "../../Assets/images/youtube.svg";
import facebook from "../../Assets/images/facebook.svg";

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

  return (
    <>
      <div className="w-full bg-green-main h-[430px] rounded-t-3xl mt-24">
        <div className="container mx-auto px-36 py-10 flex">
          <div>
            <img src={logo} alt="logo" className="w-[297px]" />

            {/*======================= Google map */}

            <div className="w-[417px] h-[257px] mt-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d95872.49292629752!2d69.2256768!3d41.330278400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1677244436711!5m2!1sen!2s"
                width="417"
                height="257"
                style={{ border: 0, borderRadius: 40 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* ===================== Footer infos */}
          <div className="mt-20 ml-8 gap-16">
            <ul className="flex">
              <ul className="flex flex-col gap-2 text-white text-2xl max-w-[300px] ">
                <li className="text-3xl mb-2">United States</li>
                <li>71 South Los Carneros Road, Goleta, California 93117</li>
                <li>+998 95 860 95 55</li>
              </ul>

              <ul className="flex flex-col gap-2 text-white text-2xl max-w-[314px] ml-14">
                <li className="text-3xl mb-2">Netherlands</li>
                <li>Leehove 40, 2678 MC De Lier, Netherlands</li>
                <li>+998 95 870 95 55</li>
              </ul>
            </ul>

            {/* ================= Footer Icons */}

            <ul className="flex items-center  gap-8 mt-14">
              {socials.length &&
                socials.map((el, index) => (
                  <li key={index}>
                    <a href={el.href}>
                      <img src={el.img} alt="logo footer" />
                    </a>
                  </li>
                ))}
              <p className="text-white">
                © 2023, Apeel Sciences. All rights reserved.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-white container mx-auto px-36 flex items-center justify-center">
        <p className="flex gap-6">
          Copyright © Markab | Designed by{" "}
          <a href="" className="text-green-main">
            abba marketing
          </a>
          - Powered by
          <a href="" className="text-green-main">
            ABBA
          </a>
        </p>
      </div>
    </>
  );
}

export default Footers;
