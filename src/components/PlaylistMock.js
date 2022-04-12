import React from 'react';
import { Link } from 'react-router-dom';
import playlistsMock from '../data/playlistsMock';

export default function PlaylistMock() {
  return (
    <div className='container my-5'>
      <div className='bg-dark rounded px-5 pt-3'>
        <h1 className='text-center mb-3 text-light'>
          Playlists pra melhorar o seu dia.
        </h1>
        <div className='row row-cols-4 m-0'>
          {playlistsMock.map((playlist) => {
            return (
              <div className='col pb-4 px-2 m-0' key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>
                  <img
                    // id="capa"
                    src={playlist.Capa}
                    height={250}
                    width={250}
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
