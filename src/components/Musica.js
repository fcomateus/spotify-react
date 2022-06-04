import React, { useEffect, useState } from 'react';

function Musica({ _id, nome, autor, inserido, modificaListaMusicas }) {
  return (
    <>
      <li key={_id} onClick={() => modificaListaMusicas(_id)}>
        <img
          className='list-cover'
          src={`/capas/${inserido ? 'Excluir' : 'Adicionar'}.png`}
          alt='capa_musica'
          style={{ width: 35 }}
        />
        <div className='list-info'>
          <div className='info-title'>{nome}</div>
          <div className='info-artist'>{autor}</div>
        </div>
      </li>
    </>
  );
}

export default Musica;
