import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const skillsData = {
    "Programming": [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
    "Web Development": [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
    ],
    "AI/ML": [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Data Science", level: 90 },
      { name: "Computer Vision", level: 75 },
    ],
    "Data Analysis": [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 80 },
    ],
    "Tools & Technologies": [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-purple-500 to-pink-500';
    return 'from-orange-500 to-red-500';
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
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
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                            ease: "easeOut",
                          }}
                          className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving", "Algorithm Design", "Data Structures", 
                "Object-Oriented Programming", "RESTful APIs", "Statistical Analysis",
                "Data Preprocessing", "Feature Engineering", "Model Development",
                "Natural Language Processing", "Computer Vision", "Technical Writing"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  className="skill-badge"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
