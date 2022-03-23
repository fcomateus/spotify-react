import React from 'react';

function faq(){
    return(
        <div className="container mt-3" style={{marginBottom: '8.35em'}}>
        <h2>FAQs</h2>
        <div id="accordion">
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseOne">
                        Por que minha assinatura Premium mudou para gratuita?
                    </a>
                </div>
                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                    <div className="card-body">
                        O motivo mais comum para sua assinatura Premium desaparecer repentinamente é devido a uma
                        segunda conta do Spotify criada usando o Facebook.
                        A melhor coisa a tentar é sair do Spotify e voltar usando seu endereço de e-mail e senha. Evite
                        usar o botão ‘Fazer login com o Facebook’, pois isso fará com que você volte à sua conta criada
                        no Facebook.
                        Se isso funcionar e agora você está vendo sua conta Premium, vale a pena fechar sua conta
                        gratuita para evitar qualquer confusão no futuro.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                        Como funciona a oferta Premium de 1 mês grátis?
                    </a>
                </div>
                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Entendemos que você gostaria de explorar todos os recursos exclusivos do Premium sem nenhum
                        custo antes de se comprometer com um plano recorrente. É por isso que oferecemos um teste
                        gratuito de 1 mês para quem nunca testou o Premium antes. Durante o período de teste gratuito,
                        você terá a experiência Premium completa de sua escolha, assim como qualquer outro assinante
                        pago.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                        Por que não consigo reproduzir arquivos locais?
                    </a>
                </div>
                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Local Files are music files stored on your computer that can be played through the Spotify app.
                        They’re put into the Spotify app by selecting Sources for Local Files from within the app’s
                        Settings menu.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                        O que é o Programa Spotify Star?
                    </a>
                </div>
                <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Como muitos fóruns online, a Comunidade Spotify tem seu próprio grupo de superusuários,
                        referidos e classificados como Estrelas. Suas postagens serão um pouco diferentes das de outros
                        usuários da Comunidade.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
                        Como faço para ativar ou desativar o Aleatório?
                    </a>
                </div>
                <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        Shuffling is the easiest way to get a random mix of songs. Here's how to toggle Shuffle on or
                        off for your devices.
                        <br/>
                        To turn on Shuffle in desktop, hit the crossed arrows icon just left of the back skip button in
                        the Now Playing bar. It'll be highlighted green with a green dot underneath if it's on.
                        <br/>
                        <img src="https://community.spotify.com/t5/image/serverpage/image-id/90410iC687A12378EC09F9/image-size/medium?v=v2"
                            alt=""
                            width={400}/>

                        <br/>
                        To turn it off, just click it again so it appears gray.

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseSix">
                        Como faço para encontrar meus amigos no Spotify?
                    </a>
                </div>
                <div id="collapseSix" className="collapse" data-bs-parent="#accordionSix">
                    <div className="card-body">
                        You should be able to find any user in Spotify using Search, but sometimes this workaround can
                        be helpful.
                        <br/>
                        If you can’t find another user just by typing their name, it’s likely because they don’t have a
                        display name. If you know their username, try searching spotify:user: followed by their Spotify
                        username instead (with no spaces).
                        <br/>
                        If you connect your Spotify account to Facebook, you can view a recommended list of friends and
                        featured people to follow.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default faq;