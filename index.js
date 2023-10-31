const venom = require('venom-bot');
const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  console.log('Alguém acessou o servidor!');
  res.send('Servidor na nuvem com console.');
});

venom.create({ session: 'graficaArteOf' })
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


function startChatbot(client) {
  client.onMessage(async (message) => {
    const text  = message.body.toLowerCase();

    if (!text) {
      return "";
    }

    if(text.includes("endereço") || text.includes("endereco") || text.includes("localização")) {
      client
        .sendText(message.from, 'Rua Antônio de Alencar \nN° 1001 \nCoqueiral - Maracanaú')
        .then((result) => {
          console.log('Result: ', result);
        })
    }

      // Saudações
    if (text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite") || text.includes("oi") || text.includes("ola") || text.includes("opa") || text.includes("ei tassia")) {
      // saudacoes(message, client);
    }

    
    if (text.includes("pix") && message.isGroupMsg === false) {
      client
      .sendText(message.from, 'Pix - telefone\n85986681391\nFrancisco Paulo Pereira\n\nMercado Pago\n\nNos envia o comprovante após o pagamento. 😊💙')
      .then((result) => {
        console.log('Result: ', result);
      })
    }
  });
}
