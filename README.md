📘 Sistema de Missões Educacionais

Um projeto acadêmico que simula uma plataforma educacional onde professores criam e gerenciam missões, e alunos respondem e realizam atividades, com dashboard, gerenciamento de usuários e banco de dados integrado.

🚀 Funcionalidades Principais
👨‍🏫 Para o Professor

Criar, editar e excluir missões

Escolher a qual matéria e turma a missão pertence

Atribuir missões aos alunos

Visualizar respostas enviadas

Acompanhar status de cada aluno

Editar perguntas pré-definidas por matéria

Dashboard com resumo das atividades enviadas

🎓 Para o Aluno

Visualizar lista de missões por matéria

Ver qual professor criou cada missão

Enviar respostas

Acompanhar missões pendentes e concluídas

Interface clara e simples

🔐 Sistema de Login

Autenticação básica (Professor / Aluno)

Botão para mostrar / ocultar senha

Redirecionamento automático para o painel correto após login

📚 Matérias e Missões Pré-definidas

Cada matéria possui 5 missões padrão, editáveis pelo professor.

🧮 Matemática (5 missões)

Resolva a equação: 2x + 5 = 15

Calcule a área de um triângulo com base 10 e altura 6

O que é um número primo?

Resolva: 45 ÷ 5

Defina o que é MMC

📖 Português (5 missões)

Identifique o sujeito na frase: “O aluno estudou muito.”

O que é um adjetivo?

Reescreva a frase usando voz passiva

Classifique o verbo como transitivo ou intransitivo

Encontre o predicado verbal em uma frase

🌍 Geografia (5 missões)

O que é latitude?

Cite um exemplo de país do hemisfério norte

Explique o que é clima equatorial

O que são placas tectônicas?

Defina continente e dê um exemplo

🧪 Ciências (5 missões)

O que é fotossíntese?

Explique a função dos pulmões

O que é estado físico da água?

Cite um exemplo de mamífero

Defina célula

🏛 História (5 missões)

Quando ocorreu a Independência do Brasil?

Quem foi Dom Pedro I?

O que foi a Revolução Industrial?

Explique o que foi o período colonial

Cite uma invenção importante do século XX

🖥 Tecnologias Utilizadas
Tecnologia	Uso
Node.js + Express	Backend / API
Supabase	Banco de dados (Auth + Storage)
HTML + CSS + JS	Frontend
Fetch API	Comunicação com o backend
Middleware Router	Organização de rotas


⚙️ Como Rodar o Projeto Localmente
1️⃣ Clone este repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

2️⃣ Instale as dependências
cd backend
npm install

3️⃣ Configure o Supabase

Crie seu projeto no Supabase e adicione:

URL do Supabase

Chave anon

Chave service_role (se usar no backend)

Dentro de .env:

SUPABASE_URL=xxxxx
SUPABASE_KEY=xxxxx

4️⃣ Inicie o backend
npm start

5️⃣ Abra o frontend

Basta abrir os arquivos HTML no navegador.

🧪 Melhorias Futuras

Criar sistema de notificações

Ranking gamificado entre alunos

Chat interno aluno–professor

Sistema de anexos

Publicação de notas e feedback automático

🤝 Contribuições

Contribuições são sempre bem-vindas!
Abra uma issue ou envie um pull request.
