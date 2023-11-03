const venom = require('venom-bot');

function teste() {
  return "";
}

venom.create({ session: 'graficaArteOf' })
  .then((client) => {
    startChatbot(client);
  })
  .catch((erro) => {
    console.log(erro);
  });

const getGreeting = (hour) => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if(hour >= 7 && hour < 12) {
    return `Olá, bom dia!\n\nEm que posso ajudar?`;
  }

  else if(hour >= 12 && hour <= 13) {
    return `Olá, boa tarde!\n\nEstamos em horario de almoço lhe retorno assim que possível.`;
  } 
  else if(hour >= 13 && minutes <= 30) {
    return `Olá, boa tarde!\n\nEstamos em horario de almoço lhe retorno assim que possível.`;
  } 
  else if(hour == 13 && minutes > 30) {
    return `Olá, boa tarde!\n\nEm que posso ajudar?`;
  }
  else if(hour >= 13 && hour < 18) {
    return `Olá, boa tarde!\n\nEm que posso ajudar?`;
  }
};

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
      const greeting = getGreeting(hour);
      const messageText = `${greeting}`;
      client.sendText(message.from, messageText)
      .then((result) => {
        console.log('Result: ', result);
      })
      .catch((error) => {
        console.error('Error when sending: ', error);
      })
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
