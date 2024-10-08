import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="lg:mt-8 max-w-7xl mx-4 lg:mx-auto">
      <div className="grid md:grid-cols-3 gap-8 border p-6 rounded-2xl border-gray-700">
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4">
            <img
              src="hero.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-lg sm:text-2xl font-bold">Jonathan Adoo</h2>
            <p className="text-gray-400 text-sm sm:text-base">Computer Engineering Student</p>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs sm:text-sm">
              <MapPin size={16} />
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            I'm a third-year Computer Engineering student at Kwame Nkrumah University of Science
            and Technology (KNUST), passionate about robotics and front-end development. I
            combine technical expertise with project leadership skills to create innovative
            solutions that make a difference.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/adoodevv"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              <Github size={18} />
              {/* GitHub */}
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-adoo-22a4691b2/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              <Linkedin size={18} />
              {/* LinkedIn */}
            </a>
            <a
              href="mailto:adoojonathan412@gmail.om"
              className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              <Mail size={18} />
              {/* Email Me */}
            </a>
          </div>
        </div>
      </div>

      {/* Education and Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div className="border p-6 rounded-2xl border-gray-700 bg-gradient-to-r from-gray-800">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={24} />
            <h3 className="text-lg sm:text-xl font-semibold">Education</h3>
          </div>
          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold">BSc. Computer Engineering</h4>
              <p className="text-gray-300">Kwame Nkrumah University of Science and Technology</p>
              <p className="text-gray-400">Academic Standing - First Class</p>
              <p className="text-gray-400">2023 - Present</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 border p-6 rounded-2xl border-gray-700 bg-gradient-to-r from-gray-800">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={24} />
            <h3 className="text-lg sm:text-xl font-semibold">Experience</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold">Robotics Trainer</h4>
              <p className="text-gray-300">Mikrobot Academy</p>
              <p className="text-gray-400">2022 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Lead teams to robotics competitions</li>
                <li>Train students on basic robotics concepts and technical challenges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Software Engineer Intern</h4>
              <p className="text-gray-300">CSIR - INSTI</p>
              <p className="text-gray-400">2024 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Learnt front-end web development with React</li>
                <li>Collaborated with interns on projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Technologies */}
      <div className="border p-6 rounded-2xl border-gray-700 my-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-6">Skills & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm sm:text-base">
          <div className="space-y-2">
            <h4 className="font-semibold">Programming</h4>
            <ul className="text-gray-300">
              <li>Python</li>
              <li>C++</li>
              <li>JavaScript/TypeScript</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Robotics</h4>
            <ul className="text-gray-300">
              <li>ROS</li>
              <li>Arduino</li>
              <li>Raspberry Pi</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Web Development</h4>
            <ul className="text-gray-300">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Tools</h4>
            <ul className="text-gray-300">
              <li>Git</li>
              <li>Linux</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
