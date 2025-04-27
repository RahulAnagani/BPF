import React from 'react';

const ProjectCard = ({ 
  title = "Project Title",
  description = "",
  image = "",
  tags = ["React", "Tailwind"],
  liveLink = "#",
  githubLink = "#",
  completionDate = "2025",
  category = "Web Development"
}) => {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 shadow-lg dark:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl transform hover:-translate-y-1">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-contain bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm">
          <div className="flex space-x-2">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-700 dark:text-purple-300 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl name font-bold text-gray-800 dark:text-gray-100 tracking-tight">
            {title}
          </h3>
          <span className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-2 py-1 rounded-md text-gray-600 dark:text-gray-300 font-medium">{completionDate}</span>
        </div>
        
        <span className="inline-block text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 bg-clip-text text-transparent mb-2">
          {category}
        </span>
        
        <p className="mb-5 duck text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-700 dark:text-purple-300 font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex duck justify-between mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 text-white hover:from-purple-700 hover:to-indigo-700 dark:hover:from-purple-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 shadow-sm hover:shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;