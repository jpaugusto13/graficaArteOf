import { Message, Whatsapp } from 'venom-bot';

import saudacoes from '../messages/saudacoes';

function startChatbot(client : Whatsapp) {
  client.onMessage(async (message : Message) => {
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
      saudacoes(message, client);
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

export default startChatbot;