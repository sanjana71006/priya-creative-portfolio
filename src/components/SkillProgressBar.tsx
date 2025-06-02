
import { useEffect, useState } from 'react';

interface SkillProgressBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const SkillProgressBar = ({ skill, level, delay = 0 }: SkillProgressBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const animationTimer = setTimeout(() => {
        setAnimatedLevel(level);
      }, 100);
      return () => clearTimeout(animationTimer);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-sm">{skill}</span>
        <span className="text-pink-300 text-sm font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${animatedLevel}%`,
            transition: `width 1000ms ease-out ${delay * 1000 + 100}ms`
          }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;
