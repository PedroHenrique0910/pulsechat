import "./Home.css";

export default function Home() {
  const salas = [
    { id: 1, nome: "Sala 1: Amigos", desc: "Descrição da sala 1: amigos" },
    { id: 2, nome: "Sala 2: Gamers", desc: "Descrição da sala: gamers" },
    { id: 3, nome: "Sala 3: Estudo", desc: "Descrição da sala 3: estudo" },
    { id: 4, nome: "Sala 4: Amigos", desc: "Descrição do carsien dada eatendo nem stc." },
    { id: 5, nome: "Sala 5: Gamers", desc: "Descrição da sala 5" },
  ];

  return (
    <div className="page">
      <nav className="nav">
        <span className="nav-logo">Logomarca</span>
        <div className="nav-links">
          <a href="#">Início</a>
          <a href="#">Explorar</a>
          <a href="#">Sobre</a>
        </div>
        <div className="nav-icon">👤</div>
      </nav>

      <div className="body">
       <main className="main">
  <h1 className="site-title">PulseChat</h1>
  <p className="site-slogan">Participe de conversas globais em tempo real, onde as ideias se encontram e novas amizades florescem.</p>

  <img src="/chat.png" alt="ilustração" className="main-img" />

  <div className="main-info">
    <div className="info-block">
      <h3 className="info-title">Regras da Sala</h3>
      <p className="info-text">
        Parágrafo de exemplo com informações sobre a sala atual ou
        detalhes gerais do site. Pode conter regras, descrição, etc.
      </p>
    </div>

    <div className="info-block">
      <h3 className="info-title">Guia do Usuário</h3>
      <p className="info-text">
        Conheça o exemplo com informações sobre como usar o site
        e aproveitar ao máximo as salas disponíveis.
      </p>
    </div>
  </div>
</main>

        <aside className="sidebar">
          {salas.map((sala) => (
            <div key={sala.id} className="room">
              <div className="room-icon" />
              <div>
                <p className="room-name">{sala.nome}</p>
                <p className="room-desc">{sala.desc}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>

      <footer className="footer">
        <div>
          <p>© 2023 Nome do Site.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="footer-links">
          <a href="#">Contato</a>
          <a href="#">Termos de uso</a>
          <a href="#">Política de privacidade</a>
        </div>
        <div className="footer-socials">
          <span>f</span>
          <span>ig</span>
          <span>yt</span>
        </div>
      </footer>
    </div>
  );
}