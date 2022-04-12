import { useParams } from 'react-router-dom';
import playlists from '../data/playlistsMock';

function Playlist() {
  const { id } = useParams();

  return (
    <div>
      {playlists.map((playlist) => {
        if (playlist.id == parseInt(id)) {
          playlist.musicas.map((musica) => (
            <audio controls src={musica.audio} />
          ));
        }
      })}
    </div>
  );
}

export default Playlist;
