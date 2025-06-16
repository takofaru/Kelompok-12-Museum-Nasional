import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Collection from './pages/Collection/Collection';
import Event from './pages/Event/Event';
import AboutUs from './pages/AboutUs/AboutUs';
import KegiatanPage from './pages/Content/ContentEvent';
import ArtefakPage from './pages/Content/ContentArtifact';
import "./index.css"

function App() {
  return (
        <>
            <div className='page'>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/content/kegiatan/:id" element={<KegiatanPage />} />
                  <Route path="/content/artefak/:id" element={<ArtefakPage />} />
                </Routes>
            </div>
    </>
  );
}

export default App;
