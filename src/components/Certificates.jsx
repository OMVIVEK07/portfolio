import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaBriefcase, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Certificates = () => {
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

  const certificates = [
    {
      title: "Data Science with Python",
      issuer: "NPTEL",
      date: "2025",
      credentialId: "NPTEL-DS-2025",
      skills: ["Python", "Data Science", "Machine Learning", "Statistical Analysis"],
      certificateLink: "https://nptel.ac.in",
      featured: true,
    },
    {
      title: "Completed AI & ML Certification",
      issuer: "UDEMY",
      date: "2025",
      credentialId: "UDEMY-AIML-2025",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks"],
      certificateLink: "https://udemy.com",
      featured: true,
    },
  ];

  const internships = [
    {
      title: "AI & ML Intern",
      company: "IIITDM Kancheepuram",
      location: "Melakottayyur, Tamil Nadu, India",
      period: "September 2025 - November 2025",
      type: "Technical Training",
      description: "Attended technical training at IIITDM Kancheepuram learning real-world programming and AI/ML applications. Developed data analysis scripts and basic machine learning models during hands-on sessions.",
      responsibilities: [
        "Developed data analysis scripts and basic machine learning models during hands-on sessions",
        "Improved understanding of algorithms, data structures, machine learning, problem-solving, and teamwork skills",
        "Applied theoretical knowledge to practical AI/ML projects",
        "Collaborated with peers on technical challenges and solutions"
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Algorithms", "Problem Solving"],
      certificateLink: null,
    },
    {
      title: "Data Science Intern",
      company: "Ved Upskilling",
      location: "Virtual",
      period: "August 2025 - October 2025",
      type: "Virtual Internship",
      description: "Built ML models using Python and scikit-learn for real-world datasets. Applied EDA, data visualization, and statistical analysis techniques.",
      responsibilities: [
        "Built ML models using Python and scikit-learn for real-world datasets",
        "Applied EDA, data visualization, and statistical analysis techniques",
        "Developed automated data preprocessing pipelines to streamline dataset preparation and enhance model training efficiency"
      ],
      technologies: ["Python", "Scikit-learn", "Data Analysis", "EDA", "Data Visualization"],
      certificateLink: null,
    },
    {
      title: "Data Science Intern",
      company: "Codtech IT Solutions",
      location: "Virtual",
      period: "July 2025 - September 2025",
      type: "Virtual Internship",
      description: "Developed data pipelines, EDA workflows, and prediction models. Engineered dashboards to visualize key metrics for leadership decision-making.",
      responsibilities: [
        "Developed data pipelines, EDA workflows, and prediction models",
        "Engineered dashboards to visualize key metrics, empowering leadership with actionable insights for faster decision-making",
        "Refined machine learning model parameters and validated results through rigorous cross-validation techniques"
      ],
      technologies: ["Python", "Data Pipelines", "Machine Learning", "Data Visualization", "Cross-validation"],
      certificateLink: null,
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-gray-50 dark:bg-gray-800">
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
              <span className="gradient-text">Certificates & Internships</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and industry experience
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg text-white">
                        <FaBriefcase className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {internship.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {internship.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt />
                            {internship.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt />
                            {internship.period}
                          </span>
                        </div>
                        <span className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                          {internship.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {internship.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    certificate.featured ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg text-white">
                      <FaCertificate className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {certificate.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-1">
                        {certificate.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {certificate.date}
                      </p>
                      {certificate.credentialId && (
                        <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                          ID: {certificate.credentialId}
                        </p>
                      )}
                    </div>
                    {certificate.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded text-xs text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Link */}
                  {certificate.certificateLink && (
                    <a
                      href={certificate.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm continuously learning and expanding my skillset. Check out my GitHub for more projects and contributions.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              View LinkedIn Profile
              <FaExternalLinkAlt />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
