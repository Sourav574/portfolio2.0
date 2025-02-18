import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Python", "TensorFlow", "React"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
