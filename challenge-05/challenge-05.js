/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// let suco = ['uva', 'morango', 'manga', 'maracuja', 'limão']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// const Liquidificador = (arr) => {
  return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// Liquidificador(suco[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// function Bolo (arr, num) {
    return arr[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// let numeros = [1, '2', !3, false, true]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// Bolo(numeros)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// 
  function book (name) {
    let receiver = {
      AliceinWonderland: {
        quantidadePaginas: 80,
        autor: 'Lewis Carroll',
        editora: 'Mass'
      },
      SophiesVerden: {
        quantidadePaginas: 389,
        autor: 'Jostein Gaarder',
        editora: 'Cia das Letras'
    },
      UmbrellaAcademy: {
        quantidadePaginas: 28,
        autor: 'Gerard Way',
        editora: 'Dark Horse Comics'
    }
      return receiver(name)
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ? book(receiver)

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ? `O livro ${book(umbrellaAcademy) tem ${book(UmbrellaAcademy.quantidadePaginas} páginas!`}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ? 
