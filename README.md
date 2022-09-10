<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
</p>

<br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)

## 💻 Projeto

Projeto desenvolvido para o processo seletivo da REFERO.ai. A API consiste em um CRUD básico de um PetShop.

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `npm install`
- Inicie o container do banco de dados MySql com `docker-compose up -d`
- Sincronize o schema do Prisma com o BD usando `npx prisma db push`
- Inicie o servidor com `npm run dev`

Agora a API está rodando na porta 4000 da sua máquina [`localhost:4000/`](http://localhost:4000/).

---

Feito com ♥ por [Júlio Souza](https://www.linkedin.com/in/j%C3%BAlio-souza-079351213/) 👋🏻 
