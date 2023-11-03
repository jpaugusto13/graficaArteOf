const venom = require('venom-bot');

const app = express();

venom.create({ session: 'graficaArteOf' })
  .then((client) => {
    startChatbot(client);
  })
  .catch((erro) => {
    console.log(erro);
  });


function startChatbot(client) {
  client.onMessage((message) => {
    const text  = message.body.toLowerCase();

    if (!text || message.isGroupMsg === true) {
      return "";
    }


    if(text.includes("endereço") || text.includes("endereco") || text.includes("localização")) {
      client
        .sendText(message.from, 'Rua Antônio de Alencar \nN° 1001 \nCoqueiral - Maracanaú')
        .then((result) => {
          console.log('Result: ', result);
        })
        client.sendLocation(message.from, '-3.870772', '-38.622402', 'Brasil')
      .then((result) => {
        console.log('Result: ', result);
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro);
  });
    }

      // Saudações
    if (text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite") || text.includes("oi") || text.includes("ola") || text.includes("opa") || text.includes("ei tassia")) {
      // saudacoes(message, client);
    }

    if (text.includes("pix") && message.isGroupMsg === false) {
      client.sendText(message.from, 'Pix - telefone\n85986681391\nFrancisco Paulo Pereira\n\nMercado Pago\n\nNos envia o comprovante após o pagamento. 😊💙')
      .then((result) => {
        console.log('Result: ', result);
      }).catch((e) => {
        console.log(e)
      }) 
    }
  });
}
