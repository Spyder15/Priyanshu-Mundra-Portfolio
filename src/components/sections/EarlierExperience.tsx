import { AnimatePresence, motion } from "framer-motion";

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const EarlierExperience: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  const roles = [
    {
      company: "OranetAI",
      title: "Software Engineer",
      duration: "Nov 2022 – Aug 2023",
      description:
        "Built a SaaS restaurant-management platform from scratch — a single online/offline point of software covering end-to-end restaurant operations.",
      color: "bg-custom-yellow",
    },
    {
      company: "Self-Employed",
      title: "Software Engineering Consultant",
      duration: "Dec 2022 – Mar 2025",
      description:
        "Advised tech startups on full-stack and mobile app development (React Native, Flutter), blockchain (Solana, Rust), and cloud data management (GCP, AWS), including LLM/AI integrations.",
      color: "bg-custom-green",
    },
    {
      company: "Fiverr",
      title: "Solidity Smart Contract Developer",
      duration: "Oct 2022 – Oct 2023",
      description:
        "Deployed ERC-20/721/1155 contracts on OpenZeppelin; handled migrations and testing with Truffle/Hardhat, blockchain integrations via Infura/ConsenSys nodes.",
      color: "bg-custom-blue",
    },
    {
      company: "onchain.vc",
      title: "Blockchain Developer",
      duration: "Feb 2022 – Aug 2023",
      description:
        "Designed and implemented smart contracts and blockchain solutions in Solidity and Rust; built and maintained APIs to interact with on-chain infrastructure.",
      color: "bg-custom-pink",
    },
    {
      company: "Solana Labs",
      title: "Solana Collective Member",
      duration: "Jun 2022 – Aug 2023",
      description:
        "Contributed to the Solana ecosystem, collaborating with core teams on projects and initiatives driving the growth of the Solana blockchain.",
      color: "bg-custom-purple",
    },
    {
      company: "BizThon: The Global Business Hackathon",
      title: "Lead Developer Relations",
      duration: "Jul 2024 – Dec 2024",
      description:
        "Empowered developers through education, community building, and advocacy to drive platform adoption; hosted workshops and technical content.",
      color: "bg-custom-yellow",
    },
    {
      company: "Eduhub Community",
      title: "DevRel",
      duration: "Jun 2022 – Nov 2022",
      description:
        "Grew the Discord community to 1.5k members, learning how to build engaged audiences and communicate complex technical ideas clearly.",
      color: "bg-custom-green",
    },
    {
      company: "NoBroker.com",
      title: "React.js Intern",
      duration: "Feb 2022 – Apr 2022",
      description:
        "Built the web frontend in Next.js/React with a mobile-first approach; implemented an autocomplete search API on the ELK stack with ~3ms latency.",
      color: "bg-custom-red",
    },
    {
      company: "Goldman Sachs",
      title: "Engineering Intern",
      duration: "Nov 2021 – Dec 2021",
      description:
        "Researched industry-standard password-hashing techniques and recommended changes to harden transaction security against credential attacks.",
      color: "bg-purple-300",
    },
    {
      company: "Scaler",
      title: "Community Growth Intern",
      duration: "Jun 2021 – Dec 2021",
      description:
        "Developed and managed a student community, ran online campaigns, hosted hackathons and workshops, and executed social media growth strategy.",
      color: "bg-custom-blue",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-[95%] md:w-[85%] lg:w-[75%] relative bg-custom-purple border-4 border-l-0 border-black shadow-neo"
    >
      <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-6">
        <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">Earlier Experience</h2>
        <button
          onClick={onToggle}
          className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
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
            <div className="px-6 md:px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <div
                  key={role.company}
                  className="bg-white border-4 border-black rounded-2xl p-5 shadow-neo-sm"
                >
                  <div className={`inline-block ${role.color} px-3 py-1 border-2 border-black rounded-full font-bold text-sm mb-3`}>
                    {role.company}
                  </div>
                  <h3 className="font-shrikhand text-lg mb-1">{role.title}</h3>
                  <p className="font-mono text-xs font-bold text-gray-600 mb-3">{role.duration}</p>
                  <p className="text-sm font-medium leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default EarlierExperience;
