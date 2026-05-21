"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs
} from "react-icons/fa"

import { motion } from "framer-motion"

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [openFolder, setOpenFolder] = useState(null)


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)

  }, [])

  return (

    <>
      {
        loading ? (

          <div
            className="
              fixed
              inset-0
              z-[999]
              bg-gradient-to-br
              from-[#020617]
              via-[#111827]
              to-[#312e81]
              flex
              flex-col
              items-center
              justify-center
              overflow-hidden
            "
          >

            {/* GLOW */}
            <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]"></div>

            {/* LOGO */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="
                text-5xl
                md:text-7xl
                font-extrabold
                mb-16
                bg-gradient-to-r
                from-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Fadhil.Portfolio
            </motion.h1>

            {/* ICONS */}
            <div className="flex gap-10 text-6xl md:text-7xl">

              {/* HTML */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="text-orange-500"
              >
                <FaHtml5 />
              </motion.div>

              {/* CSS */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.2
                }}
                className="text-blue-500"
              >
                <FaCss3Alt />
              </motion.div>

              {/* JS */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.4
                }}
                className="text-yellow-400"
              >
                <FaJs />
              </motion.div>

              {/* REACT */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6
                }}
                className="text-cyan-400"
              >
                <FaReact />
              </motion.div>

            </div>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 1
              }}
              className="
                mt-16
                text-gray-300
                tracking-[5px]
                uppercase
              "
            >
              Loading Portfolio...
            </motion.p>

          </div>

        ) : (

          <div className="overflow-hidden">

            <Navbar />

           {/* HOME */}
<section
  id="home"
  className="
    min-h-screen
    bg-gradient-to-br
    from-[#020617]
    via-[#111827]
    to-[#312e81]
    text-white
    flex
    items-center
    relative
    overflow-hidden
  "
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"></div>

  <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"></div>

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >

      <p className="text-blue-400 text-xl mb-3">
        Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">

        Achmad Fadhil
        <span className="block text-purple-400">
          Izzuddin Attamimi
        </span>

      </h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">

        Frontend Developer yang suka membuat website modern,
        aesthetic, responsive, dan interaktif menggunakan
        Next.js serta Tailwind CSS.

      </p>

      {/* BUTTON */}
      <div className="flex flex-wrap gap-5">

        {/* HIRE ME */}
        <a href="#contact">

          <button
            className="
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              px-7
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              duration-300
              shadow-2xl
              shadow-purple-500/30
            "
          >
            Hire Me
          </button>

        </a>

        {/* PROJECT */}
        <a href="#project">

          <button
            className="
              border
              border-purple-500
              px-7
              py-4
              rounded-2xl
              hover:bg-purple-600
              hover:border-purple-600
              transition
              duration-300
            "
          >
            My Projects
          </button>

        </a>

      </div>

    </motion.div>

    {/* FOTO */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >

      <div className="relative flex justify-center items-center">

        {/* GLOW */}
        <div className="
          absolute
          w-[400px]
          h-[400px]
          bg-purple-500/30
          blur-[120px]
          rounded-full
        ">
        </div>

        {/* FOTO */}
        <img
          src="/fadhil.png"
          alt="profile"
          className="
            relative
            w-[420px]
            md:w-[500px]
            drop-shadow-[0_0_80px_rgba(168,85,247,0.8)]
            hover:scale-105
            transition
            duration-500
            object-contain
          "
        />

      </div>

    </motion.div>

  </div>

</section>


      {/* ABOUT */}
<section
  id="about"
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-gradient-to-b
    from-[#020617]
    via-[#0f172a]
    to-[#111827]
    text-white
    flex
    items-center
    py-24
  "
>

  {/* BACKGROUND BLUR */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"></div>

  <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"></div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

    {/* FOTO */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >

      <div className="relative group">

        {/* GLOW */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-pink-500
          rounded-[40px]
          blur-2xl
          opacity-40
          group-hover:opacity-70
          transition
          duration-500
        ">
        </div>

        {/* BORDER ANIMATION */}
        <div className="
          absolute
          -inset-1
          rounded-[40px]
          bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-pink-500
          animate-pulse
        ">
        </div>

        {/* FOTO */}
        <div className="
          relative
          bg-[#0f172a]
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
          backdrop-blur-xl
          p-3
        ">
<img
  src="/fadhil seragam.jpeg"
  alt="about"
  className="
    w-[260px]
    md:w-[320px]
    object-cover
    rounded-[30px]
    hover:scale-105
    transition
    duration-700
  "
/>

        </div>

        {/* FLOATING CARD */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          className="
            absolute
            -bottom-8
            -right-5
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            px-6
            py-4
            rounded-2xl
            shadow-2xl
          "
        >

          <h3 className="text-xl font-bold text-purple-400">
            Mahasiswa
          </h3>

          <p className="text-gray-300 text-sm">
            Politeknik Negeri Malang, Teknik Informatika
          </p>

        </motion.div>

      </div>

    </motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      <p className="text-purple-400 font-semibold mb-4 tracking-[4px] uppercase">
        About Me
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">

        Creating Modern &
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {" "}Interactive
        </span>
        {" "}Web Experiences

      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">

        Saya adalah seorang Frontend Developer yang fokus membuat
        website modern, responsive, aesthetic, dan interaktif
        menggunakan teknologi terbaru seperti Next.js dan Tailwind CSS.

      </p>

      <p className="text-gray-400 text-lg leading-relaxed mb-10">

        Saya menyukai dunia UI/UX, animasi website, dan selalu tertarik
        mempelajari teknologi baru untuk menciptakan pengalaman pengguna
        yang lebih menarik dan nyaman.

      </p>

      {/* SKILL */}
      <div className="flex flex-wrap gap-5">

        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Framer Motion"
        ].map((skill, index) => (

          <motion.span
            key={index}

            whileHover={{
              scale: 1.1,
              rotate: 3
            }}

            className="
              bg-white/10
              backdrop-blur-lg
              border
              border-white/10
              px-6
              py-3
              rounded-2xl
              shadow-lg
              hover:shadow-purple-500/30
              transition
              duration-300
              cursor-pointer
            "
          >
            {skill}
          </motion.span>

        ))}

      </div>

    </motion.div>

  </div>

</section>

      {/* PROJECT */}
<section
  id="project"
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-gradient-to-b
    from-[#111827]
    via-[#1e1b4b]
    to-[#020617]
    py-28
    text-white
  "
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <p className="text-purple-400 tracking-[5px] uppercase font-semibold mb-4">
        Portfolio
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
        My Projects
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Beberapa project modern yang pernah saya buat menggunakan
        teknologi terbaru dengan desain UI yang menarik.
      </p>

    </motion.div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ y: -15 }}
        className="
          group
          relative
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-[30px]
          overflow-hidden
          shadow-2xl
          hover:shadow-purple-500/30
          transition
          duration-500
        "
      >

        {/* IMAGE */}
        <div className="overflow-hidden relative">

          <img
            src="/website sekolah.jpeg"
            alt="project"
            className="
              w-full
              h-60
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />

          {/* OVERLAY */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            to-transparent
          ">
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-7">

          <h3 className="text-2xl font-bold mb-4">
            Website Sekolah
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Website sekolah modern menggunakan Laravel dan Bootstrap
            dengan tampilan admin dan guest.
          </p>

          {/* BUTTON */}
          <button
            onClick={() =>
              document.getElementById("popup1").classList.remove("hidden")
            }
            className="
              w-full
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              duration-300
              shadow-lg
            "
          >
            View Project
          </button>

        </div>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        whileHover={{ y: -15 }}
        className="
          group
          relative
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-[30px]
          overflow-hidden
          shadow-2xl
          hover:shadow-blue-500/30
          transition
          duration-500
        "
      >

        <div className="overflow-hidden relative">

          <img
            src="/portofolio.png"
            alt="project"
            className="
              w-full
              h-60
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            to-transparent
          ">
          </div>

        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold mb-4">
            Portfolio Website
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Portfolio modern menggunakan Next.js dan Tailwind CSS
            dengan animasi premium.
          </p>

          <button
            onClick={() =>
              document.getElementById("popup2").classList.remove("hidden")
            }
            className="
              w-full
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              duration-300
            "
          >
            View Project
          </button>

        </div>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -15 }}
        className="
          group
          relative
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-[30px]
          overflow-hidden
          shadow-2xl
          hover:shadow-pink-500/30
          transition
          duration-500
        "
      >

        <div className="overflow-hidden relative">

          <img
            src="/login.png"
            alt="project"
            className="
              w-full
              h-60
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            to-transparent
          ">
          </div>

        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold mb-4">
            Website penjualan elektronik
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            Website penjualan elektronik modern menggunakan Laravel dengan database SQL
            yang memiliki 3 role yaitu admin, pelanggan, dan guest.
          </p>

          <button
            onClick={() =>
              document.getElementById("popup3").classList.remove("hidden")
            }
            className="
              w-full
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition
              duration-300
            "
          >
            View Project
          </button>

        </div>

      </motion.div>

    </div>

  </div>

  {/* POPUP 1 */}
  <div
    id="popup1"
    className="
      hidden
      fixed
      inset-0
      bg-black/80
      backdrop-blur-md
      z-50
      flex
      items-center
      justify-center
      p-6
    "
  >

    <div className="relative max-w-5xl w-full">

      <button
        onClick={() =>
          document.getElementById("popup1").classList.add("hidden")
        }
        className="
          absolute
          -top-14
          right-0
          text-white
          text-5xl
          hover:text-red-400
        "
      >
        ×
      </button>

      <img
        src="/dashboard.png"
        alt="popup"
        className="
          w-full
          rounded-3xl
          shadow-[0_0_60px_rgba(168,85,247,0.5)]
        "
      />

    </div>

  </div>

  {/* POPUP 2 */}
  <div
    id="popup2"
    className="
      hidden
      fixed
      inset-0
      bg-black/80
      backdrop-blur-md
      z-50
      flex
      items-center
      justify-center
      p-6
    "
  >

    <div className="relative max-w-5xl w-full">

      <button
        onClick={() =>
          document.getElementById("popup2").classList.add("hidden")
        }
        className="
          absolute
          -top-14
          right-0
          text-white
          text-5xl
          hover:text-red-400
        "
      >
        ×
      </button>

      <img
        src="/login.png"
        alt="popup"
        className="
          w-full
          rounded-3xl
          shadow-[0_0_60px_rgba(59,130,246,0.5)]
        "
      />

    </div>

  </div>

  {/* POPUP 3 */}
  <div
    id="popup3"
    className="
      hidden
      fixed
      inset-0
      bg-black/80
      backdrop-blur-md
      z-50
      flex
      items-center
      justify-center
      p-6
    "
  >

    <div className="relative max-w-5xl w-full">

      <button
        onClick={() =>
          document.getElementById("popup3").classList.add("hidden")
        }
        className="
          absolute
          -top-14
          right-0
          text-white
          text-5xl
          hover:text-red-400
        "
      >
        ×
      </button>

      <img
        src="/katagori.png"
        alt="popup"
        className="
          w-full
          rounded-3xl
          shadow-[0_0_60px_rgba(236,72,153,0.5)]
        "
      />

    </div>

  </div>

</section>

{/* JOURNEY / TIMELINE */}
<section
  id="journey"
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-[#020617]
    via-[#111827]
    to-[#1e1b4b]
    text-white
    py-32
    px-6
  "
>

  {/* GRID BACKGROUND */}
  <div
    className="
      absolute
      inset-0
      opacity-[0.05]
      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:40px_40px]
    "
  />

  {/* GLOW */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-28"
    >

      <p className="text-purple-400 tracking-[5px] uppercase mb-4 font-semibold">
        Career Timeline
      </p>

      <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
        My Journey
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        Perjalanan pendidikan dan pengalaman saya dalam dunia
        teknologi serta pengembangan website modern.
      </p>

    </motion.div>

    {/* TIMELINE */}
    <div className="relative">

      {/* CENTER LINE */}
      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[3px]
          h-full
          bg-gradient-to-b
          from-blue-500
          via-purple-500
          to-pink-500
          rounded-full
          hidden md:block
        "
      />

      {/* ===== ITEM 1 ===== */}
      <div className="grid md:grid-cols-2 gap-14 items-center mb-32">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >

          <h1
            className="
              text-7xl
              md:text-8xl
              font-extrabold
              text-transparent
              mb-8
              bg-gradient-to-r
              from-blue-400
              to-purple-500
              bg-clip-text
            "
          >
            2026
          </h1>

          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 2
            }}
            className="inline-block"
          >

            <div className="text-7xl mb-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
              🎓
            </div>

            <p className="text-gray-400 tracking-[3px] uppercase text-sm">
              Future Journey
            </p>

          </motion.div>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[35px]
            p-10
            shadow-2xl
            hover:shadow-purple-500/20
            transition
            duration-500
          "
        >

          <div className="
            absolute
            top-0
            right-0
            w-40
            h-40
            bg-purple-500/20
            blur-[90px]
            rounded-full
          "></div>

          <div className="relative z-10">

            <span
              className="
                px-4
                py-2
                rounded-full
                text-xs
                bg-purple-500/20
                border
                border-purple-500/20
                tracking-[2px]
                uppercase
                text-purple-300
              "
            >
              Mahasiswa
            </span>

            <h2 className="text-4xl font-extrabold mt-8 mb-4">
              Politeknik Negeri Malang
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Jurusan Teknik Informatika dengan fokus pada
              pengembangan website modern dan UI/UX Design.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "Tailwind",
                "UI/UX"
              ].map((item, index) => (

                <span
                  key={index}
                  className="
                    px-4
                    py-2
                    text-sm
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-gray-300
                    hover:bg-purple-500/20
                    transition
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

      {/* DOT */}
      <div className="hidden md:block absolute left-1/2 top-[20%] -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 border-4 border-[#111827] shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>

      {/* ===== ITEM 2 ===== */}
      <div className="grid md:grid-cols-2 gap-14 items-center mb-32">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[35px]
            p-10
            shadow-2xl
            hover:shadow-blue-500/20
            transition
            duration-500
          "
        >

          <div className="
            absolute
            top-0
            left-0
            w-40
            h-40
            bg-blue-500/20
            blur-[90px]
            rounded-full
          "></div>

          <div className="relative z-10">

            <span
              className="
                px-4
                py-2
                rounded-full
                text-xs
                bg-blue-500/20
                border
                border-blue-500/20
                tracking-[2px]
                uppercase
                text-blue-300
              "
            >
              Siswa
            </span>

            <h2 className="text-4xl font-extrabold mt-8 mb-4">
              SMK Negeri 6 Malang
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Jurusan Rekayasa Perangkat Lunak dan mulai
              mempelajari frontend serta backend development.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "Laravel",
                "MySQL",
                "React JS",
                "Mobile Apps"
              ].map((item, index) => (

                <span
                  key={index}
                  className="
                    px-4
                    py-2
                    text-sm
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-gray-300
                    hover:bg-blue-500/20
                    transition
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >

          <h1
            className="
              text-7xl
              md:text-8xl
              font-extrabold
              text-transparent
              mb-8
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
            "
          >
            2023
          </h1>

          <div className="text-7xl mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            💻
          </div>

          <p className="text-gray-400 tracking-[3px] uppercase text-sm">
            Start Coding
          </p>

        </motion.div>

      </div>

      {/* DOT */}
      <div className="hidden md:block absolute left-1/2 top-[55%] -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#111827] shadow-[0_0_20px_rgba(59,130,246,0.9)]"></div>

      {/* ===== ITEM 3 ===== */}
      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >

          <h1
            className="
              text-7xl
              md:text-8xl
              font-extrabold
              text-transparent
              mb-8
              bg-gradient-to-r
              from-pink-400
              to-purple-500
              bg-clip-text
            "
          >
            2025
          </h1>

          <div className="text-7xl mb-4 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
            🚀
          </div>

          <p className="text-gray-400 tracking-[3px] uppercase text-sm">
            Internship Experience
          </p>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/10
            rounded-[35px]
            p-10
            shadow-2xl
            hover:shadow-pink-500/20
            transition
            duration-500
          "
        >

          <div className="
            absolute
            bottom-0
            right-0
            w-40
            h-40
            bg-pink-500/20
            blur-[90px]
            rounded-full
          "></div>

          <div className="relative z-10">

            <span
              className="
                px-4
                py-2
                rounded-full
                text-xs
                bg-pink-500/20
                border
                border-pink-500/20
                tracking-[2px]
                uppercase
                text-pink-300
              "
            >
              PKL / Internship
            </span>

            <h2 className="text-4xl font-extrabold mt-8 mb-4">
              Inbis Maninjau
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Membuat konten media sosial, side pages,
              packing produk customer, serta membantu
              kebutuhan publikasi digital perusahaan.
            </p>

            <div className="flex flex-wrap gap-3">

              {[
                "UI Design",
                "Figma",
                "Canva",
                "CapCut"
              ].map((item, index) => (

                <span
                  key={index}
                  className="
                    px-4
                    py-2
                    text-sm
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-gray-300
                    hover:bg-pink-500/20
                    transition
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

      {/* DOT */}
      <div className="hidden md:block absolute left-1/2 bottom-5 -translate-x-1/2 w-6 h-6 rounded-full bg-pink-500 border-4 border-[#111827] shadow-[0_0_20px_rgba(236,72,153,0.9)]"></div>

    </div>

  </div>

</section>
      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen bg-gradient-to-b from-[#312e81] to-[#020617] text-white flex items-center py-20"
      >

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <h2 className="text-5xl font-bold mb-6">
              Contact Me
            </h2>

            <p className="text-gray-300 text-lg mb-10">
              Jika tertarik bekerja sama atau ingin bertanya,
              silakan hubungi saya melalui email atau sosial media.
            </p>

            <div className="flex flex-col gap-6">

              <a
                href="mailto:fadhil4ttamimi@gmail.com"
                className="flex items-center gap-4 text-lg hover:text-blue-400 transition"
              >
                <FaEnvelope size={28} />
                fadhil4ttamimi@gmail.com
              </a>

              <a
                href="https://instagram.com/fdhilsh"
                target="_blank"
                className="flex items-center gap-4 text-lg hover:text-pink-400 transition"
              >
                <FaInstagram size={28} />
                @fdhilsh
              </a>

              <a
                href="https://wa.me/6281913843980"
                target="_blank"
                className="flex items-center gap-4 text-lg hover:text-green-400 transition"
              >
                <FaWhatsapp size={28} />
                +62 819-1384-3980
              </a>

            </div>

          </motion.div>

          {/* CV CARD */}
<motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="
    relative
    bg-white/10
    backdrop-blur-2xl
    border
    border-white/10
    p-10
    rounded-[35px]
    shadow-2xl
    overflow-hidden
  "
>

  {/* GLOW */}
  <div className="
    absolute
    top-0
    right-0
    w-52
    h-52
    bg-purple-500/20
    blur-[100px]
    rounded-full
  ">
  </div>

  <div className="relative z-10">

    <p className="text-purple-400 tracking-[4px] uppercase font-semibold mb-4">
      Resume
    </p>

    <h2 className="text-4xl font-extrabold mb-6 leading-tight">
      Download My CV
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed mb-10">
      Unduh CV saya untuk melihat pengalaman,
      skill, dan project yang pernah saya kerjakan
      sebagai Frontend Developer.
    </p>

    {/* CV IMAGE */}
    <div className="
      bg-black/30
      border
      border-white/10
      rounded-3xl
      p-5
      mb-10
      hover:scale-105
      transition
      duration-500
    ">

       <img
    src="/cv.png"
    alt="cv"
    className="
      w-[220px]
      rounded-2xl
      shadow-2xl
      hover:scale-105
      transition
      duration-500
    "
  />
    </div>

    {/* BUTTON DOWNLOAD */}
    <a
      href="/CV Achmad Fadhil Izzuddin Attamimi.pdf"
      download
      className="
        flex
        items-center
        justify-center
        gap-3
        bg-gradient-to-r
        from-blue-500
        to-purple-600
        py-5
        rounded-2xl
        text-lg
        font-bold
        hover:scale-105
        transition
        duration-300
        shadow-xl
        shadow-purple-500/30
      "
    >

      ⬇ Download CV

      </a>

  </div>

</motion.div>

        </div>

      </section>

          </div>

        )
      }

    </>

  )
}
