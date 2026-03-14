import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaCode, FaBrain, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const interests = [
    { icon: <FaPython />, title: "Python Development", description: "Building robust applications with Python" },
    { icon: <FaCode />, title: "Software Development", description: "Creating efficient and scalable solutions" },
    { icon: <FaBrain />, title: "Machine Learning", description: "Developing intelligent systems and models" },
    { icon: <FaChartLine />, title: "Data Analysis", description: "Extracting insights from complex datasets" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                B.Tech Student in AI & ML
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I am a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning,
                with a strong foundation in computer science fundamentals. My journey in technology began with
                a curiosity about how machines can learn and make intelligent decisions, which has evolved into
                a dedicated pursuit of building innovative AI solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I enjoy working on challenging projects that combine theoretical knowledge with practical
                implementation. My expertise spans from developing machine learning models to creating
                full-stack web applications, always with a focus on clean code and user-centric design.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Based in Hyderabad, India, I am constantly exploring new technologies and methodologies to enhance my
                skills and contribute to meaningful projects that make a positive impact on society.
              </p>
            </motion.div>

            {/* Interests Grid */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                My Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-3xl text-primary-600 dark:text-primary-400 mb-3">
                      {interest.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Strengths */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
              Key Strengths
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">01</span>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Analytical approach to complex challenges with creative solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">02</span>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Continuous Learning
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Staying updated with latest technologies and industry trends
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">03</span>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Team Collaboration
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Working effectively in diverse teams to achieve common goals
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
