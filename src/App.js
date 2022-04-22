import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FAQ from './components/Faq';
import Cadastro from './components/Cadastro';
import Playlists from './components/Playlists';

import Song from './components/Song';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/playlists/:id' element={<Song />} />
        {/* <Route path='/song' element={<Song />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
