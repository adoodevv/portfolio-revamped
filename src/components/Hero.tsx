function Hero() {
   return (
      <div className="max-w-7xl mx-4 lg:mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-gray-800 lg:col-span-2 border p-5 rounded-2xl border-gray-700">
               <h1 className="text-2xl font-bold mb-6">Building Ideas & Creating Solutions</h1>
               <p className="text-gray-300 text-sm">
                  I'm a third-year Computer Engineering student at Kwame Nkrumah University of Science and Technology (KNUST), with a passion for bringing ideas to life through technology. As a natural project leader, I combine my technical expertise in robotics with front-end development skills to create innovative solutions. Currently exploring the intersection of hardware and software, I'm actively seeking opportunities to collaborate on projects that make a meaningful impact.
               </p>
            </div>
            <div className="flex flex-col items-center justify-center border p-5 rounded-2xl border-gray-700">
               <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img src="hero.jpg" alt="Profile" className="w-full h-full object-cover" />
               </div>
               <p className="text-gray-300 font-bold text-sm mt-2">
                  Jonathan Darko Adoo
               </p>
               <p className="text-gray-300 text-xs">
                  Roboticist & Web Developer
               </p>
            </div>
         </div>
      </div>
   );
}

export default Hero;