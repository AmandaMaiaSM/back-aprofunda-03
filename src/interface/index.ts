import express from 'express';
import cors from 'cors';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/connection'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

const { despesaController, chatController} = configureDependencies();

app.post('/despesas', (req, res) =>  despesaController.create(req, res));
app.get('/despesas/:userId', (req, res) => despesaController.getAll(req, res));
app.post('/chat', (req, res)=> chatController. open(req, res))

//ed
app.patch('/despesas/arquivar/:id', (req, res) => despesaController.arquivar(req, res)); // Rota para arquivar
app.get('/despesas/arquivar', (req, res) => despesaController.getArquivar(req, res)); // Rota para mostrar a  listar arquivadas
app.patch('/despesas/desarquivar/:id', (req, res) => despesaController.Desarquivar(req, res)); // Desarquivar
app.delete('/despesas/:id', (req, res) => despesaController.deletar(req, res));


if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}