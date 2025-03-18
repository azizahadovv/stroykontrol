import React from "react";
import { HAND, LEAF } from "../assets";
import { Utils } from "../utils";

function Reliability() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3">
        <span className="flex items-center justify-center relative">
          <h1 className="capitalize ">Надёжность</h1>
          <img src={LEAF} alt="LEAF" className="absolute -top-5 -right-8 " />
        </span>
        <p className="text-center text-[#72787D] max-w-3xl">
          Благодаря надёжному строительству выигрывают все - муниципальные
          органы выполняют свои обязанности перед гражданами, инвесторы получают
          сертификаты своих проектов, а генеральные подрядчики получают
          повышенную репутацию.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center max-w-6xl  m-auto">
        <div className="w-full bg-[#DADEDF] flex items-center justify-between px-5 min-h-28">
          <span className="flex items-center justify-center gap-3  ">
            <img src={HAND} alt="HAND" className="w-10 h-10" />
            <p className="text-gray-800 font-medium leading-none mt-3">
              Надёжная конструкция СтройКонтроль входит в стандартную
              комплектацию.
            </p>
          </span>

          <Utils.Button name="Подробнее" active={false} />
        </div>
      </div>
    </>
  );
}

export default Reliability;
