interface Testimonial {
   name: string;
   company: string;
   text: string;
}

function Testimonial() {
   const testimonials: Testimonial[] = [
      {
         name: "Dr. Ing. Michael Wilson",
         company: "CSIR - INSTI",
         text: "I was excited to work with Jonathan and get to work on a project I've envisioned for years. He was a pleasure to work with and I can't recommend him enough."
      },
      {
         name: "Dr. Kwame Oteng Gyasi",
         company: "KNUST",
         text: "Jonathan has a keen eye for detail, a valuable asset to any team."
      }
   ];

   return (
      <div className="my-4 border p-5 rounded-2xl border-gray-700">
         <h2 className="text-xl font-bold mb-8">Testimonials</h2>
         <div className="grid grid-cols-1 gap-6">
            {testimonials.map((testimonial, index) => (
               <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <p className="text-gray-300 mb-2 text-sm">{testimonial.text}"</p>
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