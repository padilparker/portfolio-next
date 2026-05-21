"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    let lastScrollY = window.scrollY

    const handleScroll = () => {

      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  const menuItems = (
    <>
      <li><a href="#home" className="hover:text-blue-400">Home</a></li>
      <li><a href="#about" className="hover:text-purple-400">About</a></li>
      <li><a href="#project" className="hover:text-pink-400">Project</a></li>
      <li><a href="#journey" className="hover:text-green-400">Journey</a></li>

      <li>
        <a
          href="#contact"
          className="
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            px-5
            py-2
            rounded-xl
            hover:scale-105
            transition
            duration-300
            shadow-lg
            shadow-purple-500/30
          "
        >
          Contact
        </a>
      </li>
    </>
  )

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.4 }}
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        md:w-[80%]
        backdrop-blur-xl
        bg-white/10
        border
        border-white/10
        shadow-[0_0_25px_rgba(168,85,247,0.2)]
        rounded-2xl
        px-6
        py-4
      "
    >

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="
            text-2xl
            font-extrabold
            bg-gradient-to-r
            from-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
            cursor-pointer
          "
        >
          Fadhil.Portfolio
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {menuItems}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              md:hidden
              mt-4
              flex
              flex-col
              gap-5
              text-white
              font-medium
              bg-white/10
              backdrop-blur-xl
              p-5
              rounded-xl
              border
              border-white/10
            "
          >
            {menuItems}
          </motion.ul>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}