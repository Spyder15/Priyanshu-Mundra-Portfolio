const highlights = [
  "3+ years shipping Backend & AI systems",
  "Built an award-winning LLM chatbot",
  "Cut infra costs by 70% with self-hosted AI",
  "RAG pipelines, AI agents & scalable APIs",
];

const Marquee = () => {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10">
      <div className="animate-marquee flex w-max font-sans font-bold text-xl uppercase tracking-wide">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0">
            {highlights.map((highlight) => (
              <span key={`${group}-${highlight}`} className="mx-4">
                {highlight} •
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
