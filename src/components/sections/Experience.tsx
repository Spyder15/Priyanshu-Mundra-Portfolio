import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "SDE II",
      company: "Cloudify",
      duration: "Dec 2025 – Jun 2026",
      location: "Remote",
      description:
        "Built AI-powered client applications with OpenAI and Anthropic SDKs — LLM features, chat/assistant flows, and agentic automations. Designed RAG-style retrieval and prompt pipelines to ground model outputs on client data. Cut operational costs by 70% by migrating workloads to self-hosted infrastructure, including self-hosted model/inference serving.",
      color: "bg-custom-pink",
    },
    {
      role: "Chief Technology Officer",
      company: "PolluxChain",
      duration: "Sep 2024 – Mar 2026",
      location: "Gurugram, India",
      description:
        "Leading blockchain architecture, ensuring scalability, security, and efficiency. Driving innovation in Web3 and DeFi solutions, overseeing smart contract development and security protocols, and managing technical teams to grow the ecosystem and its Polink wallet.",
      color: "bg-custom-purple",
    },
    {
      role: "Chief Technology Officer",
      company: "Giichi IT Solution",
      duration: "Jul 2024 – Mar 2026",
      location: "On-site",
      description:
        "Led the company's technology strategy, introducing DeFi, decentralized gaming, and enterprise blockchain on EVM and non-EVM chains. Designed margin trading & derivatives modules for the company's exchange platform, and helped drive over $1M in annual revenue by expanding engineering capabilities.",
      color: "bg-custom-red",
    },
    {
      role: "Team Lead / AI Engineer",
      company: "Giichi IT Solution",
      duration: "Jan 2024 – Dec 2025",
      location: "On-site",
      description:
        "Led end-to-end architecture and delivery of enterprise cloud applications with AI at the core — integrating LLM features, RAG retrieval, and vector search. Built event-driven data and embedding pipelines that boosted platform processing efficiency by 30%. Rolled out AI-assisted development across the team and led sprint code reviews.",
      color: "bg-custom-blue",
    },
    {
      role: "DeFi Protocol Lead",
      company: "ZebraSwap",
      duration: "Aug 2024 – May 2025",
      location: "Dubai, UAE",
      description:
        "Led the development and architecture of decentralized finance solutions — spearheading smart contract development, protocol design, and cross-chain integrations. Drove innovation in automated market makers (AMMs), yield farming strategies, and secure on-chain execution.",
      color: "bg-custom-green",
    },
    {
      role: "Senior Software Engineer, AI & Backend",
      company: "PlutoPe",
      duration: "Sep 2022 – Dec 2023",
      location: "On-site",
      description:
        "Maintained secure, synchronized transaction APIs and backend routing engines, sustaining 99.9% processing uptime. Built the backend serving layer for AI features — model inference endpoints, thread-safe background workers, and self-healing task systems. Authored OpenAPI schemas and mentored junior engineers on AI integrations.",
      color: "bg-custom-yellow",
    },
  ];

  return (
    <section id="experience" className="py-10 px-4 max-w-7xl mx-auto w-full relative">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-yellow px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand italic uppercase tracking-wide">EXPERIENCE</h2>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 pb-8">
        <div className="flex flex-col gap-12 lg:gap-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col items-start gap-4 z-10">
                <div className="inline-flex items-center gap-3 bg-gray-100 px-5 py-2 border-4 border-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-sm md:text-base">
                  <FaCalendarAlt className="text-black" />
                  <span>{exp.duration}</span>
                </div>

                <div className="flex items-center gap-2 font-bold text-sm md:text-base text-gray-800 ml-2">
                  <FaMapMarkerAlt className="text-black text-lg flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="hidden lg:block absolute top-6 left-[260px] w-16 h-1 bg-black z-0 border-t-4 border-black group-hover:bg-custom-yellow transition-colors"></div>

              {index !== experiences.length - 1 && (
                <div className="hidden lg:block absolute top-[40px] -bottom-[80px] left-[260px] w-16 -z-10 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 50 0 C 120 25, -20 75, 50 100"
                      stroke="black"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 12"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}

              <div className="w-full flex-grow border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col h-full relative bg-white">
                <div className={`border-b-4 border-black px-3 py-2 flex justify-between items-center ${exp.color}`}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">
                    experience.exe
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl italic leading-tight mb-5 tracking-wide text-black font-shrikhand">
                    {exp.role}
                  </h3>

                  <div
                    className={`inline-block ${exp.color} px-5 py-2 border-4 border-black rounded-full font-bold text-lg md:text-xl shadow-[4px_4px_0_rgba(0,0,0,1)] mb-8 tracking-wide w-fit`}
                  >
                    {exp.company}
                  </div>

                  <div className="bg-gray-50 border-4 border-black rounded-xl p-5 md:p-6 shadow-sm relative overflow-hidden">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black"></div>
                    </div>

                    <p className="font-sans text-base md:text-lg font-bold leading-relaxed text-gray-900">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
