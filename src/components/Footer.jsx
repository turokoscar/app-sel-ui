import React from "react";
import { NavLink } from "react-router-dom";

const footLink = [
  { link: "Términos y condiciones", path: "/" },
  { link: "Política de privacidad", path: "/" },
  { link: "Soporte técnico", path: "/" },
];

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-100 border border-[#6c757d33]">
        <div className="max-w-screen-xl mx-auto px-8 py-6 flex justify-between text-sm font-normal">
          <p className="text-[#6c757d]">© 2025 SELv2 - Sistema en Línea</p>
          <ul className="flex justify-between gap-4">
            {footLink.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" text-pantone-7738 hover:text-pantone-7738/80 line-height-[1.25rem]"
                >
                  <NavLink to={item.path}>{item.link}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
