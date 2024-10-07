import React from 'react';
import { Home, Briefcase, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
   const location = useLocation();

   const isActivePath = (path: string) => {
      return location.pathname === path;
   };

   const getButtonClasses = (path: string) => {
      return `flex items-center text-sm gap-2 px-4 py-2 rounded-lg transition-colors ${isActivePath(path) ? 'bg-gray-800' : 'hover:bg-gray-800/50'
         }`;
   };

   return (
      <nav className="p-4">
         <div className="max-w-7xl mx-auto flex justify-between items-center border p-5 rounded-2xl border-gray-700">
            <Link to="/">
               <div className="text-xl font-bold">adoodevv</div>
            </Link>
            <div className="flex gap-2">
               <Link to="/">
                  <button className={getButtonClasses('/')}>
                     <Home size={18} />
                     Home
                  </button>
               </Link>
               <Link to="/mywork">
                  <button className={getButtonClasses('/mywork')}>
                     <Briefcase size={18} />
                     My Work
                  </button>
               </Link>
               <Link to="/about">
                  <button className={getButtonClasses('/about')}>
                     <User size={18} />
                     About Me
                  </button>
               </Link>
            </div>
            <div className="flex gap-4 text-sm">
               <a href="https://github.com/adoodevv" target="_blank" rel="noreferrer" className="hover:text-gray-300">Github</a>
               <a href="https://www.linkedin.com/in/jonathan-adoo-22a4691b2/" target="_blank" rel="noreferrer" className="hover:text-gray-300">LinkedIn</a>
               <a href="src/assets/Resume.pdf" download target="_blank" rel="noreferrer" className="hover:text-gray-300">Resume</a>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;