import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Project {
   title: string;
   company: string;
   description: string;
   link: string;
   image: string;
}

function FullProjects() {
   const [selectedImage, setSelectedImage] = useState<string | null>(null);

   const projects: Project[] = [
      {
         title: "Exxmon",
         company: "adoodevv",
         description: "A movie dashboard interface built with React and fetches movies from the TMDB API.",
         link: "https://github.com/adoodevv/movie-dashboard",
         image: "/images/exxmon.png"
      },
      {
         title: "Future Engineers",
         company: "Pathfinders",
         description: "Worked as the main constructor on the team where we built a self-driving car for the 2024 World Robot Olympiad.",
         link: "https://github.com/codecraftersknust/pathfinders",
         image: "/images/future-engineers.jpg"
      },
      {
         title: "mv8",
         company: "adoodevv",
         description: "Worked on the frontend on a team where we built a clone of Netflix with Nextjs.",
         link: "https://github.com/adoodevv/mv8",
         image: "/images/mv8.png"
      },
      {
         title: "Mikrobot Dashboard",
         company: "Mikrobot Academy",
         description: "Built a finance management dashboard with Nextjs to manage invoices and show current revenue and due payments.",
         link: "https://github.com/adoodevv/mikrobot-dashboard",
         image: "/images/mikrobot-dashboard.png"
      },
      {
         title: "Aneva",
         company: "adoodevv",
         description: "A file upload app built with React and FastAPI which gives you the option to upload a file and see them in an ordered list.",
         link: "https://github.com/adoodevv/Aneva",
         image: "/images/aneva.jpg"
      }
   ];

   return (
      <div className="max-w-7xl mx-auto relative">
         <div className="border p-5 rounded-2xl border-gray-700">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {projects.map((project, index) => (
                  <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 relative">
                     <div className="flex justify-between items-center">
                        <h3 className="font-bold mb-2">{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-xs hover:text-gray-300">View Project</a>
                     </div>
                     <p className="text-gray-400 text-sm mb-2">{project.company}</p>
                     <p className="text-gray-300 text-sm">{project.description}</p>
                     <FontAwesomeIcon
                        icon={faImage}
                        className="absolute bottom-2 right-2 text-gray-400 cursor-pointer hover:text-gray-300"
                        onClick={() => setSelectedImage(project.image)}
                     />
                  </div>
               ))}
            </div>
         </div>

         {/* Image Preview Modal */}
         {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
               <div className="relative max-w-4xl max-h-[90vh] mx-4">
                  <button
                     onClick={() => setSelectedImage(null)}
                     className="absolute -top-10 right-0 text-white hover:text-gray-300"
                  >
                     <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                  </button>
                  <img
                     src={selectedImage}
                     alt="Project preview"
                     className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
               </div>
            </div>
         )}
      </div>
   );
}

export default FullProjects;