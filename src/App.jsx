import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact'; // <--- YE IMPORT MISSING THA
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import About from './pages/About';
import WhatsappToggle from './components/WhatsappToggle';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <WhatsappToggle />
    </BrowserRouter>
  );
}

export default App;