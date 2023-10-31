"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const saudacoes_1 = __importDefault(require("../messages/saudacoes"));
function startChatbot(client) {
    client.onMessage((message) => __awaiter(this, void 0, void 0, function* () {
        const text = message.body.toLowerCase();
        if (!text) {
            return "";
        }
        if (text.includes("endereço") || text.includes("endereco") || text.includes("localização")) {
            client
                .sendText(message.from, 'Rua Antônio de Alencar \nN° 1001 \nCoqueiral - Maracanaú')
                .then((result) => {
                console.log('Result: ', result);
            });
        }
        // Saudações
        if (text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite") || text.includes("oi") || text.includes("ola") || text.includes("opa") || text.includes("ei tassia")) {
            (0, saudacoes_1.default)(message, client);
        }
        if (text.includes("pix") && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Pix - telefone\n85986681391\nFrancisco Paulo Pereira\n\nMercado Pago\n\nNos envia o comprovante após o pagamento. 😊💙')
                .then((result) => {
                console.log('Result: ', result);
            });
        }
    }));
}
exports.default = startChatbot;
