import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Toolkit from "../components/Toolkit"
import Testimonial from "../components/Testimonial"

function Home() {
   return (
      <div className="">
         <Hero />
         <div className="max-w-7xl mx-auto flex grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Projects />
            <Toolkit />
            <Testimonial />
         </div>
      </div>
   );
};

export default Home;
