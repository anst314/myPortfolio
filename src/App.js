import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stocks from './components/Stocks';
import Navigation from './components/Navigation';
import StockDetail from './components/StockDetail';
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<StockDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




