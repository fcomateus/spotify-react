import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FAQ from './components/Faq';
import Cadastro from './components/Cadastro';
import Playlists from './components/Playlists';
import Login from './components/Login';
import Profile from './components/Profile';
import Playlist from './components/Playlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/playlists/:id' element={<Playlist />} />
        <Route path='/profile' element={<Profile />} />

        {/* <Route path='/song' element={<Song />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
