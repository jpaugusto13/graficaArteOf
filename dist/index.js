"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_venom_bot = require("venom-bot");
var import_express = __toESM(require("express"));

// src/messages/saudacoes.ts
var date = /* @__PURE__ */ new Date();
var hour = date.getHours();
var saudacao = "Bem-vindo \xE0 Doceria T\xE1ssia Augusto!\nDelivery: *13:00* as *19:00*";
var day = date.getDay();
var getGreeting = (hour2) => {
  if (hour2 >= 13 && hour2 < 18) {
    return `Ol\xE1, boa tarde! ${saudacao}`;
  } else if (hour2 >= 18 && hour2 < 19) {
    return `Ol\xE1, boa noite! ${saudacao}

`;
  } else if (hour2 >= 19) {
    return `Ol\xE1, boa noite! ${saudacao}

Nosso delivery encerra as 19:00, no momento estamos fechado, estamos apenas recebendo encomendas de Kit festa!`;
  } else {
    return `Ol\xE1, bom dia! ${saudacao}

Estamos em produ\xE7\xE3o, deixe agendado seu pedido!`;
  }
};
var saudacoes = (message, client) => {
  const greeting = getGreeting(hour);
  const messageText = `${greeting}`;
  if (day != 3) {
    client.sendText(message.from, messageText).then((result) => {
      console.log("Result: ", result);
    }).catch((error) => {
      console.error("Error when sending: ", error);
    });
  } else {
    client.sendText(message.from, `${saudacao}
 Quarta-feira n\xE3o funcionamos!`).then((result) => {
      console.log("Result: ", result);
    }).catch((error) => {
      console.error("Error when sending: ", error);
    });
  }
};
var saudacoes_default = saudacoes;

// src/config/startChatBot.ts
function startChatbot(client) {
  client.onMessage(async (message) => {
    const text = message.body.toLowerCase();
    if (!text) {
      return "";
    }
    if (text.includes("endere\xE7o") || text.includes("endereco") || text.includes("localiza\xE7\xE3o")) {
      client.sendText(message.from, "Rua Ant\xF4nio de Alencar \nN\xB0 1001 \nCoqueiral - Maracana\xFA").then((result) => {
        console.log("Result: ", result);
      });
    }
    if (text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite") || text.includes("oi") || text.includes("ola") || text.includes("opa") || text.includes("ei tassia")) {
      saudacoes_default(message, client);
    }
    if (text.includes("pix") && message.isGroupMsg === false) {
      client.sendText(message.from, "Pix - telefone\n85986681391\nFrancisco Paulo Pereira\n\nMercado Pago\n\nNos envia o comprovante ap\xF3s o pagamento. \u{1F60A}\u{1F499}").then((result) => {
        console.log("Result: ", result);
      });
    }
  });
}
var startChatBot_default = startChatbot;

// src/index.ts
var app = (0, import_express.default)();
var PORT = 8080;
app.get("/", (req, res) => {
  console.log("Algu\xE9m acessou o servidor!");
  res.send("Servidor na nuvem com console.");
});
(0, import_venom_bot.create)({ session: "graficaArteOf" }).then((client) => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
  startChatBot_default(client);
}).catch((erro) => {
  console.log(erro);
});
