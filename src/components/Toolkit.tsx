import React from 'react';

function Toolkit() {
   const tools = [
      {
         id: 1,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
         position: "col-start-1 row-start-1"
      },
      {
         id: 2,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gazebo/gazebo-original.svg",
         position: "col-start-2 row-start-1"
      },
      {
         id: 3,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
         position: "col-start-3 row-start-1"
      },
      {
         id: 4,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
         position: "col-start-1 row-start-2"
      },
      {
         id: 5,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
         position: "col-start-2 row-start-2"
      },
      {
         id: 6,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
         position: "col-start-3 row-start-2"
      },
      {
         id: 7,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
         position: "col-start-1 row-start-3"
      },
      {
         id: 8,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
         position: "col-start-2 row-start-3"
      },
      {
         id: 9,
         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg",
         position: "col-start-3 row-start-3"
      }
   ];

   return (
      <div className="bg-gradient-to-r from-gray-800 my-4 border p-5 rounded-2xl border-gray-700">
         <h2 className="text-xl font-bold mb-8">Tool Kit</h2>
         <div className="max-w-[400px] mx-auto">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center">
               {tools.map((tool) => (
                  <div
                     key={tool.id}
                     className={`${tool.position} bg-gray-900/50 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-110`}
                  >
                     <img
                        src={tool.icon}
                        alt="tool icon"
                        className="w-12 h-12 hover:animate-wiggle"
                     />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Toolkit;