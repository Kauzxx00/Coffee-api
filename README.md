# ☕ Coffee API

API REST feita em **Node.js + Express** para gerenciamento de cafés.

Essa API possui carregamento automático de rotas através de arquivos, onde cada rota exporta um `name`, `method` e a função `run`. Isso torna a estrutura modular, organizada e simples de manter.

---

## 📂 Estrutura das Rotas

Cada arquivo de rota exporta um objeto assim:

```javascript
module.exports = {
  name: "/",
  method: "get",
  run: (req, res) => {
    res.send("Rota usada com sucesso!");
  }
};
```

| Campo   | Tipo     | Obrigatório | Descrição                           |
|---------|----------|-------------|-------------------------------------|
| `name`  | `string` | ✅          | Caminho da rota (ex: `register`)    |
| `method`| `string` | Opcional     | `get`, `post`, `put`, `delete`...   |
| `run`   | `func`   | ✅          | Função da rota (req, res) => {...}   |

---

## 🚀 Como rodar o projeto

```bash
git clone https://github.com/Kauzxx00/Coffee-api
cd Coffee-api
npm install
npm start
```

Por padrão, a API roda em `http://localhost:3000`.

---

## 📑 Exemplo de Rotas

| Método | Rota        | Descrição            |
|--------|-------------|----------------------|
| POST   | /register   | Registrar novo café   |
| PUT    | /edit/:id   | Editar café por ID    |
| DELETE | /delete     | Remover um café       |
| GET    | /coffees    | Listar todos os cafés |
| GET    | /coffee     | Buscar café específico|
| GET    | /           | Status da API         |

---

## 📎 Tecnologias utilizadas

- Node.js
- Express
- Modular Router Loader (dinâmico)

---

## 💡 Links
* 🛠 [Repository](https://github.com/Kauzxx00/Coffee-api)
* 📄 [License (MIT)](./LICENSE)