"use strict";
var profissao;
(function (profissao) {
    profissao["Atriz"] = "Atriz";
    profissao["Padeiro"] = "Padeiro";
})(profissao || (profissao = {}));
let pessoa1 = {};
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = profissao.Atriz;
let pessoa2 = {};
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = profissao.Padeiro;
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
