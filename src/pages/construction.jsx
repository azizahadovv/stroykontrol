import React from "react";
import { exportText } from "../export/text";
import { phoneIcon } from "../assets";
import { Utils } from "../utils";

function Construction() {
  const constructionData = exportText?.constructionText || [];

  return (
    <div className="bg-[#212B31] min-h-[600px] text-white relative flex items-center justify-center ">
      <div className="mt-44">
        <div className="flex items-center justify-start gap-3  max-w-6xl">
          <div className="lg:max-w-[60%]  @min-md:max-w-[60%] flex flex-col lg:items-start max-md:items-center gap-4 ">
            <h1>Создан для строительства</h1>
            <div className="flex flex-col gap-4">
              <ul style={{ listStyleType: "disc" }}>
                {constructionData.map((item, index) => (
                  <li key={item?.id || index}>
                    <b>{item?.title}</b>
                    <p className="text-[#FFFFFFBF] leading-8">
                      {item?.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className=" flex lg:items-start max-md:items-center gap-4">
                <Utils.Button name="Заказать демо" active={false} />
                <Utils.Button name="Подробнее" />
              </div>
            </div>

            <div className="lg:absolute right-0 top-40 md:flex items-end justify-end">
              <img src={phoneIcon} alt="phoneIcon" />
            </div>
          </div>
        </div>

        <div className="h-10/12 flex items-center justify-center flex-wrap md:mt-56">
          {exportText.subcontractor.map((service) => {
            return (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center gap-3 max-w-[380px]"
              >
                <img src={service.icon} alt="member" />
                <b className="text-center text-[#FFFFFF] text-lg">
                  {service.title}
                </b>
                <p className="text-center text-[#FFFFFFBF]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Construction;
