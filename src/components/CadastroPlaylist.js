import { useEffect, useState } from "react";
import api from "../services/api";
import { getCookie, setCookie } from "../services/cookie";

function CadastroPlaylist() {
  const id = getCookie("spotifycookie");

  const usuarioVazio = {
    idUsuario: id,
    descricao: "",
    Capa: "/capas/Privada.png",
    musicas: [],
  };

  const [playlist, setPlaylist] = useState(usuarioVazio);
  const [validado, setValidado] = useState(false);

  useEffect(() => {
    if (Object.keys(playlist).some((campo) => !playlist[campo])) {
      setValidado(true);
    } else {
      setValidado(false);
    }
  }, [playlist]);

  const handleChange = (e) => {
    const campo = e.target.name;
    const valor = e.target.value;
    setPlaylist({ ...playlist, [campo]: valor });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const dadosEnviados = { ...playlist };
    delete dadosEnviados.emailConf;
    const response = await api.post("/playlists", dadosEnviados);
    const data = response.data;
    console.log(data);
    setPlaylist(usuarioVazio);
    window.location.href = "/playlists";
  }

  return (
    <section className="gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                  Cadastre sua playlist aqui
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <div>
                        <img
                          src="/capas/Privada.png"
                          alt="Capa"
                          className="rounded w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-8 mb-4">
                      <div className="form-outline mb-4 mt-4">
                        <input
                          type="text"
                          id="descricao"
                          name="descricao"
                          value={playlist.descricao}
                          className="form-control form-control-lg"
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="descricao">
                          Nome da Playlist
                        </label>
                      </div>

                      <div className="pt-2">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="Cadastrar"
                          style={{
                            backgroundColor: "#1db954",
                            borderColor: "green",
                          }}
                          disabled={validado}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CadastroPlaylist;
