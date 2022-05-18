import React, {useEffect, useState} from 'react';
import api from "../services/api";
import {Link} from "react-router-dom";
import "./styles/Playlists.css";

function PrivatePlaylists({id}) {

  const [privatePlaylists, setPrivatePlaylists] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetchUserPlaylist(id)
  }, []);

  const fetchUserPlaylist = (id) => {
    setCarregando(true);
    api
      .get(`/playlists?idUsuario=${id}`)
      .then((res) => {
        setPrivatePlaylists(res.data);
        console.log(res.data);
        setCarregando(false);
      })
      .catch((error) => console.log(error));
  }

  if (carregando) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="container my-5 colunaPrivados">
      <div className="bg-dark rounded px-5 pt-3">
        <h1 className="text-center mb-3 text-light">
          Suas Playlists privadas.
        </h1>
        {privatePlaylists.length === 0 ? (
          <h3 className="text-center mb-3 text-light">Nenhuma playlist privada!</h3>
        ) : (
          <div className="row row-cols-4 m-0">
            {privatePlaylists.map((playlist) => {
              return (
                <div className="col pb-4 px-2 m-0" key={playlist.id}>
                  <Link to={`/playlists/${playlist.id}`}>
                    <img
                      src={playlist.Capa}
                      height={250}
                      width={250}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PrivatePlaylists;