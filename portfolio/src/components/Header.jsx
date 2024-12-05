import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resume from '../assets/pratham_paleriya_SDE.pdf'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change 50 to adjust when the effect starts
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header
      className={`fixed w-full lg:h-[88px] flex justify-between items-center lg:px-20 lg:py-3 ${
        isScrolled
          ? "bg-white bg-opacity-20 backdrop-blur-lg"
          : "bg-transparent"
      } z-50`}
    >
      <div className="lg:text-xl font-serif">Pratham's Portfolio</div>
      <motion.a
        whileHover={{}}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring" }}
        className="px-10 py-2 font-sans font-bold bg-pblue rounded-full text-white animate-gradient-bg cursor-pointer"
        href={resume} download
      >
        Resume
      </motion.a>
    </header>
  );
}

export default Header;
