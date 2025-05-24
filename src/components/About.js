import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiCode, HiLightBulb, HiHeart } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: HiCode,
      title: "Full-Stack Developer",
      description: "Specialized in building end-to-end applications with modern technologies"
    },
    {
      icon: HiLightBulb,
      title: "Problem Solver",
      description: "Passionate about turning complex challenges into elegant solutions"
    },
    {
      icon: HiHeart,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices in software development"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Passionate Software Developer
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed text-lg">
                  Hello! I'm <span className="text-purple-400 font-semibold">Ahmed Khaled</span>, a dedicated software developer from Cairo, Egypt, with a strong foundation in computer science and passion for creating innovative digital solutions.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  My programming journey began with curiosity and evolved into expertise in full-stack development. I specialize in building scalable applications that solve real-world problems, combining technical excellence with user-centered design.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  I thrive on challenges and believe every complex problem has an elegant solution. When not coding, I'm exploring new technologies and contributing to open-source projects, driven by continuous learning and innovation.
                </p>

                {/* Personal Info */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <HiAcademicCap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-purple-400 font-semibold text-sm">Education</p>
                      <p className="text-gray-400">Computer Science</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <HiLocationMarker className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-purple-400 font-semibold text-sm">Location</p>
                      <p className="text-gray-400">Cairo, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Highlights */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6">What Drives Me</h4>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-2">{highlight.title}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 