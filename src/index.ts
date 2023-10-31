import { create } from 'venom-bot';
import express, { Request, Response } from 'express';
import startChatbot from './config/startChatBot';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  console.log('Alguém acessou o servidor!');
  res.send('Servidor na nuvem com console.');
});

create({ session: 'graficaArteOf' })
  .then((client) => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
    startChatbot(client);
  })
  .catch((erro) => {
    console.log(erro);
  });
