import React from "react";
import playlistsMock from "../Data/playlistsMock";
export default function Song() {
  return(
    playlistsMock.map((playlist) =>
      playlist.musicas.map((musica) =>
        <audio controls src={musica.audio}/>
      )
    )
  )
}