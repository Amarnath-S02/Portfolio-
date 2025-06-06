import { Project } from "@/types";


export const projects: Project[] = [
  {
    title: 'Recipe Radar',
    description: 'A full-stack recipe platform with image posting, nutrition analysis, comments, user ratings, and group chat.',
    technologies: ['React.js', 'Bootstrap', 'Node.js', 'MongoDB', 'Spoonacular API', 'Google Gemini', 'Axios', 'JWT'],
    githubLink: 'https://github.com/Rohith-S-07/RecipeRadar',
    demoLink: 'https://reciperadar-app.onrender.com/',
    image: '/projects/reciperadar.png',
  },
  {
    title: 'Rescue Channel',
    description: 'A disaster response system for rescue agencies with real-time coordination and resources & incident management.',
    technologies: ['React.js', 'Bootstrap', 'Node.js', 'MongoDB', 'Google Maps API', 'Axios'],
    githubLink: 'https://github.com/Rohith-S-07/RescueChannel-MERN',
    demoLink: 'https://rescuechannel.onrender.com/',
    image: '/projects/rescuechannel.png',
  },
  {
    title: 'Login 2024',
    description: 'An event registration platform for students with responsive UI and multi-event support.',
    technologies: ['HTML', 'CSS', 'EJS', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/NishanthThangasamy/Login-2024',
    demoLink: 'https://login-2024.onrender.com/',
    image: '/projects/login2024.png',
  },
];