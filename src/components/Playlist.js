import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Search from "./Search";
// import playlistsMock from '../data/playlistsMock';

export default function Song() {
  let atualizaTempo;

  const { id } = useParams();

  const [musicas, setMusicas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [playlist, setPlaylist] = useState({ musicas: [] });

  const [tocando, setTocando] = useState(false);
  const [indicePlaylist, setIndicePlaylist] = useState(0);
  const [musicaAtual] = useState(new Audio());

  const [tempoAtual, setTempoAtual] = useState("00:00");
  const [tempoTotal, setTempoTotal] = useState("00:00");
  const [barraProgressao, setBarraProgressao] = useState(0);

  useEffect(() => {
    fetchPlaylists();
    return () => pausarMusica();
  }, []);

  useEffect(() => {
    if (musicas.length) {
      carregarMusica(indicePlaylist);
      tocarMusica();
    }
  }, [indicePlaylist]);

  useEffect(() => {
    carregarMusica(indicePlaylist);
  }, [musicas]);

  async function fetchPlaylists() {
    setCarregando(true);
    try {
      const res = await api.get("/playlists"); // porta do json-server
      await carregarMusicas(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setCarregando(false);
    }
  }

  async function carregarMusicas(playlists) {
    const playlistUnica = playlists.find((item) => item.id == id);
    setPlaylist(playlistUnica);

    console.log("playlist", playlistUnica);
    const res = await api.get("/musicas");
    const listaMusicas = await res.data.filter((musica) =>
      playlistUnica.musicas.includes(musica.id)
    );

    setMusicas(listaMusicas);
  }

  function carregarMusica(indicePlaylist) {
    clearInterval(atualizaTempo);
    resetarValores();

    console.log(musicas, indicePlaylist);
    if (musicas.length) {
      musicaAtual.src = musicas[indicePlaylist].audio;
      musicaAtual.load();

      atualizaTempo = setInterval(procuraAtualizacao, 1000);

      musicaAtual.addEventListener("ended", proximaMusica);
    }
  }

  function resetarValores() {
    setTempoAtual("00:00");
    setTempoTotal("00:00");
    setBarraProgressao(0);
  }

  function tocarPausarMusica() {
    if (!musicaAtual.src) {
      carregarMusica(indicePlaylist);
      return tocarMusica();
    }

    if (!tocando) tocarMusica();
    else pausarMusica();
  }

  function tocarMusica() {
    musicaAtual.play();
    setTocando(true);
  }

  function pausarMusica() {
    musicaAtual.pause();
    setTocando(false);
  }

  function proximaMusica() {
    if (indicePlaylist < musicas.length - 1)
      setIndicePlaylist(indicePlaylist + 1);
    else setIndicePlaylist(0);
  }

  function musicaAnterior() {
    if (indicePlaylist > 0) setIndicePlaylist(indicePlaylist - 1);
    else setIndicePlaylist(musicas.length - 1);
  }

  function definirTempoAtual(event) {
    let procurarPor = musicaAtual.duration * (event.target.value / 100);

    setBarraProgressao(event.target.value);

    musicaAtual.currentTime = procurarPor;
  }

  function procuraAtualizacao() {
    let posicaoBarraProgressao = 0;

    if (!isNaN(musicaAtual.duration)) {
      posicaoBarraProgressao =
        musicaAtual.currentTime * (100 / musicaAtual.duration);
      setBarraProgressao(posicaoBarraProgressao);

      let currentMinutes = Math.floor(musicaAtual.currentTime / 60);
      let currentSeconds = Math.floor(
        musicaAtual.currentTime - currentMinutes * 60
      );
      let durationMinutes = Math.floor(musicaAtual.duration / 60);
      let durationSeconds = Math.floor(
        musicaAtual.duration - durationMinutes * 60
      );

      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = "0" + durationMinutes;
      }

      setTempoAtual(currentMinutes + ":" + currentSeconds);
      setTempoTotal(durationMinutes + ":" + durationSeconds);
    }
  }

  async function modificaListaMusicas(id) {
    const listaMusicasSalvas = musicas.filter((musica) => musica.id === id);
    const listaMusicas = musicas.map((musica) => musica.id);
    if (listaMusicasSalvas.length) {
      const novaListaMusicasSalvas = listaMusicas.filter(
        (musica) => musica !== id
      );
      console.log("Lista de musicas", musicas, novaListaMusicasSalvas, {
        ...playlist,
        musicas: [...novaListaMusicasSalvas],
      });
      await api.put(`/playlists/${playlist.id}`, {
        ...playlist,
        musicas: [...novaListaMusicasSalvas],
      });
    } else {
      const novaListaMusicasSalvas = [...listaMusicas, id];

      await api.put(`/playlists/${playlist.id}`, {
        ...playlist,
        musicas: [...novaListaMusicasSalvas],
      });
    }
    pausarMusica();
    fetchPlaylists();
  }

  return (
    <div className="music-player">
      <div className="player-main bg-dark">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="main-current">
            <div className="current-keyvisual">
              <div
                style={{
                  position: "absolute",
                  width: "250px",
                  height: "250px",
                  backgroundImage: `url(/${playlist?.Capa})`,
                  backgroundSize: "cover",
                  WebkitFilter: "blur(25px)",
                  filter: "blur(25px)",
                }}
              />
              <img src={playlist?.Capa} alt="capa" />
            </div>
            <div className="current-info">
              <h1 className="text-center mb-3 text-light">
                {playlist?.descricao}
              </h1>
              {playlist?.idUsuario ? (
                <p className="text-light">Playlist Privada</p>
              ) : (
                <p className="text-light">Playlist Pública</p>
              )}
            </div>
          </div>

          {playlist.idUsuario && <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "40%",
              height: "250px",
            }}
          >
            <Search
              listaMusicas={musicas.map((item) => item.id)}
              modificaListaMusicas={modificaListaMusicas}
            />
          </div>}
        </div>
        <p className="text-light">{musicas[indicePlaylist]?.nome}</p>

        <div className="main-control">
          <div
            className="btn _previous"
            style={{
              backgroundImage: `url("/player/previous.svg")`,
            }}
            onClick={() => musicaAnterior()}
          ></div>
          <div
            className={`btn _${tocando ? "pause" : "play"}`}
            style={{
              backgroundImage: `url("/player/${
                tocando ? "pause" : "play"
              }.svg")`,
            }}
            onClick={() => tocarPausarMusica()}
          />
          <div
            className="btn _next"
            style={{
              backgroundImage: `url("/player/next.svg")`,
            }}
            onClick={() => proximaMusica()}
          ></div>
          <div className="btn _timeline">
            <span className="current-time">{tempoAtual}</span>
            {/* <span className="timescope"> */}
            <input
              type="range"
              min="1"
              max="100"
              value={barraProgressao}
              className="seek_slider"
              onChange={definirTempoAtual}
            />
            {/* </span> */}
            <span className="end-time">{tempoTotal}</span>
          </div>
        </div>
      </div>
      <ul className="player-list">
        {!carregando ? (
          <>
            {musicas.map((musica, indice) => (
              <li
                key={musica.id}
                onClick={() =>
                  indice == indicePlaylist
                    ? tocarPausarMusica()
                    : setIndicePlaylist(indice)
                }
              >
                {indice == indicePlaylist ? (
                  <div
                    className="playing"
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(0,0,0,0.7)",
                    }}
                  >
                    <div
                      className="playing-img"
                      style={{
                        position: "absolute",
                        backgroundImage: `url("/player/${
                          tocando ? "pause" : "play"
                        }.svg")`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                ) : null}
                <img
                  className="list-cover"
                  src={playlist?.Capa}
                  alt="capa_musica"
                />
                <div className="list-info">
                  <div className="info-title">{musica.nome}</div>
                  <div className="info-artist">{musica.autor}</div>
                </div>
              </li>
            ))}
          </>
        ) : (
          <h1>Carregando...</h1>
        )}
      </ul>
    </div>
  );
}
