<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>README — Sistema de Missões Educacionais</title>
  <style>
    :root{
      --bg:#f6f9fc;
      --card:#ffffff;
      --muted:#6b7280;
      --accent:#2b8aef;
      --accent-2:#2ecc71;
      --mono: 'SFMono-Regular', Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
      --radius:12px;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color:#0f172a;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      background:linear-gradient(180deg, #f6f9fc 0%, #eef6ff 100%);
      padding:40px;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }
    .container{
      max-width:980px;
      margin:0 auto;
      background:var(--card);
      border-radius:16px;
      padding:28px;
      box-shadow:0 10px 30px rgba(10,20,40,0.06);
      border:1px solid rgba(15,23,42,0.04);
    }
    header h1{
      margin:0 0 6px 0;
      font-size:28px;
      display:flex;
      gap:12px;
      align-items:center;
    }
    header p.lead{
      margin:0 0 18px 0;
      color:var(--muted);
    }
    .grid{
      display:grid;
      grid-template-columns:1fr 280px;
      gap:20px;
    }
    .card{
      background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,1));
      border-radius:12px;
      padding:18px;
      box-shadow:0 6px 18px rgba(12,18,30,0.04);
      border:1px solid rgba(10,20,40,0.03);
    }
    .sidebar .card{
      position:sticky;
      top:28px;
    }
    h2{font-size:18px;margin:0 0 10px 0}
    h3{font-size:15px;margin:0 0 8px 0;color:#0f172a}
    p{margin:0 0 12px 0;color:#113}
    ul{margin:8px 0 12px 20px}
    pre{
      background:#0b1220;color:#e6f1ff;padding:12px;border-radius:8px;overflow:auto;font-family:var(--mono);font-size:13px;
    }
    code{background:#eef2ff;padding:2px 6px;border-radius:6px;font-family:var(--mono);font-size:13px}
    table{width:100%;border-collapse:collapse;margin:10px 0 14px 0}
    th,td{padding:8px 10px;text-align:left;border-bottom:1px solid #eef2ff}
    th{background:transparent;color:#0f172a}
    .tech-table td{color:var(--muted)}
    .section{
      margin-bottom:16px;
    }
    .missions{
      display:grid;
      grid-template-columns:repeat(2, minmax(0,1fr));
      gap:12px;
    }
    .mission-card{
      background:#fbfdff;padding:12px;border-radius:10px;border:1px solid #eef6ff;
    }
    .muted{color:var(--muted);font-size:13px}
    .code-block{margin:12px 0}
    .footer{margin-top:22px;padding-top:8px;border-top:1px dashed #eef6ff;color:var(--muted);font-size:13px}
    @media (max-width:900px){
      .grid{grid-template-columns:1fr; padding-bottom:20px}
      .missions{grid-template-columns:1fr}
    }
    .copy-btn{
      display:inline-block;background:var(--accent);color:white;padding:8px 12px;border-radius:8px;text-decoration:none;font-size:13px;
      box-shadow:0 4px 14px rgba(43,138,239,0.18);border:none;cursor:pointer;
    }
    .badge{display:inline-block;padding:6px 8px;border-radius:999px;background:#eef6ff;color:var(--accent);font-weight:600;margin-right:8px;font-size:13px}
  </style>
</head>
<body>
  <div class="container" role="main">
    <header>
      <h1>📘 Sistema de Missões Educacionais</h1>
      <p class="lead">Plataforma acadêmica onde <strong>professores criam missões</strong>, alunos respondem e ambos possuem dashboards separados para gerenciar atividades.</p>
    </header>

    <div class="grid">
      <main>
        <section class="card section">
          <h2>🚀 Funcionalidades Principais</h2>

          <h3>👨‍🏫 Professor</h3>
          <ul>
            <li>Criar, editar e excluir missões</li>
            <li>Definir matéria da missão</li>
            <li>Atribuir missões aos alunos</li>
            <li>Editar perguntas pré-definidas</li>
            <li>Acompanhar respostas enviadas</li>
            <li>Dashboard com resumo</li>
          </ul>

          <h3>🎓 Aluno</h3>
          <ul>
            <li>Visualizar missões por matéria</li>
            <li>Conferir qual professor criou cada missão</li>
            <li>Enviar respostas</li>
            <li>Acompanhar status (pendente / concluída)</li>
          </ul>

          <h3>🔐 Login</h3>
          <ul>
            <li>Autenticação para aluno e professor</li>
            <li>Botão de <strong>mostrar/ocultar senha</strong></li>
            <li>Redirecionamento para dashboard correto</li>
          </ul>
        </section>

        <section class="card section">
          <h2>📚 Missões Pré-definidas por Matéria</h2>
          <p class="muted">Cada matéria possui 5 missões iniciais já cadastradas e editáveis pelo professor.</p>

          <div class="missions">
            <div class="mission-card">
              <h4>🧮 Matemática</h4>
              <ol>
                <li>Resolva a equação: <code>2x + 5 = 15</code></li>
                <li>Área de um triângulo com base 10 e altura 6</li>
                <li>O que é um número primo?</li>
                <li>Resolva: <code>45 ÷ 5</code></li>
                <li>Defina MMC</li>
              </ol>
            </div>

            <div class="mission-card">
              <h4>📖 Português</h4>
              <ol>
                <li>Identifique o sujeito na frase: “O aluno estudou muito.”</li>
                <li>O que é um adjetivo?</li>
                <li>Reescreva a frase na voz passiva</li>
                <li>Classifique o verbo da frase</li>
                <li>Encontre o predicado verbal</li>
              </ol>
            </div>

            <div class="mission-card">
              <h4>🌍 Geografia</h4>
              <ol>
                <li>O que é latitude?</li>
                <li>Cite um país do hemisfério norte</li>
                <li>Explique clima equatorial</li>
                <li>O que são placas tectônicas?</li>
                <li>Defina continente</li>
              </ol>
            </div>

            <div class="mission-card">
              <h4>🧪 Ciências</h4>
              <ol>
                <li>O que é fotossíntese?</li>
                <li>Função dos pulmões</li>
                <li>Estados físicos da água</li>
                <li>Cite um mamífero</li>
                <li>Defina célula</li>
              </ol>
            </div>

            <div class="mission-card">
              <h4>🏛 História</h4>
              <ol>
                <li>Quando ocorreu a Independência do Brasil?</li>
                <li>Quem foi Dom Pedro I?</li>
                <li>O que foi a Revolução Industrial?</li>
                <li>Explique o período colonial</li>
                <li>Cite uma invenção do século XX</li>
              </ol>
            </div>
          </div>
        </section>

        <section class="card section">
          <h2>🛠️ Tecnologias Utilizadas</h2>
          <table class="tech-table" aria-labelledby="tech">
            <thead>
              <tr><th>Tecnologia</th><th>Função</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Node.js + Express</strong></td><td class="muted">Backend</td></tr>
              <tr><td><strong>Supabase</strong></td><td class="muted">Banco de dados + autenticação</td></tr>
              <tr><td><strong>HTML / CSS / JavaScript</strong></td><td class="muted">Frontend</td></tr>
              <tr><td><strong>Fetch API</strong></td><td class="muted">Comunicação com backend</td></tr>
            </tbody>
          </table>
        </section>

        <section class="card section">
          <h2>📁 Estrutura do Projeto</h2>
          <pre><code>/backend
 ├── server.js
 ├── routes/
 ├── controllers/
 ├── database/
 └── services/

 /frontend
 ├── index.html
 ├── login.html
 ├── dashboard-aluno.html
 ├── dashboard-professor.html
 ├── css/
 └── js/

 README.md
</code></pre>
        </section>

        <section class="card section">
          <h2>⚙️ Como Rodar Localmente</h2>
          <ol>
            <li><strong>Clone o repositório</strong>
              <pre class="code-block"><code>git clone https://github.com/seu-usuario/seu-repositorio.git</code></pre>
            </li>
            <li><strong>Instale dependências (backend)</strong>
              <pre class="code-block"><code>cd backend
npm install</code></pre>
            </li>
            <li><strong>Configure variáveis de ambiente</strong>
              <p class="muted">Crie o arquivo <code>.env</code> dentro de <code>/backend</code> com os dados do Supabase:</p>
              <pre class="code-block"><code>SUPABASE_URL=SEU_URL
SUPABASE_KEY=SUA_CHAVE</code></pre>
            </li>
            <li><strong>Inicie o servidor</strong>
              <pre class="code-block"><code>npm start</code></pre>
            </li>
            <li><strong>Abra o frontend</strong>
              <p class="muted">Abra os arquivos <code>.html</code> no navegador (ou sirva via servidor estático).</p>
            </li>
          </ol>
        </section>

        <section class="card section">
          <h2>🧪 Futuras Melhorias</h2>
          <ul>
            <li>Sistema de notificações</li>
            <li>Gamificação (ranking entre alunos)</li>
            <li>Chat interno aluno ↔ professor</li>
            <li>Envio de arquivos em missões</li>
            <li>Feedback automático para respostas</li>
          </ul>
        </section>

        <section class="card section">
          <h2>🤝 Contribuição</h2>
          <p>Pull Requests são bem-vindos! Para mudanças grandes, abra uma <em>Issue</em> antes de submeter.</p>
        </section>

        <section class="card section">
          <h2>📝 Licença</h2>
          <p>Este projeto usa a licença <strong>MIT</strong>.</p>
        </section>
      </main>

      <aside class="sidebar">
        <div class="card">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
            <div class="badge">v1.0</div>
            <div>
              <strong>Resumo</strong>
              <div class="muted" style="margin-top:4px">Quadro de Missões com dashboards para alunos e professores.</div>
            </div>
          </div>

          <h3>🔐 Usuários Padrão</h3>
          <p class="muted">Credenciais de teste (inserir no Supabase ou seed):</p>
          <pre><code>Aluno
Login: aluno
Senha: aluno@123

Professor
Login: professor
Senha: professor@123
</code></pre>

          <h3>📌 Critérios de Aceite</h3>
          <ul>
            <li>Login funcional e intuitivo</li>
            <li>Menu lateral dinâmico por tipo de usuário</li>
            <li>Missões pré-definidas visíveis</li>
            <li>Professor pode editar, atribuir e aprovar</li>
            <li>Mostrar/ocultar senha ativo</li>
          </ul>

          <h3>🔗 Links Úteis</h3>
          <p class="muted">Adicione aqui links para o repositório, wiki ou deploy.</p>
          <div style="margin-top:12px">
            <button id="copyMd" class="copy-btn" title="Copiar README em Markdown para área de transferência">Copiar README (MD)</button>
          </div>
        </div>
      </aside>
    </div>

    <div class="footer">
      <div><strong>Desenvolvido por:</strong> Antonio Palma</div>
      <div style="margin-top:6px">Se quiser, posso gerar badges, banner ou a versão em inglês.</div>
    </div>
  </div>

  <script>
    // Opcional: copiar uma versão resumida em markdown (exemplo simples)
    document.getElementById('copyMd').addEventListener('click', function(){
      const md = `# Sistema de Missões Educacionais\\n\\nPlataforma acadêmica onde professores criam missões, alunos respondem e ambos possuem dashboards.\\n\\n## Usuários Padrão\\n- Aluno: aluno / aluno@123\\n- Professor: professor / professor@123\\n\\n(Abra o README no repositório para instruções completas...)`;
      navigator.clipboard?.writeText(md).then(()=> {
        this.textContent = 'Copiado!';
        setTimeout(()=> this.textContent = 'Copiar README (MD)', 1600);
      }).catch(()=> {
        alert('Não foi possível copiar para a área de transferência.');
      });
    });
  </script>
</body>
</html>
