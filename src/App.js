import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Ad from './pages/Ad'
import Cards from './pages/Cards'
//componentes
import AdvertiserProfile from './pages/AdvertiserProfile'
import DriverProfile from './pages/DriverProfile'
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AdvertiserProfile' element={<AdvertiserProfile />} />
          <Route path='/DriverProfile' element={<DriverProfile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Ad' element={<Ad />} />
          <Route path='/Cards' element={<Cards />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;