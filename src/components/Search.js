import React, { useEffect, useState } from "react";
import api from "../services/api";
import Musica from "./Musica";

function Search({listaMusicas, modificaListaMusicas}) {
  const [musicas, setMusicas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    pesquisarMusicas();
  }, [pesquisa]);

  const handleChange = (e) => {
    setPesquisa(e.target.value);
  };

  async function pesquisarMusicas() {
    try {
      const musicasRecebidas = await api.get("/musicas"); // porta do json-server
      const musicasFiltradas =
        pesquisa !== ""
          ? musicasRecebidas.data.filter((musica) => {
              const search = `
                ${musica.nome.toLowerCase().match(pesquisa.toLowerCase())}
                ${musica.autor.toLowerCase().match(pesquisa.toLowerCase())}
              `;

              return search.indexOf(pesquisa.toLowerCase()) > -1;
            })
          : musicasRecebidas.data;
      setMusicas(musicasFiltradas);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* <label htmlFor="pesquisa">Pesquisa de músicas: </label> */}
      {/* <input type="text" id="pesquisa" placeholder='Buscar musica...' onChange={handleChange} style={{width: '90%'}} /> */}
      <div className="input-group bg-dark" style={{ width: "90%" }}>
        <input
          type="text"
          className="form-control bg-dark text-white novalidate"
          placeholder="Buscar música..."
          aria-label="Buscar música..."
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
      </div>

      {/*<button onClick={pesquisarMusicas} >*/}
      {/*Pesquisar*/}
      {/*</button>*/}
      <ul
        className="player-list"
        style={{
          padding: "24px 20px",
          overflow: "auto",
          width: "100%",
          height: "100%",
          marginBottom: 0,
          backgroundColor: "transparent",
        }}
      >
        {/* {musicas.map((musica, indice) => (
          
        ))} */}
        {musicas.map((musica) => (
          <Musica key={musica.id} {...musica} inserido={listaMusicas.includes(musica.id)} modificaListaMusicas={modificaListaMusicas}/>
        ))}
      </ul>
    </div>
  );
}

export default Search;
