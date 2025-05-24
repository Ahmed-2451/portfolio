import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiExternalLink } from 'react-icons/hi';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      name: 'Email',
      value: 'ahmedabdelaziz2451@gmail.com',
      link: 'mailto:ahmedabdelaziz2451@gmail.com',
      icon: HiMail,
      gradient: 'from-purple-600 to-violet-600',
      description: 'Drop me a line anytime',
    },
    {
      name: 'LinkedIn',
      value: 'Ahmed Khaled',
      link: 'https://www.linkedin.com/in/ahmed-khaled-4b8485250',
      icon: SiLinkedin,
      gradient: 'from-violet-600 to-purple-700',
      description: 'Let\'s connect professionally',
    },
    {
      name: 'GitHub',
      value: 'Ahmed-2451',
      link: 'https://github.com/Ahmed-2451',
      icon: SiGithub,
      gradient: 'from-purple-700 to-indigo-600',
      description: 'Check out my code',
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
    <section id="contact" className="py-20 bg-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"
          />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's connect and create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              variants={cardVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group"
            >
              <a
                href={method.link}
                target={method.name !== 'Email' ? '_blank' : undefined}
                rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <div className="card h-full text-center relative overflow-hidden">
                  <div className="relative z-10">
                    {/* Gradient Header */}
                    <div className={`w-full h-2 bg-gradient-to-r ${method.gradient} rounded-t-xl -m-6 mb-6`} />

                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center mb-4 text-white shadow-lg mx-auto`}>
                      <method.icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-200">
                      {method.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {method.description}
                    </p>

                    {/* Value */}
                    <p className="text-purple-400 font-medium mb-4 break-all text-sm">
                      {method.value}
                    </p>

                    {/* Link Indicator */}
                    <div className="flex items-center justify-center space-x-2 text-gray-400 group-hover:text-purple-400 transition-colors duration-200">
                      <span className="text-sm">
                        {method.name === 'Email' ? 'Send Email' : 'Visit Profile'}
                      </span>
                      <HiExternalLink size={14} />
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-2xl p-8 border border-purple-500/20">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold mb-4"
            >
              Let's Work Together
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="mailto:ahmedabdelaziz2451@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <HiMail size={20} />
                <span>Send Email</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/ahmed-khaled-4b8485250"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <SiLinkedin size={20} />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 