import React from "react";
import { footer } from "@/data/Data";
import styled from "./index.module.css";
import Logo from "../../../../public/assets/images/logo-light.png";
import Image from "next/image";
import Section from "@/components/utils/Section";
const Footer = () => {
  return (
    <Section>
      <Section className={`${styled.footerContact} footerContact `}>
        <div className={`${styled.container} container`}>
          <div
            className={`${styled.send} ${styled.flex} flex-col sm:flex-row rounded-sm sm:flex  md:gap-[2rem]`}>
            <div className={`${styled.text} text`}>
              <h1 className="text-xl">Do You Have Questions ?</h1>
              <p className="text-gray-300 ">
                We'll help you to grow your career and growth.
              </p>
            </div>
            <button
              className={`bg-gray-200  rounded-lg py-2 px-4 mt-2 sm:mt-0 text-[#27ae60] `}>
              Contact Us Today
            </button>
          </div>
        </div>
      </Section>
      <div className=" bg-[#1d2636] pt-[2rem]">
        <div
          className={`container flex flex-col sm:flex-row  gap-[0.8rem] pb-[2rem] `}>
          <input
            type="text"
            placeholder="Email Address"
            className=" input text-gray-600 rounded-sm bg-white  p-[17px] "
          />
          <button className="bg-green-500 max-w-[150px] text-lg text-gray-200 py-[0.4rem] rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      <footer className={`${styled.footer} footer `}>
        <div className={`${styled.container} container`}>
          <div className={`${styled.box} box`}>
            <div className={`${styled.logo} logo `}>
              <Image src={Logo} />
              <h2 className="text-gray-400 text-sm">
                Do You Need Help With Anything?
              </h2>
              <h1 className="text-xs text-gray-400 mt-3">
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
              </h1>
            </div>
          </div>

          {footer.map((val) => (
            <div className={`${styled.box} box`}>
              <h3 className="text-gray-300">{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li className="text-sm"> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className={`${styled.legal} legal`}>
        <span className="text-sm">
          {" "}
          <span className="mr-[0.1rem text-sm]">© 2021 RentUP.</span> Designed
          By APP TECHNOLOGIES.
        </span>
      </div>
    </Section>
  );
};

export default Footer;
