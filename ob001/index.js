let mulher = {
    nome:'cléber',
    sexo:'M',
    idade:18,
    peso:75.8,
    exibir(peso=0){
        this.peso += peso;
    }
}

mulher.exibir(4)
console.log(mulher.peso)

console.log(typeof(mulher));