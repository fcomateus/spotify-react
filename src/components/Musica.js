import React, {useEffect, useState} from 'react';

function Musica({ id, nome, autor, audio }) {

  return (<div>
    {nome + " / " + autor }
  </div>)
}

export default Musica;