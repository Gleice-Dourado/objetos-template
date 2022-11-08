// criando objeto estudante
const estudante = {
    nome: "Gleice", // separa as propriedades com (,)
    sobrenome: "Dourado",
    numMatricula: 20,
    notasDoSemestre: [7, 10] // ultima propriedade não precisa de (,) 

}
//forma mais utilizada para chamar prop
console.log(estudante.nome)
//para chamar prop com colchete precisa de aspas
console.log(estudante["nome"])

//criando nova propriedade no objeto
estudante.modulo = "JavaScript"

console.log(estudante.nome)
console.log(estudante.notasDoSemestre[1])
console.log(estudante.modulo)

const novoEstudante = {
    ...estudante, // copiando o objeto estudante com espalhamento
    // modificando a prop nome
    nome: "Astrodev",
    //adicionando 9 as notas do semestre
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    modulo: "HTML"
}
console.log(estudante)
console.log(novoEstudante)

//para adicionar os objetos ao array, poderia colocar seus nomes entre os colchetes
const estudantesLabenu = []

// ou adicionar com push
estudantesLabenu.push(estudante)
estudantesLabenu.push(novoEstudante)

//acessando os objetos em "estudanteLabenu" e suas propriedades
console.log(estudantesLabenu[1].notasDoSemestre[2])

//EXERCICIO DE FIXAÇÃO
console.log("EXERCICIO DE FIXAÇÃO")
//criando objeto carrinho
const carrinho = {
    nomeUsuario: "Pérola",
    formaPg: "cartao de crédito",
    endereco: "Rua dos doidos, 121",
    
}
//criando array de objetos "compras" no objeto "carrinho"
carrinho.compras = [ 

        {
            nomeProduto: "celular",
            preco: 1200.00,
            quantidade:2
        },
        {
            nomeProduto: "notebook",
            preco: 3200.00,
            quantidade:1
        },
        {
            nomeProduto: "câmera",
            preco: 200.00,
            quantidade:1
        }
    ]

//imprime quantidades de compras em carrinho
console.log("Quantidade de compras:", carrinho.compras.length)

// criando cópia do objeto carrinho
const carrinhoPresente = {
    ...carrinho, // copiando objeto
    nomeUsuario: "Emilly Vitória", //modificando nome
    formaPg: "cartão presente" //modificando forma de pagamento
}

console.log("Carrinho:", carrinho)
console.log("Carrinho Presente:", carrinhoPresente)