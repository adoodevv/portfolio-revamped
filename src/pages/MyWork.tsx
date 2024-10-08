import FullProjects from '../components/FullProjects';
import Achievements from '../components/Achievements';

function MyWork() {
  return (
    <div className="lg:mt-8">
      <FullProjects />
      <div className='max-w-7xl mx-auto'>
        <Achievements />
      </div>
    </div>
  );
}

export default MyWork;