import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tools: string[];
  description: string[];
  featured?: boolean;
  color: string;
}

const ProjectCard = ({ title, tools, description, featured, color }: ProjectCardProps) => (
  <motion.div
    className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col"
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: "some" }}
    whileHover={{ scale: 1.03, rotate: 0.5 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
  >
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>

    <div className="mt-4 flex justify-between items-start mb-4 gap-2">
      <div>
        <h3 className="text-2xl font-shrikhand leading-tight">{title}</h3>
        {featured && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse inline-block mt-2">
            FEATURED
          </span>
        )}
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white border-2 border-black p-2 rounded-lg hover:bg-gray-800 transition-colors"
          title="Source Code"
        >
          <FaGithub />
        </a>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {tools.map((t) => (
        <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
          {t}
        </span>
      ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
      {description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </motion.div>
);

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "AI Customer-Support Chatbot",
      color: "bg-custom-blue",
      featured: true,
      tools: ["LLM", "NLP", "Node.js", "React"],
      description: [
        "Built a conversational LLM assistant with intent handling and context-aware responses.",
        "Won Best Chatbot Hack (sponsored by Travelers), wiring an NLP/LLM backend to a real-time React frontend.",
      ],
    },
    {
      title: "Google Cloud AI App",
      color: "bg-custom-green",
      featured: true,
      tools: ["Google Cloud", "AI/ML APIs"],
      description: [
        "Cloud-native application leveraging Google Cloud AI/ML services.",
        "Won Best Google Cloud Hack for AI-driven functionality and clean cloud architecture.",
      ],
    },
    {
      title: "PolluxChain + Polink Wallet",
      color: "bg-custom-purple",
      tools: ["Node.js", "Redis", "Solidity", "Web3"],
      description: [
        "Architected a Layer 1 blockchain and built the backend for Polink, its native crypto wallet.",
        "Designed high-throughput services with Redis caching, secure wallet APIs, and Solidity smart contracts.",
      ],
    },
    {
      title: "Restaurant Management SaaS",
      color: "bg-custom-yellow",
      tools: ["Node.js", "React", "SQL"],
      description: [
        "Full-stack online/offline POS and operations platform covering end-to-end restaurant workflows.",
        "Built offline-first sync with a single-point management dashboard.",
      ],
    },
    {
      title: "NFT Minting Platform",
      color: "bg-custom-pink",
      tools: ["Solidity", "OpenZeppelin", "Web3.js", "React"],
      description: [
        "ERC-721/ERC-1155 contracts using OpenZeppelin and Beacon Proxy for gas-efficient upgrades.",
        "Built a wallet-connect minting flow, tested with Truffle/Hardhat.",
      ],
    },
    {
      title: "ZebraSwap DeFi DEX",
      color: "bg-custom-red",
      tools: ["Solidity", "Web3", "EVM"],
      description: [
        "Built core DeFi protocol components — AMM logic, liquidity pools, and yield-farming strategies.",
        "Focused on secure on-chain execution and cross-chain integrations.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 px-4 mx-auto max-w-7xl bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand text-white">PROJECTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
