"use client";

import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="w-full flex justify-between items-center"
      >
        <span className="text-left">{title}</span>
        <svg
          className="shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
