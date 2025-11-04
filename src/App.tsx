import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage  from './components/AboutPage/AboutPage';
import PortfolioPage from './components/PortfolioPage/Portfolio';

function App() {
  return (
    <Router>
      <NavigationBar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  )
}

export default App;