import { HashLink as Link } from 'react-router-hash-link';

interface Project {
   title: string;
   company: string;
   description: string;
   link: string;
}

function Projects() {
   const projects: Project[] = [
      {
         title: "Movie Dashboard",
         company: "adoodevv",
         description: "A movie dashboard interface built with React and fetches movies from the TMDB API.",
         link: "https://github.com/adoodevv/movie-dashboard"
      },
      {
         title: "Future Engineers",
         company: "Pathfinders",
         description: "Worked as the main constructor on the team where we built a self-driving car for the 2024 World Robot Olympiad.",
         link: "https://github.com/codecraftersknust/pathfinders"
      }
   ];

   return (
      <div className="bg-gradient-to-r from-gray-800 my-4 border p-5 rounded-2xl border-gray-700">
         <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Featured Projects</h2>
            <Link to="/#mywork" className="text-xs hover:text-gray-300">View all</Link>
         </div>
         <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
               <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                  <div className="flex justify-between items-center">
                     <h3 className="font-bold mb-2">{project.title}</h3>
                     <a href={project.link} target="_blank" rel="noreferrer" className="text-xs hover:text-gray-300">View Project</a>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{project.company}</p>
                  <p className="text-gray-300 text-sm">{project.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Projects;