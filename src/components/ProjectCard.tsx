
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
      className="backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden sparkle-card"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 sparkle-text">
            {project.title}
          </h3>
          <p className="text-white opacity-90 mb-4 text-sm leading-relaxed sparkle-text">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-xs text-pink-200 border border-pink-300/20 hover:scale-110 transition-transform duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 mt-auto">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-black text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gray-500/25 rounded-xl"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 rounded-xl"
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
