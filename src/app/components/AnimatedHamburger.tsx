"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const AnimatedHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden color:white">
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        size={24}
        label="Toggle menu"
      />
    </div>
  );
};

export default AnimatedHamburger;
