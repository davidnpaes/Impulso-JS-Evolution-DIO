const ALUNOS = [
    {
        nome: "Carla",
        nota: 7
    },

    {
        nome: "Mateus",
        nota: 3
    },

    {
        nome: "Daniel",
        nota: 9
    },

    {
        nome: "Rafaela",
        nota: 1
        
    }
]

const MEDIA = 8;

function aprovados (alunos, media){
    let listaAprovados = []
    for (let i = 0; i < alunos.length; i++){
        if(alunos[i].nota >= media){
            listaAprovados.push(alunos[i]);
        }
    }

    return listaAprovados;
}

console.log(aprovados(ALUNOS, MEDIA));

