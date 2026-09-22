import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactModal from "../ui/ContactModal";
import MiniTerminal from "../ui/MiniTerminal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
      <motion.div
        className="w-full md:w-1/3 bg-white border-2 border-b-4 border-r-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/50 w-20 h-6 rotate-[-5deg] border border-gray-400"></div>

        <motion.div
          className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl font-shrikhand overflow-hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
        >
          <img
            src="/images/priyanshu-photo.png"
            alt="Priyanshu Mundra"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <h1 className="text-4xl font-shrikhand mb-1">PRIYANSHU MUNDRA</h1>
        <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
          AI_BACKEND_BLOCKCHAIN_ENGINEER()
        </div>

        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">
          <div>
            <span className="bg-custom-yellow px-1 border border-black mr-2">[LOCATION]</span>
            GURUGRAM, INDIA
          </div>
          <div>
            <span className="bg-custom-green px-1 border border-black mr-2">[STATUS]</span>
            OPEN TO OPPORTUNITIES
          </div>
          <div>
            <span className="bg-custom-blue px-1 border border-black mr-2">[MISSION]</span>
            Building Scalable AI, Backend &amp; Web3 Systems
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 mt-6">
          <a
            href="/Priyanshu_Mundra_Resume.pdf"
            download
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaEnvelope /> DOWNLOAD RESUME
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-custom-red text-white w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaEnvelope /> CONTACT ME
          </button>
        </div>

        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center">
          <a
            href="mailto:mundrapriyanshu15@gmail.com"
            aria-label="Email Priyanshu"
            className="hover:scale-110 transition-transform text-red-500"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919211370774"
            aria-label="Call Priyanshu"
            className="hover:scale-110 transition-transform text-green-600"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Priyanshu's GitHub"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-mundra"
            target="_blank"
            rel="noreferrer"
            aria-label="Priyanshu's LinkedIn"
            className="hover:scale-110 transition-transform text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-2/3 flex flex-col gap-6"
        id="about"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo">
          <h2 className="text-4xl font-shrikhand mb-6">Hi people!</h2>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I'm Priyanshu, an{" "}
            <span className="font-bold bg-white px-1 border border-black">
              AI, Backend, and Blockchain Engineer
            </span>{" "}
            passionate about building scalable software and intelligent systems.
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I specialize in backend engineering, distributed systems, AI-powered applications using LLMs,
            RAG, and AI agents — along with blockchain infrastructure and smart contracts. I enjoy
            designing secure, high-performance systems that solve real-world problems, and I use AI dev
            tools like Claude, GitHub Copilot, and Cursor daily to accelerate delivery.
          </p>
          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm">
            🚀 Open to Backend, AI & Blockchain Engineering opportunities
          </div>
        </div>

        <MiniTerminal />
      </motion.div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
