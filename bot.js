const baseConhecimento = [
  {
    perguntas: ["oi", "ola", "olá", "salve", "eae", "eai", "opa"],
    resposta: "Eae 😎 Tudo certo? ",
  },

  {
    perguntas: [
      "quem é você",
      "seu nome",
      "qual é seu nome",
      "quem é voce?",
      "quem é vc?",
    ],
    resposta: "Sou o MasterBot 🤖 criado pelo Master.",
  },
  {
    perguntas: ["o que é python"],
    resposta: "Python é uma linguagem simples, poderosa e muito usada hoje 🐍",
  },
  {
    perguntas: ["o que é flask"],
    resposta: "Flask é um framework em Python usado pra criar sites e APIs 🚀",
  },
  {
    perguntas: [
      "como você funciona",
      "oq vc faz",
      "oq você faz",
      "pra que vc serve",
      "pra que voce serve",
      "pra que você serve",
      "oq vc é",
      "oq é vc",
      "o que vc faz",
      "o que é voce",
      "o que vc é",
    ],
    resposta:
      "Eu sou uma base de conhecimento que o Master está construindo para responder dúvidas gerais ou apenas conversar👨‍💻",
  },

  {
    perguntas: [
      "tudo bem",
      "como vc ta",
      "como você tá",
      "vc ta bem",
      "como vai",
      "eai",
      "fala bot",
      "eai blz",
    ],
    resposta: "Tô bem demais 😎 e você?",
  },
];

function buscarResposta(mensagem) {
  mensagem = mensagem.toLowerCase();

  for (let item of baseConhecimento) {
    for (let pergunta of item.perguntas) {
      if (mensagem.includes(pergunta)) {
        return item.resposta;
      }
    }
  }

  return "Ainda não sei responder isso... mas o Master pode me ensinar 😉. Sujere pra ele ai -> felipeghensev@gmail.com";
}
