import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Education = () => {
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

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "Anurag Group of Institutions",
      location: "Kodad, Telangana, India",
      period: "2023 - 2027 (Expected)",
      currentGPA: "8.23/10",
      relevantCoursework: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
        "Mathematics for AI/ML",
        "Probability and Statistics"
      ],
      achievements: [
        "Strong academic performance with 8.23 CGPA",
        "Active participant in technical workshops",
        "Hands-on experience in AI/ML projects",
        "Continuous learning and skill development"
      ]
    },
    {
      degree: "Intermediate (XII)",
      institution: "NCL Junior College",
      location: "Mattapalli, Telangana, India",
      period: "2021 - 2023",
      percentage: "96.9%",
      stream: "Mathematics, Physics, Chemistry",
      achievements: [
        "Excellent academic performance",
        "Strong foundation in science subjects",
        "Prepared for competitive exams"
      ]
    },
    {
      degree: "SSC (X)",
      institution: "Sri Chaitanya Tech High School",
      location: "Kodad, Telangana, India",
      period: "2020 - 2021",
      percentage: "100%",
      achievements: [
        "Perfect score in board examinations",
        "Outstanding academic achievement",
        "Excellence in mathematics and science"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
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
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic journey and educational background
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full hidden lg:block"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"></div>

                {/* Education Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg text-white">
                        <FaGraduationCap className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt />
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Academic Performance */}
                    {(edu.currentGPA || edu.percentage) && (
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                          {edu.currentGPA ? `GPA: ${edu.currentGPA}` : `Percentage: ${edu.percentage}`}
                        </span>
                      </div>
                    )}

                    {/* Stream */}
                    {edu.stream && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">Stream:</span> {edu.stream}
                        </p>
                      </div>
                    )}

                    {/* Relevant Coursework */}
                    {edu.relevantCoursework && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevantCoursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {edu.achievements && (
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Information */}
          <motion.div variants={itemVariants} className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              Academic Philosophy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
              I believe in continuous learning and applying theoretical knowledge to solve real-world problems. 
              My academic journey has equipped me with strong fundamentals in computer science and specialized 
              expertise in artificial intelligence and machine learning. I actively seek opportunities to expand 
              my knowledge through research, projects, and collaboration with peers and mentors.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
