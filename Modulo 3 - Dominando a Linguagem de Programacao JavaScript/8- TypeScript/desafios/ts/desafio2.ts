interface Pessoa {
    nome: string,
    idade: number,
    profissao: profissao
}

enum profissao{
    Atriz = "Atriz",
    Padeiro = "Padeiro"
}

let pessoa1 = {} as Pessoa;
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = profissao.Atriz;

let pessoa2 = {} as Pessoa;
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = profissao.Padeiro;

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4 = {
    nome : "carlos",
    idade : 19,
    profissao : profissao.Padeiro
}