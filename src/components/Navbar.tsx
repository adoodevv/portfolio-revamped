import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation();

   const isActivePath = (path: string) => {
      return location.pathname === path;
   };

   const getButtonClasses = (path: string) => {
      return `flex items-center text-sm gap-2 px-4 py-2 rounded-lg transition-colors ${isActivePath(path) ? 'bg-gray-800' : 'hover:bg-gray-800/50'
         }`;
   };

   const getMobileButtonClasses = (path: string) => {
      return `flex items-center text-sm gap-2 px-4 py-2 rounded-lg transition-colors w-full ${isActivePath(path) ? 'bg-gray-800 text-white' : 'hover:bg-gray-800/50'
         }`;
   };

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   return (
      <>
         <div className="h-20"></div>

         <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900">
            {/* Desktop Navbar */}
            <div className="hidden lg:flex max-w-7xl mx-auto justify-between items-center border p-5 rounded-2xl border-gray-700 bg-gray-900">
               <Link to="/">
                  <div className="text-xl font-bold">adoodevv</div>
               </Link>
               <div className="flex gap-2">
                  <Link to="/">
                     <button className={getButtonClasses('/')}>
                        <FontAwesomeIcon icon={faHome} />
                        Home
                     </button>
                  </Link>
                  <Link to="/mywork">
                     <button className={getButtonClasses('/mywork')}>
                        <FontAwesomeIcon icon={faBriefcase} />
                        My Work
                     </button>
                  </Link>
                  <Link to="/about">
                     <button className={getButtonClasses('/about')}>
                        <FontAwesomeIcon icon={faUser} />
                        About Me
                     </button>
                  </Link>
               </div>
               <div className="flex gap-4 text-sm">
                  <a href="https://github.com/adoodevv" target="_blank" rel="noreferrer" className="hover:text-gray-300">Github</a>
                  <a href="src/assets/Resume.pdf" download target="_blank" rel="noreferrer" className="hover:text-gray-300">Resume</a>
               </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex justify-between items-center">
               <Link to="/">
                  <div className="text-xl font-bold">adoodevv</div>
               </Link>
               <button
                  className={`text-2xl z-50 p-2 ${isMenuOpen ? 'text-gray-700' : 'text-white'}`}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
               >
                  <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
               </button>
            </div>

            {/* Mobile Menu */}
            <div
               className={`lg:hidden fixed top-0 right-0 w-full sm:w-2/3 h-full bg-white bg-opacity-90 backdrop-blur-md text-black transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                  }`}
            >
               <div className="flex flex-col items-start pt-20 px-4">
                  <Link to="/" className="w-full" onClick={() => setIsMenuOpen(false)}>
                     <button className={getMobileButtonClasses('/')}>
                        <FontAwesomeIcon icon={faHome} />
                        Home
                     </button>
                  </Link>
                  <Link to="/mywork" className="w-full" onClick={() => setIsMenuOpen(false)}>
                     <button className={getMobileButtonClasses('/mywork')}>
                        <FontAwesomeIcon icon={faBriefcase} />
                        My Work
                     </button>
                  </Link>
                  <Link to="/about" className="w-full" onClick={() => setIsMenuOpen(false)}>
                     <button className={getMobileButtonClasses('/about')}>
                        <FontAwesomeIcon icon={faUser} />
                        About
                     </button>
                  </Link>
                  <div className="flex flex-col gap-2 mt-8 w-full">
                     <a
                        href="https://github.com/adoodevv"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 hover:bg-gray-800/50 rounded-lg w-full"
                        onClick={() => setIsMenuOpen(false)}
                     >
                        Github
                     </a>
                     <a
                        href="src/assets/Resume.pdf"
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 hover:bg-gray-800/50 rounded-lg w-full"
                        onClick={() => setIsMenuOpen(false)}
                     >
                        Resume
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </>
   );
}

export default Navbar;