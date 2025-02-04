import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐", proficiency: 90 },
      { name: "CSS", icon: "🎨", proficiency: 85 },
      { name: "JavaScript", icon: "📜", proficiency: 88 },
      { name: "ReactJS", icon: "⚛️", proficiency: 85 },
      { name: "TypeScript", icon: "📘", proficiency: 82 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "🐍", proficiency: 85 },
      { name: "Java", icon: "☕", proficiency: 88 },
      { name: "JDBC", icon: "🔌", proficiency: 80 },
      { name: "Servlets", icon: "🌐", proficiency: 82 },
      { name: "Spring", icon: "🍃", proficiency: 85 },
      { name: "SpringBoot", icon: "🚀", proficiency: 84 },
      { name: "Microservices", icon: "🔄", proficiency: 80 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "💾", proficiency: 85 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "🐳", proficiency: 82 },
      { name: "Jenkins", icon: "🔧", proficiency: 80 },
      { name: "AWS EC2", icon: "☁️", proficiency: 78 },
      { name: "AWS Lambda", icon: "λ", proficiency: 75 },
      { name: "AWS RDS", icon: "🗄️", proficiency: 77 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Technical <span className="text-gradient">Expertise</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#9b87f5]">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-[rgba(255,255,255,0.03)] rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[#9b87f5] font-semibold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;