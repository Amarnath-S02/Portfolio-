import React from 'react'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      {/* Bio Section*/}
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          Passionate web developer with a strong grasp of the MERN stack,
          focused on building responsive anduser-friendly web applications.
          Seeking a full-time opportunity to contribute to impactful projects,
          collaborate with dynamic teams, and continue growing as a developer.
        </p>
      </section>

      {/* Skills Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>HTML / CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React / Next.js</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Vercel / Render</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Experience</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>Junior Full Stack Developer</h3>
            <p className='text-primary mb-2'>Company name (2020 - Present) </p>
            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Sample</li>
              <li>Sample</li>
              <li>Sample</li>
            </ul>
          </div>
          {/* Other Experiences */}
        </div>
      </section>

      {/* Education Section */}
      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>
        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-2'>B.Sc. Computer Science</h3>
            <p className='text-primary mb-2'>University Name </p>
            <p className='text-secondary'>Graduated with Bachelors degree</p>
          </div>
          {/* Other Experiences */}
        </div>
      </section>


    </div>
  )
}

export default About