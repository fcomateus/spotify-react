import { useParams } from 'react-router-dom';
import playlists from '../data/playlistsMock';

function Playlist() {
  const { id } = useParams();

  return playlists
    .filter((playlist) => playlist.id == id)
    .map((playlist) =>
      playlist.musicas.map((musica) => (
        <audio key={musica.id} controls src={musica.audio} />
      ))
    );
}

export default Playlist;
