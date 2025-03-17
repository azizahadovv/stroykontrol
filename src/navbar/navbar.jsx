import React from "react";
import { LOGOSTROYKONTROL, MENU } from "../assets";
import { exportModul } from "../export/export";
import { BUTTON } from "../utils";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center justify-around max-lg:justify-between h-24  sticky top-0 bg-white">
      {/* Logo qismi */}
      <Link
        to={"/"}
        className="flex items-center justify-center gap-2 cursor-pointer no-underline"
      >
        <img src={LOGOSTROYKONTROL} alt="LOGOSTROYKONTROL" />
        <span className="uppercase text-2xl text-[#212B31]">СтройКонтроль</span>
      </Link>

      {/* Navbar menyusi */}

      <div className="flex  gap-5 ">
        <ul className="flex items-center justify-end gap-4 max-lg:hidden">
          {exportModul?.exportNavbarNavigate?.map((nav) => {
            return (
              <li key={nav.id}>
                <a href={nav.url} className={`text-sm text-[#72787D]`}>
                  {nav.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="bounce-top flex items-center justify-center gap-3">
          <div className="max-lg:hidden">
            <BUTTON name="Заказать демо" />
          </div>

          <button
            className="min-lg:hidden"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <img width={40} src={MENU} alt="MENU" />
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <ul className="flex flex-col items-center justify-end gap-4 ">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
