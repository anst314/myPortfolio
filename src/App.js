

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StarWars from "./pages/StarWars";

function App() {
    return ( 
        <div className="App">
            <Router>
             <NavBar />
             <div className="routeContainer">
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/hobbies" element={<StarWars />} />
            </Routes>
            <Footer />
             </div>               
            </Router>
        </div>
    );
}

export default App;
