interface Project {
   title: string;
   company: string;
   description: string;
}

function Projects() {
   const projects: Project[] = [
      {
         title: "ZynyK",
         company: "Zenyak Foundation",
         description: "This Zenyik mobile app helps users track and improve their mental well-being through self-care activities, tracking, and expert insights."
      },
      {
         title: "Superstars",
         company: "Gel Supermatics Inc",
         description: "Superstars is a tech-based professional networking app that connects people with mentorship, job opportunities, and career development."
      }
   ];

   return (
      <div className="max-w-6xl mx-auto px-4 py-16">
         <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <button className="text-sm hover:text-gray-300">View All</button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
               <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.company}</p>
                  <p className="text-gray-300">{project.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Projects;