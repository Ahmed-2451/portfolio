import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiGlobeAlt, HiDeviceMobile, HiLightBulb } from 'react-icons/hi';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive, modern websites with cutting-edge technologies and best practices.',
      icon: <HiGlobeAlt className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Software Development',
      description: 'Building robust desktop applications with efficient algorithms and clean architecture.',
      icon: <HiCode className="w-8 h-8" />,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Problem Solving',
      description: 'Analyzing complex problems and developing innovative solutions that drive results.',
      icon: <HiLightBulb className="w-8 h-8" />,
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces with focus on user experience and accessibility.',
      icon: <HiDeviceMobile className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-600',
    },
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
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life with modern technology and best practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="card h-full text-center relative overflow-hidden">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg mx-auto`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 