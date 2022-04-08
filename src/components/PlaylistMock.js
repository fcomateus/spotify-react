import React from "react";
import { Link } from "react-router-dom";
import playlistsMock from "../Data/playlistsMock";


export default function PlaylistMock() {
  return (
    <div className="container">
      <div className="row row-cols-4">
        {playlistsMock.map((playlist) => {
          return (
            <Link to={`/playlists/${playlist.id}`}>
                
                <div className="col">
                  <div
                    className="card"
                    style={{
                      background:
                        "linearGradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2))",
                    }}
                  >
                    <img
                      className="card-user avatar avatar-large"
                      src={playlist.Capa}
                    />
                  </div>
                </div>
            </Link>
          );
        })}
      </div>
    </div>
    // <section className="gradient-custom">
    //   <div className="container py-5 h-100">
    //     <div className="row justify-content-center align-items-center h-100">
    //       <div className="col-12 col-lg-9 col-xl-7">
    //         <div className="card shadow-2-strong card-registration bg-dark">
    //           <div className="row align-items-center justify-content-center h-100">
    //             <h3 className="row justify-content-center align-self-center text-light">
    //               Playlists para melhorar o seu dia!
    //             </h3>
    //           </div>

    //           {/* <div>
    //             <div className="row align-items-start">
    //               <div className="col-3">Capa</div>
    //               <div className="col-3">Capa</div>
    //               <div className="col-3">Capa</div>
    //               <div className="col-3">Capa</div>
    //             </div>
    //             <div className="row align-items-start">
    //               <div className="col-3">Capa</div>
    //               <div className="col-3">Capa</div>
    //               <div className="col-3">Capa</div>
    //               <div className="col-3">Capa</div>
    //             </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
