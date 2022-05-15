import React, { useEffect, useState } from 'react';
import api from "../services/api";
import Musica from "./Musica";

function Search() {

  const [musicas, setMusicas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    pesquisarMusicas();
  }, [pesquisa]);

  const handleChange = (e) => {
    setPesquisa(e.target.value);
  };

  const pesquisarMusicas = () => {
    api
      .get("/musicas") // porta do json-server
      .then((res) => {
        const musicasRecebidas = res.data;
        const musicasFiltradas = musicasRecebidas.filter(
          (musica) => musica.nome.toLowerCase().includes(pesquisa.toLowerCase())
        );
        setMusicas(musicasFiltradas);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <label htmlFor="pesquisa">Pesquisa de músicas: </label>
      <input type="text" id="pesquisa" onChange={handleChange}/>
      {/*<button onClick={pesquisarMusicas} >*/}
      {/*  Pesquisar*/}
      {/*</button>*/}
      {pesquisa && musicas.map(musica => <Musica {...musica} />)}
    </div>
  )
}

export default Search;