let amigo = {
    nome:'cléber',
    sexo:'M',
    idade:18,
    peso:75.8,
    exibir(peso=0){
        this.peso += peso;
    }
}

amigo.exibir(4)
console.log(amigo.peso)