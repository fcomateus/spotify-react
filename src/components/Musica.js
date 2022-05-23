import React, { useEffect, useState } from "react";

function Musica({ id, nome, autor, inserido, modificaListaMusicas }) {
  return (
    <>
      <li
        key={id}
        onClick={() => modificaListaMusicas(id)}
      >
        <img className="list-cover" src={`/capas/${inserido ? 'Excluir' : 'Adicionar'}.png`} alt="capa_musica" style={{width: 35}}/>
        <div className="list-info">
          <div className="info-title">{nome}</div>
          <div className="info-artist">{autor}</div>
        </div>
      </li>
    </>
  );
}

export default Musica;
