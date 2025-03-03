"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Card from "@/components/card";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "@/assets/css/MiniCalendar.css";

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card extra="flex w-full h-full flex-col px-3 py-3 rounded-[15px]">
        <Calendar
          onChange={onChange}
          value={value}
          view={"month"}
          prevLabel={
            <span className="bg-red-500 text-white p-2 rounded-full">
              {"<"}
            </span>
          } // Customização do botão anterior
          nextLabel={
            <span className="bg-blue-500 text-white p-2 rounded-full">
              {">"}
            </span>
          } // Customização do botão próximo
        />
      </Card>
    </div>
  );
};

export default MiniCalendar;
