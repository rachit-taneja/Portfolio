
const projects = [

 {
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

const Project = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 sm:px-6 lg:px-10 pb-20 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500 w-full">
      {/* Header */}
      <div className="p-4 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full pb-4">
        <i className="fa-solid fa-diagram-project text-xl"></i>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-gray-900 dark:text-white tracking-tight pb-5">
          My Projects
        </h2>
        <p className="mt-6 mb-15 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
          Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
        </p>
      </div>
      {/* Single Column Grid */}
      <div className="grid grid-cols-1 gap-10 w-full max-w-3xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition duration-300 p-4 flex flex-col text-black dark:text-white"
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-blue-600 dark:bg-blue-700 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
              Featured
            </span>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-md mb-4"
            />

            {/* Project Content */}
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight pb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 text-base flex-1">
                {project.description}
              </p>

              {/* Key Features */}
              <p className="mt-3 text-base font-bold text-gray-800">Key Features:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {project.keyfeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <ul className="tech-stack-item flex  flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="tech-stack-item bg-gray-100 text-gray-800 dark:bg-black dark:text-white font-medium text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center mt-4">
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
  );
};


export default Project;
