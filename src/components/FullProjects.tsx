interface Project {
   title: string;
   company: string;
   description: string;
   link: string;
}

function FullProjects() {
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
      },
      {
         title: "mv8",
         company: "adoodevv",
         description: "Worked on the frontend on a team where we built a clone of Netflix with Nextjs.",
         link: "https://github.com/adoodevv/mv8"
      },
      {
         title: "Mikrobot Dashboard",
         company: "Mikrobot Academy",
         description: "Built a finance management dashboard with Nextjs to manage invoices and show current revenue and due payments.",
         link: "https://github.com/adoodevv/mikrobot-dashboard"
      },
      {
         title: "Aneva",
         company: "adoodevv",
         description: "A file upload app built with React and FastAPI which gives you the option to upload a file and see them in an ordered list.",
         link: "https://github.com/adoodevv/Aneva"
      }
   ];

   return (
      <div className="max-w-7xl mx-auto">
         <div className="border p-5 rounded-2xl border-gray-700">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <div className="flex grid grid-cols-1 lg:grid-cols-3 gap-6">
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
      </div>
   )
}

export default FullProjects;