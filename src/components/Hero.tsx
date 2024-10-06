function Hero() {
   return (
      <div className="max-w-6xl mx-auto px-4 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
               <h1 className="text-4xl font-bold mb-6">Building Ideas with Clean Code</h1>
               <p className="text-gray-300">
                  Joe
               </p>
            </div>
            <div className="flex justify-center">
               <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img src="/api/placeholder/192/192" alt="Profile" className="w-full h-full object-cover" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Hero;