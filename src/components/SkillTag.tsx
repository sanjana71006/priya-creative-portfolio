
interface SkillTagProps {
  skill: string;
  index: number;
}

const SkillTag = ({ skill, index }: SkillTagProps) => {
  const colors = [
    "from-pink-500 to-rose-500",
    "from-purple-500 to-indigo-500", 
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-yellow-500 to-orange-500",
    "from-red-500 to-pink-500"
  ];

  const colorClass = colors[index % colors.length];

  return (
    <span 
      className={`inline-block px-4 py-2 bg-gradient-to-r ${colorClass} rounded-full text-white text-sm font-medium transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl cursor-default`}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {skill}
    </span>
  );
};

export default SkillTag;
