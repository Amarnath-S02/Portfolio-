import { Project } from "@/types";


export const projects: Project[] = [
  {
    title: 'SkillBridge',
    description:  "A full-stack freelancing platform with service listings, secure payments, real-time chat, and AI-powered support.",
    technologies: ['React.js','SCSS', 'Node.js','Express.js','MongoDB', 'Cloudinary', 'Google Gemini', 'Axios', 'JWT'],
    githubLink: 'https://github.com/Amarnath-S02/SkillBridge.git',
    demoLink: 'https://skillbridge-1-4xbf.onrender.com/',
    image: '/projects/skillbridge.png',
  },
  {
    title: 'Zero Hunger',
    description: "A MERN-based food donation system connecting donors and recipients with efficient redistribution and community engagement.",
    technologies: ['React.js', 'Tailwind Css', 'Node.js','Express.js','MongoDB', 'Google Maps API', 'Axios','JWT'],
    githubLink: 'https://github.com/Amarnath-S02/ZeroHunger.git',
    demoLink: 'https://zero-hunger-gamma.vercel.app/',
    image: '/projects/zerohunger.png',
  },
  {
    title: 'PrintHub',
    description: "A responsive platform for browsing, customizing, and ordering 3D printed products with secure login and real-time tracking.",
    technologies: ['HTML', 'CSS', 'EJS', 'Node.js','Express.js','MongoDB'],
    githubLink: 'https://github.com/Amarnath-S02/PrintHub-E-commerce.git',
    demoLink: 'https://printhub-e-commerce.onrender.com/',
    image: '/projects/printhub.png',
  },
];