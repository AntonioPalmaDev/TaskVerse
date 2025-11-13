📘 Sistema de Missões Educacionais

Plataforma acadêmica onde professores criam missões, alunos respondem, e ambos possuem dashboards separados para visualização das atividades.

🚀 Funcionalidades Principais
👨‍🏫 Professor

Criar, editar e excluir missões

Definir matéria da missão

Atribuir missão aos alunos

Editar perguntas pré-definidas

Acompanhar respostas enviadas

Dashboard com resumo de atividades

🎓 Aluno

Visualizar missões por matéria

Conferir qual professor criou cada missão

Enviar respostas

Acompanhar status: pendente / concluída

🔐 Login

Autenticação para aluno e professor

Botão de mostrar/ocultar senha

Redirecionamento para dashboard correto

📚 Missões Pré-definidas por Matéria

Cada matéria possui 5 missões iniciais já cadastradas e editáveis pelo professor.

🧮 Matemática

Resolva a equação: 2x + 5 = 15

Área de um triângulo com base 10 e altura 6

O que é um número primo?

Resolva: 45 ÷ 5

Defina MMC

📖 Português

Identifique o sujeito na frase: “O aluno estudou muito.”

O que é um adjetivo?

Reescreva a frase na voz passiva

Classifique o verbo da frase

Encontre o predicado verbal

🌍 Geografia

O que é latitude?

Cite um país do hemisfério norte

Explique clima equatorial

O que são placas tectônicas?

Defina continente

🧪 Ciências

O que é fotossíntese?

Função dos pulmões

Estados físicos da água

Cite um mamífero

Defina célula

🏛 História

Quando ocorreu a Independência do Brasil?

Quem foi Dom Pedro I?

O que foi a Revolução Industrial?

Explique o período colonial

Cite uma invenção do século XX

🛠️ Tecnologias Utilizadas
Tecnologia	Função
Node.js + Express	Backend
Supabase	Banco de dados + autenticação
HTML / CSS / JavaScript	Frontend
Fetch API	Comunicação com o backend
📁 Estrutura do Projeto
/backend
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

⚙️ Como Rodar Localmente
1️⃣ Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

2️⃣ Instale as dependências
cd backend
npm install

3️⃣ Configure variáveis de ambiente

Crie o arquivo .env dentro de /backend:

SUPABASE_URL=SEU_URL
SUPABASE_KEY=SUA_CHAVE

4️⃣ Inicie o servidor
npm start

5️⃣ Abra o frontend

Acesse os arquivos .html pelo navegador.

🧪 Futuras Melhorias

Sistema de notificações

Gamificação (ranking entre alunos)

Chat interno aluno ↔ professor

Envio de arquivos em missões

Feedback automático para respostas

🤝 Contribuição

Pull Requests são bem-vindos!
Para grandes mudanças, abra uma Issue antes.
