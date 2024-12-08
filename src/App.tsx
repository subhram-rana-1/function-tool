import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from "./components/LandingPage";
import GraphPage from "./components/GraphPage";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/graph" element={<GraphPage />} />
          </Routes>
      </Router>
  )
}

export default App
