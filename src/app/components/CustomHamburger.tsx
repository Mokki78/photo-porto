import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CustomHamburger = ({ isOpen, setIsOpen }: Props) => {
  const genericHamburgerLine = `h-1 w-8 my-0.5 rounded-full bg-white transition ease-in-out duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default CustomHamburger;
