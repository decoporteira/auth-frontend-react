# 🔐 Autenticação com Ruby on Rails 8 + React

Este é um projeto de autenticação API-first desenvolvido com **Ruby on Rails 8** no backend e **React.js** no frontend. Ele foi feito com fins de aprendizado e para compor meu portfólio.

---

## 📚 Tecnologias Utilizadas

### Backend (Rails API)
- Ruby 3.3.6
- Rails 8 (modo API)
- Autenticação nativa do Rails (`has_secure_password` e `authenticate_by`)
- CORS com `rack-cors`
- Serialização JSON
- Middleware personalizado para sessões

### Frontend (React)
- React 19.0
- Vite
- React Router DOM
- Fetch API com token JWT no header
- Controle de sessão com `localStorage`

---

## 🚀 Como rodar o projeto

### Backend (Rails)

Repositório: [https://github.com/decoporteira/authentication](https://github.com/decoporteira/authentication)

```bash

git clone https://github.com/decoporteira/authentication.git
cd authentication

bundle install

rails db:create db:migrate

rails server

```
### Frontend (React JS)
Repositório: [https://github.com/decoporteira/auth-frontend-react](https://github.com/decoporteira/auth-frontend-react)

# Vá para a pasta frontend
```bash
git clone https://github.com/decoporteira/auth-frontend-react.git

cd auth-frontend-react

npm install

npm run dev

```
## 🔐 Como funciona a autenticação

O usuário faz login via React e envia as credenciais para a API (POST /sessions)

O backend responde com um token de sessão

O token é armazenado no localStorage

Todas as requisições protegidas devem incluir o token no header:

```bash
Authorization: Bearer <token>
```

O backend valida o token e retorna os dados protegidos