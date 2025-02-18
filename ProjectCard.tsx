import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  demoUrl,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {demoUrl && (
            <Button variant="outline" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code 
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
