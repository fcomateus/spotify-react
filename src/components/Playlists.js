import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { getCookie } from '../services/cookie';
import PrivatePlaylists from './PrivatePlaylists';
import './styles/Playlists.css';

export default function Playlists() {
  const id = getCookie('spotifycookie');
  const [carregando, setCarregando] = useState(true);
  const [playlists, setPlaylists] = useState({});

  async function fetchPlaylists() {
    setCarregando(true);
    const response = await api.get('/playlists');
    setPlaylists(response.data);
    setCarregando(false);
  }

  useEffect(() => {
    fetchPlaylists();
  }, []);

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className='container my-5 playlistWrapper'>
      <div>{id && <PrivatePlaylists id={id} />}</div>
      <div className='bg-dark rounded px-5 pt-3'>
        <h1 className='text-center mb-3 text-light'>
          Playlists pra melhorar o seu dia.
        </h1>
        <div className='row row-cols-4 m-0'>
          {playlists.map((playlist) => {
            return !playlist?.idUsuario ? (
              <div className='col pb-4 px-2 m-0' key={playlist._id}>
                <Link to={`/playlists/${playlist._id}`}>
                  <img
                    // id="capa"
                    src={playlist.capa}
                    height={200}
                    width={200}
                  />
                </Link>
              </div>
            ) : (
              ''
            );
          })}
        </div>
      </div>
    </div>
  );
}
