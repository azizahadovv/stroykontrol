import React from "react";
import { LOGOSTROYKONTROL } from "../assets";
import { exportModul } from "../export/export";
import { BUTTON } from "../utils";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center justify-around h-24  sticky top-0 bg-white">
      {/* Logo qismi */}
      <Link to={'/'} className="flex items-center justify-center gap-2 cursor-pointer no-underline">
        <img src={LOGOSTROYKONTROL} alt="LOGOSTROYKONTROL" />
        <span className="uppercase text-2xl text-[#212B31]">СтройКонтроль</span>
      </Link>

      {/* Navbar menyusi */}
      <div className="flex items-center justify-center gap-5 ">
        <ul className="flex items-center justify-end gap-4 max-lg:hidden">
          {exportModul?.exportNavbarNavigate?.map((nav) => {
            return (
              <li key={nav.id}>
                <a
                  href={nav.url}
                  className={`text-sm hover:text-[#0070F3] ${
                    window.location.hash === `#${nav.url}`
                      ? "text-[#0070F3]"
                      : "text-[#212B31]"
                  }`}
                >
                  {nav.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="bounce-top">
          <BUTTON name="Заказать демо" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
