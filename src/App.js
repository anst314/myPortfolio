

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

function App() {
    return ( 
        <div className="App">
            <Router>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
