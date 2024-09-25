import React from "react";
import Section from "../section/Section";
import { FaPlaneDeparture } from "react-icons/fa6";
import { RiHotelLine } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { GiPalmTree } from "react-icons/gi";
import { BsPassport } from "react-icons/bs";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { MdOutlineEventNote } from "react-icons/md";

const Wellcome = () => {
  return (
    <div>
      <Section>
        <div className="h-[300px] rounded-md  px-2 bg-gray-50 pb-[80px]">
          <div className=" flex gap-4">
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <FaPlaneDeparture />
                </span>
                Flight
              </h2>
            </div>
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <RiHotelLine />
                </span>
                Hotel
              </h2>
            </div>
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <CiShop />
                </span>
                Shop
              </h2>
            </div>
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <GiPalmTree />
                </span>
                Holiday
              </h2>
            </div>
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <BsPassport />
                </span>
                Visa
              </h2>
            </div>
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <TbDeviceMobileCheck />
                </span>
                Mobile Recharge
              </h2>
            </div>
            <div className="group inline-block ">
              <h2 className="flex gap-2 group-hover:border-b-2 text-[11px] text-gray-600 font-semibold group-hover:border-yellow-500 items-center px-4 transition-all duration-300 ease-in-out py-4">
                <span className="text-[22px] text-gray-700">
                  <MdOutlineEventNote />
                </span>
                Pay Bill
              </h2>
            </div>
          </div>
          <hr />
        </div>
      </Section>
    </div>
  );
};

export default Wellcome;
