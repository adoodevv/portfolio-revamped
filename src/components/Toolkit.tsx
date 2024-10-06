import { Linkedin, FileText } from 'lucide-react';

function Toolkit() {
   return (
      <div className="max-w-6xl mx-auto px-4 py-16">
         <h2 className="text-2xl font-bold mb-8">Tool Kit</h2>
         <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[Linkedin, FileText, Linkedin, FileText, Linkedin, FileText].map((Icon, i) => (
               <div key={i} className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
                  <Icon className="w-12 h-12 text-gray-700" />
               </div>
            ))}
         </div>
      </div>
   );
}

export default Toolkit;