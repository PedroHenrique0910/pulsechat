import "./Chat.css";

const conectados = [
  { id: 1, nome: "Maria Silva" },
  { id: 2, nome: "João Santos" },
  { id: 3, nome: "Ana Pereira" },
  { id: 4, nome: "Carlos Lima" },
  { id: 5, nome: "Fernanda R." },
];

const mensagens = [
  { id: 1, texto: "Oi, tudo bem? Como andam as coisas?", hora: "14:30", minha: false },
  { id: 2, texto: "Oi! Tudo ótimo por aqui.", hora: "14:31", minha: true },
  { id: 3, texto: "Você conseguiu verificar os documentos que enviei?", hora: "14:32", minha: false },
  { id: 4, texto: "Sim, verifiquei. Ficou ótimo!", hora: "14:33", minha: true },
];

export default function Chat() {
  return (
    <div className="chat-wrap">
      <aside className="sidebar">
        <p className="sidebar-title">CONECTADOS</p>
        <div className="connected-list">
          {conectados.map((u) => (
            <div key={u.id} className="user-item">
              <div className="avatar"><div className="dot" /></div>
              <span className="user-name">{u.nome}</span>
            </div>
          ))}
        </div>
      </aside>

      <div className="main">
        <div className="chat-header">
          <div className="header-avatar" />
          <div className="header-info">
            <p className="header-name">Estudos</p>
            <p className="header-sub">{conectados.length} conectados</p>
          </div>
        </div>

        <div className="messages">
          {mensagens.map((msg) => (
            <div key={msg.id} className={`msg-row ${msg.minha ? "me" : ""}`}>
              <div className="msg-avatar" />
              <div>
                <div className={`bubble ${msg.minha ? "me" : "them"}`}>{msg.texto}</div>
                <p className="msg-time" style={{ textAlign: msg.minha ? "right" : "left" }}>{msg.hora}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="input-area">
          <input type="text" placeholder="Digite sua mensagem..." />
          <button className="send-btn">➤</button>
        </div>
      </div>
    </div>
  );
}