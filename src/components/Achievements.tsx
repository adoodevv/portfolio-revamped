import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faAward, faMedal, faCertificate } from '@fortawesome/free-solid-svg-icons';

function Achievements () {
   return (
      <div className="my-4 border p-5 rounded-2xl border-gray-700">
         <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Achievements</h2>
         </div>
         <div className="flex grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-2 text-xl self-start" />
               <h3 className="font-bold text-white mb-2">1st Place - Robofest UMC</h3>
               <p className="text-gray-300 text-sm">First African team to win the Unknown Mission Challenge at the Robofest International Finals in 2021.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faMedal} className="text-yellow-500 mb-2 text-xl self-start" />
               <h3 className="font-bold text-white mb-2">2nd and 3rd Place - Shell Xprize</h3>
               <p className="text-gray-300 text-sm">2nd in Creativity and 3rd in Moonshot idea in the World Shell Ocean Discovery Xprize Challenge in 2018.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faCertificate} className="text-red-500 mb-2 text-xl self-start" />
               <h3 className="font-bold text-white mb-2">Semi-finalist - A2SV Hackathon</h3>
               <p className="text-gray-300 text-sm">Our run ended in the Semi-finals in the 2023 Africa to Silicon Valley Generative AI Hackathon.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faCertificate} className="text-red-500 mb-2 text-xl self-start" />
               <h3 className="ont-bold text-white mb-2">Participant - WSC 2024</h3>
               <p className="text-gray-300 text-sm">Contested in the Mechanical Engineering CAD in the World Skills Competition in Iran, 2024.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faCertificate} className="text-red-500 mb-2 text-xl self-start" />
               <h3 className="font-bold text-white mb-2">Participant - WRO 2017</h3>
               <p className="text-gray-300 text-sm">Held in Costa Rica in 2017, I participated in the Elementary Category of the World Robot Olympiad.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 mb-2 text-xl self-start" />
               <h3 className="font-bold text-white mb-2">1st Place - RiSE</h3>
               <p className="text-gray-300 text-sm">In my first ever robotic competition in Ghana, my team came first in the Autonomous Rescue Challenge.</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
               <FontAwesomeIcon icon={faAward} className="text-yellow-500 mb-2 text-xl self-start" />
               <h3 className="font-bold text-white mb-2">5th Place - Robofest Game</h3>
               <p className="text-gray-300 text-sm">In the 2020 Robofest Game Challenge, Robogolf, we came 5th worldwide in the game of autonomous robots golfing.</p>
            </div>
         </div>
      </div>
   );
}

export default Achievements;