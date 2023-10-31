"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/messages/saudacoes.ts
var saudacoes_exports = {};
__export(saudacoes_exports, {
  default: () => saudacoes_default
});
module.exports = __toCommonJS(saudacoes_exports);
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
