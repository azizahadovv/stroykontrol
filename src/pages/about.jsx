import React from "react";
import { RATING, RECYCLED, SECURITY } from "../assets";

function About() {
  return (
    <div className="flex items-center justify-evenly align-baseline min-h-96 flex-wrap">
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={RATING} alt="RATING" />
        <h3 className="text-xl text-[#212B31] text-center">
          Повышение эффективности
        </h3>
        <p className="w-[380px] text-center text-[#72787D]">
          Эффективные проекты стоят дешевле и завершаются в срок.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <img src={RECYCLED} alt="RECYCLED" />
        <h3 className="text-xl text-[#212B31] text-center">Снижение потерь</h3>
        <p className="w-[380px] text-center text-[#72787D]">
          Тщательно отслеживайте движение стройматериалов, чтобы избежать краж и
          повреждений.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <img src={SECURITY} alt="SECURITY" />
        <h3 className="text-xl text-[#212B31] text-center">
          Повышение безопасности
        </h3>
        <p className="w-[380px] text-center text-[#72787D]">
          Обеспечьте здоровье и благополучие людей, работающих на вашей
          площадке.
        </p>
      </div>
    </div>
  );
}

export default About;
