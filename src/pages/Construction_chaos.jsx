import React from "react";
import { CONSTRUCTOR } from "../assets";

function ConstructionChaos() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mb-32">
      <h1 className="text-4xl">Строительство - это хаос</h1>
      <p className="text-[#72787D] max-w-4xl text-center">
        Хаос может быть удивительной творческой силой, воздвигающая новые здания
        из пыли. Хаос вызывает несчастные случаи, задержки и потери. Он вводит
        проекты в стресс и разочарование. Это означает, что вы действительно не
        контролируете ситуацию.
      </p>
      <img src={CONSTRUCTOR} alt="CONSTRUCTOR" />
    </div>
  );
}

export default ConstructionChaos;
