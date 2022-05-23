import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import "./styles/Playlists.css";

function PrivatePlaylists({ id }) {
  const [privatePlaylists, setPrivatePlaylists] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetchUserPlaylist(id);
  }, []);

  async function fetchUserPlaylist(id) {
    setCarregando(true);
    const response = await api.get(`/playlists?idUsuario=${id}`);
    setPrivatePlaylists(response.data);
    console.log(response);
    setCarregando(false);
  }

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <div className="bg-dark rounded px-5 pt-3 my-5">
        <h1 className="text-center mb-3 text-light">
          Suas Playlists privadas.
        </h1>
        {privatePlaylists.length === 0 ? (
          <h3 className="text-center mb-3 text-light">
            Nenhuma playlist privada!
          </h3>
        ) : (
          <div className="row row-cols-4 m-0">
            {privatePlaylists.map((playlist) => {
              return (
                <div
                  className="col pb-4 px-2 m-0"
                  key={playlist.id}
                  title={playlist.descricao}
                >
                  <Link to={`/playlists/${playlist.id}`}>
                    <img src={playlist.Capa} height={200} width={200} />
                  </Link>
                </div>
              );
            })}
            <div className="col pb-4 px-2 m-0" title="Adicionar nova playlist">
              <Link to={`/playlists/adicionar`}>
                <img src="/capas/Adicionar.png" height={200} width={200} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PrivatePlaylists;
