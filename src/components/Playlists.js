import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function Playlists() {
  const [carregando, setCarregando] = useState(true);
  const [playlists, setPlaylists] = useState({});

  const fetchPlaylists = () => {
    setCarregando(true);
    api.get('/playlists') // porta do json-server
    .then(res => {
      setPlaylists(res.data)
      setCarregando(false)
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchPlaylists();
  }, []);

  if (carregando) {
    return (
        <h1>
          Carregando...
        </h1>
    );
  }

  return (
    <div className='container my-5'>
      <div className='bg-dark rounded px-5 pt-3'>
        <h1 className='text-center mb-3 text-light'>
          Playlists pra melhorar o seu dia.
        </h1>
        <div className='row row-cols-4 m-0'>
          {playlists.map((playlist) => {
            return (
              <div className='col pb-4 px-2 m-0' key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>
                  <img
                    // id="capa"
                    src={playlist.Capa}
                    height={250}
                    width={250}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
