"use client"

import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'
import { Pacifico, Delicious_Handrawn } from "next/font/google";
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animation'

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const delicious = Delicious_Handrawn({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>

      <motion.h1
        className={`text-primary ${pacifico.className} text-4xl font-bold mb-10 text-center`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      {/* Bio Section*/}
      <motion.section
        className="mb-16"
        {...fadeInUp}
      >
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          Passionate web developer with a strong grasp of the MERN stack,
          focused on building responsive anduser-friendly web applications.
          Seeking a full-time opportunity to contribute to impactful projects,
          collaborate with dynamic teams, and continue growing as a developer.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className={`text-primary ${delicious.className} section-title`}
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>HTML / CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React / Next.js</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Vercel / Render</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className={`text-primary ${delicious.className} section-title`}
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">Company Name • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>

          

    </motion.div>
      </motion.section > */}

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          className={`text-primary ${delicious.className} section-title`}
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mb-6"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Master of Computer Applications (MCA)</h3>
            <p className="text-primary mb-2">PSG College of Technology • 2023 - 2025</p>
            <p className="text-secondary">
              Focused on full-stack development and software engineering. Gained practical knowledge
              of data structures and web technologies by building real-world projects using the MERN
              stack, React, and Node.js.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mb-6"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Jairam Arts and Science College • 2019 - 2022</p>
            <p className="text-secondary">
              Graduated with distinction. Built a strong foundation in programming and core computer science concepts.
            </p>
          </motion.div>

        </motion.div>
      </motion.section>

    </div >
  )
}

export default About