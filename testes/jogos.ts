

class Jogo {
    nome: string = "";
    genero: string = "";1
    dificuldade: number = 0
    constructor(nome: string, genero: string, dificuldade: number) {
        this.nome = nome;
        this.genero = genero;
        this.dificuldade = dificuldade;
    }
}

let jogos: Jogo[] = []
jogos.push(new Jogo("Celeste", "Arcade", 10));
jogos.push(new Jogo("Hollow Knight", "Metroidvania", 8));
jogos.push(new Jogo("Guitar Hero", "Ritmo", 5));

let maxIndex = 0;
for (let i = 1; i < jogos.length; i++) {
    if (jogos[i].dificuldade > jogos[maxIndex].dificuldade) {
        maxIndex[i] = jogos[i];
    }    
}
console.log (maxIndex);    

