import { create } from 'venom-bot';
import express, { Request, Response } from 'express';
import startChatbot from './config/startChatBot';

const app = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  console.log('Alguém acessou o servidor!');
  res.send('Servidor na nuvem com console.');
});

create({ session: 'graficaArteOf' })
  .then((client) => {
    // Inicialize o servidor Express após criar a sessão Venom
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

    // Implemente a lógica para iniciar o chatbot
    startChatbot(client);
  })
  .catch((erro) => {
    console.log(erro);
  });
