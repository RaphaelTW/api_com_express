import express from 'express';
import produtosRouter from './routes/produtos.js';

const app = express();

// Middleware para ler JSON
app.use(express.json());

// Rota para produtos
app.use('/produtos', produtosRouter);

// Porta configurável via variável de ambiente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
