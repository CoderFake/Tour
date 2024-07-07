import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/search" element={<Search />} />
          <Route path="/selects" element={<Selects />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
