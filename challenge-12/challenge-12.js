/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ? let person = {
    'name': 'Polly',
    'lastname': 'Pocket',
    'age': 30
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ? console.log("Propriedades de 'person':", Object.keys(person))
    //Propriedades de 'person': (3) ["name", "lastname", "age"]
/*
Crie um array vazio chamado `books`.
*/
// ? let books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );
  
/*
Mostre no console todos os livros.
*/
// ? 
  console.log('\nLista de livros:', books.map((book) => {
    return book.name
  }))

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ? Livro que está sendo removido:  Alice in Wonderland

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ? console.log("\nAgora sobraram somente os livros:", books[0].name, ",", books[1].name)
    // Agora sobraram somente os livros: Sofies Verden, Dom Casmurro
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
// ? JSON.stringify(books)
    // "[{"name":"Sofies Verden","pages":396},{"name":"Dom Casmurro","pages":250}]"
/*
Converta os livros novamente para objeto.
*/
// ? console.log( '\nAgora os livros são objetos novamente:' );
  JSON.parse(stringObj)
  (2) [{…}, {…}]0: {name: "Sofies Verden", pages: 396}1: {name: "Dom Casmurro", pages: 250}length: 2__proto__: Array(0)
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?  let myName = ['g', 'i', 's', 'e', 'l', 'e',]
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ? console.log( '\nMeu nome é:' );
    console.log("\nMeu nome é:", myName.join(""))
    // Meu nome é: gisele
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ? console.log( '\nMeu nome invertido é:' );
     console.log( '\nMeu nome invertido é:', myName.reverse().join("") );
     // Meu nome invertido é: elesig

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/ console.log( '\nAgora em ordem alfabética:' );
// ?
console.log( '\nAgora em ordem alfabética:', myName.sort());
//Agora em ordem alfabética: (6) ["e", "e", "g", "i", "l", "s"]
