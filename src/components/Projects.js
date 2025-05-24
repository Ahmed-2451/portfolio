import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiPostgresql, SiGo, SiMongodb, SiRedis, SiReact, SiSocketdotio, SiVite, SiChakraui } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'LinkSphere - Social Media Platform',
      description: 'A distributed social networking platform built with microservices architecture. Features user profiles, interactive feeds, and social connections using Go API Gateway, Node.js services, and multi-database architecture including PostgreSQL, MongoDB, Neo4j, and Redis.',
      technologies: ['Go', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
      techIcons: [SiGo, SiNodedotjs, SiPostgresql, SiMongodb, SiRedis],
      link: 'https://github.com/Rehab-M-Esmail/LinkSphere',
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      title: 'TuneTrail - Music Streaming Platform',
      description: 'A comprehensive Spotify-inspired streaming platform featuring real-time audio streaming, dual AI-powered assistants (Music Companion & General Assistant), and intelligent music recommendations. Built with Node.js/Express backend, PostgreSQL database, and JWT/OAuth authentication.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'OAuth'],
      techIcons: [SiNodedotjs, SiExpress, SiPostgresql, SiSocketdotio, SiJavascript],
      link: 'https://github.com/Ahmed-2451/TuneTrail',
      gradient: 'from-violet-600 to-purple-700',
    },
    {
      title: 'GameStore - Digital Gaming Platform',
      description: 'A modern game distribution platform inspired by Steam and Epic Games Store. Features comprehensive e-commerce functionality, game library management, user profiles, news sections, and advanced filtering/pagination. Built with React 18, Vite for lightning-fast development, Chakra UI for polished components, and React Router for seamless navigation.',
      technologies: ['React', 'Vite', 'Chakra UI', 'React Router', 'Axios'],
      techIcons: [SiReact, SiVite, SiChakraui, SiJavascript],
      link: 'https://github.com/rofidakhaled/GameStore',
      gradient: 'from-purple-700 to-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies and programming languages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group"
            >
              <div className="card h-full relative overflow-hidden">
                <div className="relative z-10">
                  {/* Gradient Header */}
                  <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-t-xl -m-6 mb-4`} />

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/50 text-xs rounded-full border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tech Icons & Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.techIcons.map((Icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        >
                          <Icon size={20} />
                        </div>
                      ))}
                    </div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm"
                      >
                        <HiExternalLink size={16} />
                        <span>View</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/Ahmed-2451"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <HiCode size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 