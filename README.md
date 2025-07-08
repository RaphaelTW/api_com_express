# 📦 Projeto: API de Estoque com Node.js + Express

Este projeto é uma API simples feita com **Node.js** e **Express**, que retorna um estoque de produtos. Ideal para fins de estudo, testes de requisições HTTP e aprendizado de rotas com Express.

## 📁 Estrutura do Projeto

```
express/
├── app.js
├── routes/
│   └── produtos.js
├── data/
│   └── estoque.js
├── package.json
└── README.md
```

## 🚀 Como executar

1. Instale as dependências:
   ```bash
   npm install express
   ```

2. Inicie o servidor:
   ```bash
   node app.js
   ```

3. Acesse no navegador ou via Insomnia/Postman:
   ```
   http://localhost:3000/produtos
   ```

## 🔄 Exemplo de resposta da API:

```json
[
  {
    "id": 1,
    "nome": "Monitor LG 24"",
    "quantidade": 10,
    "preco": 899.99
  },
  {
    "id": 2,
    "nome": "Mouse Gamer RGB",
    "quantidade": 25,
    "preco": 129.9
  },
  {
    "id": 3,
    "nome": "Teclado Mecânico ABNT2",
    "quantidade": 15,
    "preco": 299.99
  }
]
```

## 🛠 Tecnologias utilizadas

- Node.js
- Express
- JavaScript ES Modules

## ✅ Melhorias futuras

- Adicionar autenticação JWT
- Conectar com banco de dados
- Criar rotas para adicionar/editar/deletar produtos
