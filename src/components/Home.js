import React from 'react'
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="pessoa2.webp" className="d-block mx-lg-auto img-fluid" alt="Imagem" width="700"
                        height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Spotify</h1>
                    <p className="lead">Spotify é um serviço de streaming de música, podcast e vídeo que foi lançado oficialmente em 7 de outubro de 2008.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to='/cadastro'>
                        <button type="button" style={{backgroundColor:'#1db954', borderColor: 'green'}} className="btn btn-lg px-4 me-md-2">Cadastro</button>
                        </Link>
                        <Link to='/faq'> 
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">FAQ</button>
                        </Link>
                        <a href="./FAQ.html"></a>
                    
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;