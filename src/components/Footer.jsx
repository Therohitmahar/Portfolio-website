import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="social ">
      <FiLinkedin />
      <RiGithubLine />
      <RxTwitterLogo />
      <MdOutlineEmail />
      <a href="https://github.com/Therohitmahar/Portfolio-website">
        <span>Designed & Built by Rohit Mahar</span>
      </a>
    </div>
  );
}

export default Footer;
