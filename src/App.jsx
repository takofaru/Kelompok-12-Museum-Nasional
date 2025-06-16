import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Collection from './pages/Collection/Collection';
import Event from './pages/Event/Event';
import Content from './pages/Content/Content';;
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
                  <Route path="/:type/:id" element={<Content />} />
                </Routes>
            </div>
    </>
  );
}

export default App;
