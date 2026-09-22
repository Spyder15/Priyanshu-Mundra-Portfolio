import { motion, AnimatePresence } from "framer-motion";

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Achievements: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  const achievements = [
    "1st Place — BlueSprint (competitive build sprint)",
    "Best Chatbot Hack (sponsored by Travelers)",
    "Best Google Cloud Hack",
    "Top 10 Teams finish in a national-level hackathon",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-[95%] md:w-[85%] lg:w-[75%] ml-auto relative bg-custom-yellow border-4 border-r-0 border-black shadow-neo"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">ACHIEVEMENTS</h2>
        <button
          onClick={onToggle}
          className="bg-black text-custom-yellow px-6 py-2 font-bold border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-10">
              <div className="max-w-2xl mx-auto flex flex-col gap-4">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="bg-white font-bold px-5 py-4 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    🏆 {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Achievements;
