import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiLightBulb, 
  HiCode, 
  HiAcademicCap,
  HiUsers,
  HiClock,
  HiChat,
  HiChip,
  HiPuzzle,
  HiSparkles,
  HiDatabase,
  HiGlobeAlt,
  HiDesktopComputer
} from 'react-icons/hi';
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript, 
  SiReact, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiGo,
  SiSocketdotio,
  SiVite,
  SiChakraui,
  SiTailwindcss,
  SiBootstrap,
  SiFramer
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const softSkills = [
    { name: 'Problem Solving', icon: HiPuzzle },
    { name: 'Team Collaboration', icon: HiUsers },
    { name: 'Time Management', icon: HiClock },
    { name: 'Communication', icon: HiChat },
    { name: 'Critical Thinking', icon: HiLightBulb },
    { name: 'Adaptability', icon: HiSparkles }
  ];

  const developmentSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React.js', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'HTML/CSS', icon: SiHtml5 },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Go/Golang', icon: SiGo },
    { name: 'Git & GitHub', icon: SiGit },
    { name: 'API Development', icon: HiCode },
    { name: 'Database Design', icon: HiDatabase },
    { name: 'Microservices', icon: HiDesktopComputer }
  ];

  const collegeCourses = [
    { name: 'Machine Learning', icon: HiChip },
    { name: 'Software Engineering', icon: HiCode },
    { name: 'Software Architecture', icon: HiLightBulb },
    { name: 'Software Requirements', icon: HiAcademicCap },
    { name: 'Object Oriented Analysis & Design', icon: HiCode },
    { name: 'OOP', icon: HiCode },
    { name: 'Web Development', icon: SiHtml5 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Courses</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, soft skills, and academic foundation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Soft Skills Card */}
          <motion.div
            variants={cardVariants}
            className="card h-full"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Soft Skills</h3>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.05 + 0.3 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <skill.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Skills Card */}
          <motion.div
            variants={cardVariants}
            className="card h-full"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Development Skills</h3>
            </div>
            
            <div className="space-y-2">
              {developmentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.03 + 0.4 }}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <skill.icon className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* College Courses Card */}
          <motion.div
            variants={cardVariants}
            className="card h-full"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiAcademicCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">College Courses</h3>
            </div>
            
            <div className="space-y-4">
              {collegeCourses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.05 + 0.5 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <course.icon className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-300">{course.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 