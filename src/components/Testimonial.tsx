interface Testimonial {
   name: string;
   company: string;
   text: string;
}

function Testimonial() {
   const testimonials: Testimonial[] = [
      {
         name: "Sherber Golan, MBA",
         company: "Gel Superstars Inc",
         text: "I was excited to work with Benedict and get to work on a project I've envisioned for years. He was a pleasure to work with and I can't recommend him enough."
      },
      {
         name: "Dr. Terle Dayl",
         company: "ZennyaK Foundation",
         text: "Benedict has a keen eye for detail, a valuable asset to any team."
      }
   ];

   return (
      <div className="max-w-6xl mx-auto px-4 py-16">
         <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
               <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <div>
                     <p className="font-bold">{testimonial.name}</p>
                     <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Testimonial;