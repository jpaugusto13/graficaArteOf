"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const venom_bot_1 = require("venom-bot");
const express_1 = __importDefault(require("express"));
const startChatBot_1 = __importDefault(require("./config/startChatBot"));
const app = (0, express_1.default)();
const PORT = 8080;
app.get('/', (req, res) => {
    console.log('Alguém acessou o servidor!');
    res.send('Servidor na nuvem com console.');
});
(0, venom_bot_1.create)({ session: 'graficaArteOf' })
    .then((client) => {
    // Inicialize o servidor Express após criar a sessão Venom
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
    // Implemente a lógica para iniciar o chatbot
    (0, startChatBot_1.default)(client);
})
    .catch((erro) => {
    console.log(erro);
});
