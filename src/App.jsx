import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing/HomeSection';
import Collection from './pages/Collection/Collection';
import Event from './pages/Event/Event';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;