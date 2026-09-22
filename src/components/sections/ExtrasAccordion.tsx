import { useState } from "react";
import Achievements from "./Achievements";
import EarlierExperience from "./EarlierExperience";

const ExtrasAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="extras" className="flex flex-col gap-12 w-full overflow-hidden pb-10">
      <Achievements isOpen={expandedId === "achievements"} onToggle={() => toggleSection("achievements")} />
      <EarlierExperience isOpen={expandedId === "earlier"} onToggle={() => toggleSection("earlier")} />
    </div>
  );
};

export default ExtrasAccordion;
