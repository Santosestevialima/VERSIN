🚀 VERSIN

Social app for ideas and collaborative thinking

📌 Sobre o Projeto

O VERSIN é uma plataforma voltada para compartilhamento de ideias e colaboração entre usuários.
O sistema é dividido em:

🧠 Back-end: API desenvolvida com FastAPI

🎨 Front-end: Interface do usuário

🗄️ Banco de dados

🐳 Docker: ambiente padronizado para execução do projeto

O objetivo é permitir que qualquer desenvolvedor consiga rodar o projeto localmente sem precisar configurar tudo manualmente.

🧱 Estrutura do Projeto
VERSIN/
│
├── backend/        → API (FastAPI)
├── frontend/       → Interface do usuário
├── database/       → Configurações de banco
├── docker/         → Configurações de container
├── docs/           → Documentação
├── scripts/        → Scripts auxiliares
│
├── docker-compose.yml → Orquestra os containers
├── README.md
└── .gitignore

⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

Docker
Docker Compose
Git

🐳 Como rodar o projeto (Docker)
🔹 Primeira vez
docker compose up --build
ou
docker-compose up --build

👉 Isso vai:

construir os containers
instalar dependências
subir backend, frontend e banco

🔹 Execuções seguintes
docker compose up
🔹 Parar o projeto
docker compose down

🌐 Acessos do sistema

Após subir o Docker, você poderá acessar:

🎨 Front-end:
http://localhost:3000

🧠 Back-end (API):
http://localhost:8000

📚 Documentação da API (Swagger):
http://localhost:8000/docs

🗄️ phpMyAdmin (se configurado):
http://localhost:8080

👨‍💻 Fluxo de desenvolvimento
🔹 Front-end

Trabalha na pasta /frontend

Visualiza alterações em localhost:3000

🔹 Back-end

Trabalha na pasta /backend

Testa endpoints em localhost:8000/docs

🔄 Atualizar o projeto

Sempre que alguém subir código novo:

git pull
docker compose up --build

🧠 Boas práticas

Criar novas features em branches
Usar Pull Requests para integração
Evitar subir código direto na master

🐳 Sobre o Docker

O projeto utiliza Docker para:

padronizar ambiente

evitar conflitos de dependências

facilitar execução em qualquer máquina

💡 Observações

O backend utiliza FastAPI com Uvicorn
O modo atual está em desenvolvimento (--reload)
Para produção, ajustes serão necessários

👥 Colaboradores
Equipe VERSIN 🚀

✨ Status do Projeto
🟢 Em desenvolvimento
