import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import img from '../image/bhavya.jpeg';
import img2 from '../image/bhavya background.jpeg';

export default function Home() {
  const [typewriterText] = useTypewriter({
    words: ['Bhavya Bansal', 'CTO Of Persist Venture'],
    loop: 0,
    delaySpeed: 2000,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="flex mx-36 h-screen items-center">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-start w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold font-serif text-gray-800 mb-5">
            Hi!
          </h1>
          <p className="text-4xl font-bold font-mono text-gray-700 mb-5">
            {typewriterText}
          </p>
          <p className="text-lg text-gray-600 leading-8">
            At Persist Venture, Bhavya leads the charge in driving technological growth, overseeing the development of cutting-edge platforms, and fostering a culture of innovation and excellence. Her expertise spans across diverse domains, including full-stack development, cloud architecture, and AI-driven solutions. A problem-solver at heart, Bhavya thrives on transforming complex challenges into opportunities for growth. She is passionate about empowering teams, building high-performance products, and leveraging technology to make a meaningful impact in the world.
          </p>
          <motion.button
            className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="relative w-1/2 -mt-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={img2} className="ml-40 mt-2" alt="Background" />
          <motion.img
            src={img}
            className="ml-52 -mt-[440px] absolute shadow-lg"
            alt="Bhavya"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="mt-20 mx-36">
        {/* About Section */}
        <motion.section
          id="about"
          className="py-20 bg-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center">About Me</h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              I'm a passionate developer with expertise in full-stack development. I love solving complex problems, learning new technologies, and creating impactful solutions.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center">Skills</h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
              variants={containerVariants}
            >
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express.js'].map(
                skill => (
                  <motion.div
                    className="p-4 border rounded-lg shadow-md text-center"
                    key={skill}
                    variants={cardVariants}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <h3 className="text-lg font-bold">{skill}</h3>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-100">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center">Projects</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3].map(project => (
                <motion.div
                  className="bg-white p-4 rounded-lg shadow-md"
                  key={project}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold">Project {project}</h3>
                  <p className="text-gray-600 mt-2">
                    Description of the project goes here. Add details about what it does and the tech stack used.
                  </p>
                  <motion.button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    View More
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Achievements & Awards Section */}
        <motion.section
          id="achievements"
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center">Achievements & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[1, 2, 3].map(award => (
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  key={award}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <h3 className="text-2xl font-bold">Award {award}</h3>
                  <p className="text-gray-600 mt-4">
                    Brief description of the achievement or award. Include the title, year, and any notable details.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold">Contact Me</h2>
            <p className="text-lg text-gray-600 mt-4">Feel free to reach out for collaborations or just a friendly chat.</p>
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Bhavya Bansal. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
