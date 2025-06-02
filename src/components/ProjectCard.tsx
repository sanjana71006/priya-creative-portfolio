
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card 
      className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white opacity-90 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-xs text-pink-200 border border-pink-300/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-auto">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-pink-300/30 text-pink-200 hover:bg-pink-500/20 hover:text-white transition-all duration-300"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
