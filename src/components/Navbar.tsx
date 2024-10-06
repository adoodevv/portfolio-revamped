import { Home, Briefcase, User } from 'lucide-react';

function Navbar() {
   return (
      <nav className="p-4">
         <div className="max-w-6xl mx-auto flex justify-between items-center border p-5 rounded-2xl border-gray-700">
            <div className="text-xl font-bold">adoodevv</div>
            <div className="flex gap-6">
               <a href="#" className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                  <Home size={18} />
                  Home
               </a>
               <a href="#" className="flex items-center gap-2">
                  <Briefcase size={18} />
                  My Work
               </a>
               <a href="#" className="flex items-center gap-2">
                  <User size={18} />
                  About Me
               </a>
            </div>
            <div className="flex gap-4">
               <a href="https://github.com/adoodevv" className="hover:text-gray-300">Github</a>
               <a href="https://www.linkedin.com/in/jonathan-adoo-22a4691b2/" className="hover:text-gray-300">LinkedIn</a>
               <a href="src/assets/Resume.pdf" download className="hover:text-gray-300">Resume</a>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;