import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import MyWork from './pages/MyWork';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
        <Navbar>
          <div id="/"><Home /></div>
          <div id="about"><About /></div>
          <div id="mywork"><MyWork /></div>
        </Navbar>
      </Router>
    </div>
  )
}

export default App
