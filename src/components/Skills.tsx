import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "ReactJS", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "JDBC", icon: "🔌" },
      { name: "Servlets", icon: "🌐" },
      { name: "Spring", icon: "🍃" },
      { name: "SpringBoot", icon: "🚀" },
      { name: "Microservices", icon: "🔄" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "💾" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "🐳" },
      { name: "Jenkins", icon: "🔧" },
      { name: "AWS EC2", icon: "☁️" },
      { name: "AWS Lambda", icon: "λ" },
      { name: "AWS RDS", icon: "🗄️" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-6 max-w-[1400px]">
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
                    className="p-4 bg-[rgba(255,255,255,0.03)] rounded-lg flex items-center space-x-3"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-300 font-medium">{skill.name}</span>
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