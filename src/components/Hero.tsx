import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#403E43] p-6">
      <div className="profile-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=300&h=300"
            alt="Profile"
            className="profile-image"
          />
        </motion.div>
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Full Stack <span className="text-gradient">Developer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Transforming ideas into scalable solutions with modern technologies. 
            Specialized in building robust full-stack applications with a focus on 
            performance and user experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#skills" 
              className="border-2 border-[#9b87f5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9b87f5]/10 transition-all duration-300"
            >
              View Skills
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;