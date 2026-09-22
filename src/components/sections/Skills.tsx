import { motion } from "framer-motion";

const SkillCategory = ({ title, skills, color }: { title: string; skills: string[]; color: string }) => (
  <motion.div
    className="bg-white border-4 border-black p-5 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden"
    initial={{ opacity: 0, y: 40, rotate: -2 }}
    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
    viewport={{ once: true, amount: "some" }}
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <h3 className={`font-shrikhand text-xl mb-3 ${color} inline-block px-2 border-2 border-black rounded-md`}>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-gray-100 px-3 py-1 rounded-full border-2 border-black text-sm font-bold hover:bg-custom-green"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 px-4 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo"
    >
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand">SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory
          title="Languages"
          color="bg-custom-pink"
          skills={["Python", "TypeScript", "JavaScript", "SQL"]}
        />
        <SkillCategory
          title="AI & ML"
          color="bg-custom-blue"
          skills={["LLMs", "RAG Pipelines", "LangChain", "AI Agents", "PyTorch", "Pinecone"]}
        />
        <SkillCategory
          title="AI Dev Tools"
          color="bg-custom-green"
          skills={["Claude", "GitHub Copilot", "Cursor", "OpenAI SDK", "Anthropic SDK"]}
        />
        <SkillCategory
          title="Backend & Systems"
          color="bg-custom-yellow"
          skills={["FastAPI", "Node.js", "Microservices", "RESTful APIs", "Distributed Systems"]}
        />
        <SkillCategory
          title="DevOps & MLOps"
          color="bg-purple-300"
          skills={["Docker", "Kubernetes", "CI/CD", "AWS", "Git/GitHub"]}
        />
        <SkillCategory
          title="Practices"
          color="bg-custom-red"
          skills={["Agile", "TDD", "OOP", "System Design"]}
        />
      </div>
    </section>
  );
};

export default Skills;
