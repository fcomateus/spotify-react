import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import playlistsMock from '../data/playlistsMock';

export default function Song() {
  const { id } = useParams();

  const [musicas, setMusicas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState({ musicas: [] });

  useEffect(() => {
    carregarMusicas();
  }, [playlists]);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = () => {
    setCarregando(true);
    axios
      .get('http://localhost:3001/playlists') // porta do json-server
      .then((res) => {
        setPlaylists(res.data);
        setCarregando(false);
      })
      .catch((error) => console.log(error));
  };

  async function carregarMusicas() {
    const playlistUnica = playlists.find((item) => item.id == id);
    setPlaylist(playlistUnica);
    const listaMusicas = await playlist.musicas.map((musica) => {
      const audio = new Audio(musica.audio);
      return { musica: audio, tocando: false, tempoAtual: 0 };
    });

    setMusicas(listaMusicas);
  }

  function toggle(indice) {
    let listaMusicas = [...musicas];

    if (!musicas[indice].tocando) {
      listaMusicas[indice].musica.play();
      monitorarDuracao(indice);
    } else {
      listaMusicas[indice].musica.pause();
    }

    listaMusicas[indice] = {
      ...listaMusicas[indice],
      tocando: !listaMusicas[indice].tocando,
    };

    setMusicas(listaMusicas);
  }

  function monitorarDuracao(indice) {
    let listaMusicas = [...musicas];

    listaMusicas[indice].musica.addEventListener('timeupdate', (time) => {
      let listaMusicas = [...musicas];
      // console.log(musicas[indice].musica.currentTime, musicas[indice].musica.duration, musicas[indice].musica.currentTime * musicas[indice].musica.duration /100);

      listaMusicas[indice] = {
        ...listaMusicas[indice],
        tocando: true,
        tempoAtual: listaMusicas[indice].musica.currentTime,
      };

      setMusicas(listaMusicas);
    });

    listaMusicas[indice].musica.addEventListener('ended', (time) => {
      let listaMusicas = [...musicas];

      listaMusicas[indice].musica.currentTime = 0;

      listaMusicas[indice] = {
        ...listaMusicas[indice],
        tocando: false,
        tempoAtual: 0,
      };

      setMusicas(listaMusicas);
    });
  }

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className='music-player'>
      <div className='player-main bg-dark'>
        <div className='main-current'>
          <div className='current-keyvisual'>
            <div
              style={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                backgroundImage: `url(/${playlist?.Capa})`,
                backgroundSize: 'cover',
                WebkitFilter: 'blur(25px)',
                filter: 'blur(25px)',
              }}
            />
            <img src={playlist?.Capa} alt='capa' />
          </div>
          <div className='current-info'>
            <h1 className='text-center mb-3 text-light'>
              {playlist?.descricao}
            </h1>
            <p className='text-light'>{playlist?.descricao}</p>
          </div>
        </div>
      </div>
      <ul className='player-list'>
        {playlist.musicas.map((musica, indice) => (
          <li key={musica.id}>
            <img
              className='list-cover'
              src={playlist?.Capa}
              alt='capa_musica'
            />
            <div className='list-info'>
              <div className='info-title'>{musica.nome}</div>
              <div className='info-artist'>{musica.autor}</div>
            </div>
            <audio hidden controls src={musica.audio} />
            <div className='main-control'>
              <div
                className={`btn _${
                  musicas[indice]?.tocando ? 'pause' : 'play'
                }`}
                style={{
                  backgroundImage: `url("/player/${
                    musicas[indice]?.tocando ? 'pause' : 'play'
                  }.svg")`,
                }}
                onClick={() => toggle(indice)}
              />

              <div className='btn _timeline'>
                <span className='current-time'>
                  {musicas[indice]?.musica
                    ? `${`${new Date(
                        musicas[indice].musica.currentTime * 1000
                      ).getUTCMinutes()}`.padStart(2, '0')}:${`${new Date(
                        musicas[indice].musica.currentTime * 1000
                      ).getUTCSeconds()}`.padStart(2, '0')}`
                    : '00:00'}
                </span>

                <span className='timescope'>
                  <span
                    className='timescope-dot'
                    style={{
                      left: `${
                        musicas[indice]?.musica
                          ? (musicas[indice].musica.currentTime * 100) /
                            musicas[indice].musica.duration
                          : 0
                      }%`,
                    }}
                  ></span>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      display: 'block',
                      width: `${
                        musicas[indice]?.musica
                          ? (musicas[indice].musica.currentTime * 100) /
                            musicas[indice].musica.duration
                          : 0
                      }%`,
                      height: '100%',
                      backgroundColor: '#212529',
                      cursor: 'pointer',
                      zIndex: 1,
                    }}
                  ></div>
                </span>
                <span className='end-time'>
                  {musicas[indice]?.musica.duration
                    ? `${new Date(
                        musicas[indice].musica.duration * 1000
                      ).getUTCMinutes()}:${new Date(
                        musicas[indice].musica.duration * 1000
                      ).getUTCSeconds()}`
                    : '--:--'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
