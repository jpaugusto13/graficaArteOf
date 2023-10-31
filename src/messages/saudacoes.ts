import { Message, Whatsapp } from "venom-bot";

const date = new Date();

const hour = date.getHours();
const saudacao = "Bem-vindo à Doceria Tássia Augusto!\nDelivery: *13:00* as *19:00*";
const day = date.getDay();

const getGreeting = (hour : number) => {
  if (hour >= 13 && hour < 18) {
    return `Olá, boa tarde! ${saudacao}`;
  } 
  else if (hour >= 18 && hour < 19) {
    return `Olá, boa noite! ${saudacao}\n\n`;
  } 
  else if(hour >= 19) {
    return `Olá, boa noite! ${saudacao}\n\nNosso delivery encerra as 19:00, no momento estamos fechado, estamos apenas recebendo encomendas de Kit festa!`;
  }
  else {
    return `Olá, bom dia! ${saudacao}\n\nEstamos em produção, deixe agendado seu pedido!`;
  }
};

const saudacoes = (message: Message, client: Whatsapp) => {

  const greeting = getGreeting(hour);
  const messageText = `${greeting}`;
  if(day != 3) {
    client.sendText(message.from, messageText)
      .then((result) => {
        console.log('Result: ', result);
      })
      .catch((error) => {
        console.error('Error when sendng: ', error);
      })
  } else {
    client.sendText(message.from, `${saudacao}\n Quarta-feira não funcionamos!`)
      .then((result) => {
        console.log('Result: ', result);
      })
      .catch((error) => {
        console.error('Error when sending: ', error);
      })
  }
};

export default saudacoes;
