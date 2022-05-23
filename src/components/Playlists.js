import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Search from "./Search";
import { getCookie } from "../services/cookie";
import PrivatePlaylists from "./PrivatePlaylists";
import "./styles/Playlists.css";

export default function Playlists() {
  const id = getCookie("spotifycookie");
  const [carregando, setCarregando] = useState(true);
  const [playlists, setPlaylists] = useState({});

  async function fetchPlaylists() {
    setCarregando(true);
    const response = await api.get("/playlists");
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
    <div className="container my-5 playlistWrapper">
      <div>{id && <PrivatePlaylists id={id} />}</div>
      <div className="bg-dark rounded px-5 pt-3">
        <h1 className="text-center mb-3 text-light">
          Playlists pra melhorar o seu dia.
        </h1>
        <div className="row row-cols-4 m-0">
          {playlists.map((playlist) => {
            return (
              <div className="col pb-4 px-2 m-0" key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>
                  <img
                    // id="capa"
                    src={playlist.Capa}
                    height={200}
                    width={200}
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
