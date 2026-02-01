import { FaProjectDiagram } from "react-icons/fa"
import { motion } from "framer-motion"
const projects = [
  {
    title: 'Personal Portfolio Website',
    image: '/Portfolio.png',
    description: `A personal portfolio website built with React.js and Tailwind CSS to showcase my projects, skills, and experience. It features a modern design, responsive layout, and smooth animations.This was the first project I built using React.js and Tailwind CSS to showcase my skills and projects.`,
    techStack: ['React.Js', 'Tailwind CSS', 'JavaScript'],
    detailsLink: 'https://portfolio-blond-six-duhjhnc93v.vercel.app/',
    githubLink: 'https://github.com/rachit-taneja/Portfolio'
  },
   {
    title: 'TIC_TAC_TOE Game',
    image: '/Tic-Tac-Toe.png',
    description: `A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against a friend or the computer in this simple yet engaging game.`,
    
    techStack: ['HTML', ' CSS', 'JavaScript'],
    detailsLink: 'https://tic-tac-toe-xi-six-11.vercel.app/',
    githubLink: 'https://github.com/rachit-taneja/tic-tac-toe'
  },
    {
    title: 'AMAZON CLONE',
    image: '/AmazonClone.png',
    description: `A  Amazon clone built with HTML, CSS. Features include product listings, cart functionality, and a user-friendly interface. It was built as a beginning of my web development journey.`,
    techStack: ['HTML', ' CSS', 'JavaScript'],
    detailsLink: 'https://rachit-taneja.github.io/Amazon-clone/',
    githubLink: 'https://github.com/rachit-taneja/Amazon-clone'
  },{
    title: 'World Hive',
    image: '/worldhive.png',
    description: `WorldHive is a concept-based frontend website that serves as a creative platform design. It focuses on UI/UX, delivering a modern and visually engaging interface. Built with responsive layouts and animations, it highlights your ability to create aesthetic and functional frontend applications.`,
    keyfeatures: [
      'Fetches data from a REST API',
      'Unique and modern UI/UX design',
      'Fully responsive layouts',
      'Smooth transitions and animations',
      'Clean, modular codebase',
    ],
    techStack: ['React', 'Tailwind CSS', 'REST API'],
  
    // githubLink: 'https://github.com/rachit-taneja/worldhive',
  },
];
const Item = ({ icon, title, subtitle, date, des }) => (
  <motion.div
    className="bg-white dark:bg-zinc-800 border border-blue-200 dark:border-blue-900 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm cursor-pointer text-black dark:text-white transition-colors duration-300"
  >
    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
      <span>
        {icon}
      </span>
      <div>
        <p className="text-xl font-bold text-gray-900 dark:text-white">{title}</p>
        <p className="text-blue-500 dark:text-blue-400 font-semibold">{subtitle}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{des}</p>
      </div>
    </div>
    <div className="text-right whitespace-nowrap">
      <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
        {date}
      </p>
    </div>

  </motion.div>
)

const Project = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="flex flex-col items-center pt-15 px-4 sm:px-6 lg:px-10 mb-20 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500">
        <div className="flex items-center justify-center mb-6 gap-4">
          <div className="divider-gradient flex-1" />
          <div className="p-4 dark:bg-black text-blue-600 rounded-full mb-4">
            <FaProjectDiagram className="text-xl" />
          </div>
          <div className="divider-gradient flex-1" />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">My Projects</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-xl mb-10">
            Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-4 group text-black dark:text-white"
            >
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
                Featured
              </span>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56   rounded-md"
              />
              <div className="pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="tech-stack-item bg-gray-100 text-gray-800 dark:bg-black dark:text-white font-medium text-xs px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center mt-auto pt-4">
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 bg-black text-white py-1 rounded-full text-sm font-medium transition hover:bg-gray-800"
                  >
                    Live <i className="fa-solid fa-up-right-from-square ml-1"></i>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 tech-stack-item text-black hover:text-gray-700 transition"
                  >
                    <i className="fa-brands fa-github text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;