import React from "react";

import Cities_weServe from "./FooterComponents/Cities_weServe.jsx";
import PopularCatagory from "./FooterComponents/PopularCatagory.jsx";
import Copyright from "./FooterComponents/Copyright.jsx";
import Moreinfo from "./FooterComponents/Moreinfo.jsx";
function Footer() {
  return (
    <footer className="bg-[#101010] ">
      <Moreinfo/>
      <Cities_weServe />
      <PopularCatagory />
      <Copyright />
    </footer>
  );
}

export default Footer;
