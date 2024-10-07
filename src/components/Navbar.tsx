import React from 'react';
import { Home, Briefcase, User } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

interface NavbarProps {
   children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
   return (
      <div>
         <nav className="p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center border p-5 rounded-2xl border-gray-700">
               <Link to="/#"><div className="text-xl font-bold">adoodevv</div></Link>
               <div className="flex gap-2">
                  <Link to="/#">
                     <button className="flex items-center text-sm gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                        <Home size={18} />
                        Home
                     </button>
                  </Link>
                  <Link to="/#mywork">
                     <button className="flex items-center text-sm gap-2 px-4 py-2 rounded-lg">
                        <Briefcase size={18} />
                        My Work
                     </button>
                  </Link>
                  <Link to="/#about">
                     <button className="flex items-center text-sm gap-2 px-4 py-2 rounded-lg">
                        <User size={18} />
                        About Me
                     </button>
                  </Link>
               </div>
               <div className="flex gap-4 text-sm">
                  <a href="https://github.com/adoodevv" className="hover:text-gray-300">Github</a>
                  <a href="https://www.linkedin.com/in/jonathan-adoo-22a4691b2/" className="hover:text-gray-300">LinkedIn</a>
                  <a href="src/assets/Resume.pdf" download className="hover:text-gray-300">Resume</a>
               </div>
            </div>
         </nav>
         <main className="flex-grow">{children}</main>
      </div>
   );
}

export default Navbar;