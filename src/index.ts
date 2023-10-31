import { create } from "venom-bot";

import startChatbot from "./config/startChatBot";

create({
    session: 'graficaArteOf'
  })

  .then((client) => startChatbot(client))
  .catch((erro) => {
    console.log(erro);
  });
