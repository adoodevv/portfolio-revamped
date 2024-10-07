import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import MyWork from './pages/MyWork';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mywork" element={<MyWork />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;