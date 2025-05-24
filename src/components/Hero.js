import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-lg mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Ahmed Khaled</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 mt-4">
                Software Developer
              </p>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              I'm a passionate software developer from Cairo, Egypt, specializing in 
              creating efficient, scalable applications that deliver exceptional user experiences.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="btn-primary transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              {[
                { 
                  icon: SiGithub, 
                  url: 'https://github.com/Ahmed-2451',
                  label: 'GitHub'
                },
                { 
                  icon: SiLinkedin, 
                  url: 'https://www.linkedin.com/in/ahmed-khaled-4b8485250',
                  label: 'LinkedIn'
                },
                { 
                  icon: HiMail, 
                  url: 'mailto:ahmedabdelaziz2451@gmail.com',
                  label: 'Email'
                }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 blur-xl" />
              
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 hover:border-purple-500/50 transition-all duration-200"
              >
                <img
                  src="/ahmed1.jpg"
                  alt="Ahmed Khaled"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm animate-float" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-violet-500/20 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 