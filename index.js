const venom = require('venom-bot');

venom.create({ session: 'graficaArteOf' })
  .then((client) => {
    startChatbot(client);
  })
  .catch((erro) => {
    console.log(erro);
  });

const getGreeting = async () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  if (hour >= 7 && hour < 12) {
    return `Olá, bom dia!\n\nEm que posso ajudar?`;
  } 
  
  if (hour == 12) {
    return `Olá, boa tarde!\n\nEstamos em horario de almoço, retornaremos em breve.`;
  } 
  
  if (hour == 13) {
    if(minutes <= 30) {
      return `Olá, boa tarde!\n\nEstamos em horario de almoço, retornaremos em breve.`;
    } else {
      return `Olá, boa tarde!\n\nEm que posso ajudar?`;
    }
  } 
  
  if (hour >= 14 && hour < 18) {
    return `Olá, boa tarde!\n\nEm que posso ajudar?`;
  }
};

function startChatbot(client) {
  client.onMessage(async (message) => {
    if (message.type == "image" || message.type == "ptt" || message.isGroupMsg === true) return "";

    let text = message.body.toLowerCase();
    text = text.replace("ç", "c");

    if (text.includes("endereco") || text.includes("localizacao")) {
      await client.sendText(message.from, 'Rua Antônio de Alencar \nN° 1001 \nCoqueiral - Maracanaú').then(result => console.log('Result: ', result));
      await client.sendLocation(message.from, '-3.870772', '-38.622402', 'Brasil').then(result => console.log('Result: ', result));
      return "";
    }

    if (text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite")) {
      const greeting = await getGreeting();
      const messageText = `${greeting}`;
      await client.sendText(message.from, messageText).then(result => console.log('Result: ', result));
      return "";
    }

    if (text.includes("pix")) {
      await client.sendText(message.from, 'Pix - telefone\n85986681391\nFrancisco Paulo Pereira\n\nMercado Pago\n\nNos envia o comprovante após o pagamento. 😊💙')
        .then(result => console.log('Result: ', result));
      return "";
    }
  });
}
