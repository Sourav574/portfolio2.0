import { motion } from "framer-motion";
import SkillCard from "@/components/skills/SkillCard";
import { Code2, Database, Palette, Terminal } from "lucide-react";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SkillCard
          title="Frontend Development"
          level={90}
          icon={<Code2 className="h-4 w-4 text-primary" />}
        />
        <SkillCard
          title="Backend Development"
          level={85}
          icon={<Terminal className="h-4 w-4 text-primary" />}
        />
        <SkillCard
          title="Database Management"
          level={80}
          icon={<Database className="h-4 w-4 text-primary" />}
        />
        <SkillCard
          title="UI/UX Design"
          level={75}
          icon={<Palette className="h-4 w-4 text-primary" />}
        />
      </div>
    </motion.div>
  );
}
