import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Collection from "./pages/Collection";
import Event from "./pages/Event";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}

export default App;
