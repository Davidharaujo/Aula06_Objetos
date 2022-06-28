let Eu = {
    nome: "David Henrique da Silva Araujo",
    idade: 28,
    lgbtqiaplus: true
}

Eu.hobbie = "Cozinhar"

delete Eu.hobbie

console.log(Eu)

let cadastro = [{nome: "Ivan",idade: 70,telefone: 977775555, amigos:["Paula","Rogerio","Cristina","Ana"]},{nome:"Paula",idade:53,telefone:90000-8888, amigos:["Ivan","Cristina","Ana","Rogerio"]},{nome: "Cristina", idade:63, telefone:96666-2222, amigos:["Rogerio","Ivan","Ana","Paula"]},{nome:"Rogerio",idade: 48, telefone: 95555-3333, amigos:["Ivan","Cristina","Paula","Ana"]},{nome:"Ana",idade:59,telefone:91111-7777,amigos:["Cristina","Ivan","Paula","Rogerio"]}]

console.log("Estes são amigos: " + cadastro[0].amigos[0] + ", " + cadastro[1].amigos[0] + ", " + cadastro[2].amigos[0] + ", " + cadastro[3].amigos[3] + " e " + cadastro[4].amigos[0])