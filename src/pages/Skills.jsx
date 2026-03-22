import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 300);
  }, []);

  const skills = [
    { name: "Java", level: 55 },
    { name: "Python", level: 70 },
    { name: "Scikit-learn", level: 65 },
    { name: "LangGraph", level: 70 },
    { name: "MySQL", level: 70 },
  ];

  // 🎨 COLOR LOGIC
  const getColor = (level) => {
    if (level < 60) return "bg-red-500";      // Low
    if (level < 70) return "bg-yellow-400";   // Medium
    return "bg-green-500";                    // High
  };

  const getGlow = (level) => {
    if (level < 60) return "hover:shadow-[0_0_10px_#ef4444]";
    if (level < 70) return "hover:shadow-[0_0_10px_#facc15]";
    return "hover:shadow-[0_0_10px_#22c55e]";
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl text-neonBlue font-bold glow text-center">
        Skills
      </h1>

      <div className="mt-10 space-y-6 max-w-2xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i}>
            
            {/* NAME + % */}
            <div className="flex justify-between mb-2">
              <p className="text-gray-300">{skill.name}</p>
              <p className="text-gray-400">{skill.level}%</p>
            </div>

            {/* BAR */}
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-1000 
                            ${getColor(skill.level)} 
                            ${getGlow(skill.level)}`}
                style={{
                  width: load ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;