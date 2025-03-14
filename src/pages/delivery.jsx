import React from "react";
import { CONSTRUCTOR2 } from "../assets";

function Delivery() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-56 ">
      <h1 className="text=[#212B31] font-thin text-4xl max-w-3xl text-center">
        Пора навести порядок на вашей стройплощадке и взять под контроль свой
        проект
      </h1>

      <section className="flex items-center justify-center gap-32 flex-wrap">
        <div className="flex flex-col items-start justify-stretch gap-4 h-[400px]">
          <h1 className="text=[#212B31] font-thin text-4xl text-start leading-12 max-w-[500px]">
            Мы заботимся о доставке на стройплощадку и о людях, которые на них
            рассчитывают
          </h1>
          <p className="text-[#72787D] text-xl text-start leading-8 max-w-[600px]">
            Мы знаем всё о гордости от сияющего нового здания. Нам также
            известно всё о разочаровании от попыток завершить проект в срок и в
            рамках бюджета.
          </p>
          <div className="group relative inline-block text-lg font-medium">
            <span className="relative z-10 border-b border-[#FFD042]">
              Мы здесь, чтобы помочь.
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0 bg-[#FFD042] transition-all duration-400 ease-in-out group-hover:h-1/2" />
          </div>
        </div>
        <img src={CONSTRUCTOR2} alt="CONSTRUCTOR2" />
      </section>
    </div>
  );
}

export default Delivery;
