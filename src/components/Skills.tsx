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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
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