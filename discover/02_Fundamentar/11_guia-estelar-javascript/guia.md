# Tipos de dados

* Gramática
    * Elementos da linguagem e suas cobinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * agrupamento de palavras

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo , para crescer nosso vocabulário.

## Como vai ser a dinamica do aprendizado?

* Conceitos e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem
    * Você sabia que é possível aprender 80% de uma lingua nova, com cerca de 20% do vocabulário? (até menos)

# String

    * Cadeia de caracteres 

    "" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings

console.log('Jonathan')

# Number

    * números

    33 // inteiros
    12.5 // reais
    NaN // Not a Number
    Infinity // infinito

# Boolean

    * somente 2 valores

        true // verdadeiro
        false // falso
    
# undefined
    * indefinido

# null
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido

# Object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos

    { propriedade: "valor" }

# Array
    * Array (vetores)
        * Uma lista
        * Agrupamento de dado

        ["jonathan", 28]

# Tipos de dados

Conforme o ECMAScript standard temos 9 tipos de dados:

    * Data types
        * Primitive / Primite value
        * Structural
        * Structuural Primitive

# Primitivos

    * String
    * Number
    * Boolean
    * underfined
    * Symbol
    * BigInt

# Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

# Primitivo Estrutural / Structural Root Primitive

* null


# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

O JS é uma linguagem fracamente tipada e dinâmica
- Variáveies não precisam de ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement

```
// Vamos iniciar um bloco
{
    // Aqui é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo, Chamamos de `block-scoped`

# let e const
```js
// const a let são locais e só funcionaram no escopo onde foi criada 
console.log('> existe y antes do bloco? ', y)

{
    console.log('> existe x depois de bloco ', y)
    let y = 0
}

console.log('> existe x depois de bloco ', y)
```

# Para criar nomes 

    * JS é case-sensitive (sensível ao caso)
    * JS aceita a cadeia de caracteres Unicode

    - Posso: 
        * Iniciar com esses caracteres especiais: $ _
        * Iniciar com letras
        * Colocar acentos
        * Letras maísculas e minúsculas fazem diferença

    - Não Posso:
        * Iniciar com números
        * Colocar espaços vazinhos no nome

    - Ideal: 
        * Criar nomes que fazem sentido
        * Que explique o que a variável é ou faz
        * camelCase
        * snake_case
        * Escrever em inglês
    
```javascript
    // Variáveis e tipos de dados
    // declaração or declaration
    var name

    // assignment or atribuição de valores
    name = "Jonathan"

    // que tipo de dado foi colocado na variável

    console.log(name)

    // agrupamento de declarações
    let age, isHuman

    age = 28
    isHuman = true

    // console.log(`${name} ${age} ${isHuman}`)
    console.log(name, age, isHuman)

    // escrita de texto + variáveis
    // Concatenando valores
    console.log('Me chamo ' + name + ', e tenho ' + age + ' anos')
    
    // interpolando valores
    console.log(`${name} tem ${age} anos`)


``` 
## Object 

```javascript

   const person = {
    name: 'Jonathan',
    age: 28,
    weight: 72.0,
    isAdmin: true
   }


//    console.log(person.name)
      console.log(`${person.name} tem ${person.age} anos`)

   // Object

   const person = {
    name: 'Jonathan',
    age: 28,
    weight: 72.0,
    isAdmin: true
   }


//    console.log(person.name)
      console.log(`${person.name} tem ${person.age} anos`)
```

# Array

```javascript
  // Arrayy

  const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
  ]

  // Acessar valores dentro do Array
  console.log(animals[2].name)
```

## function scope

```javascript
  let subject = 'create video'

  function createThink(subject) {
    subject = 'study'
    return subject
  }

  console.log(createThink(subject))
  console.log(subject)
  ```

## function hoisting

```javascript
sayMyName();

function sayMyName() {
  console.log('Jonathan')
}
```


## arrow function
```javascript
const sayMyName = (name) => {

  console.log(name)
}

sayMyName(`JonathanDantasADS`)
```

## callback function

```javascript

function sayMyName(name) {
  console.log('antes de executar a função callback')
  name()
  console.log('depois de executar a call back')
}

sayMyName(
  () => {
    console.log('Iniciando uma callback')
  }
)

```

## Function() constructor 

    * expressão new
    * criar um novo objeto
    * this keyword

```javascript

function Person(name) {
  this.name = name
  this.walk = function() {
      return "andando"
  }
}

const jonathan = new Person("JonathanDantas")
const johnny = new Person("JohnnyJeferson")
console.log(jonathan.walk())
console.log(johnny.walk())

```

## Prototype

    * prototype-based language
    * prototype chain
    * __proto__


## Type conversion (typecasting) vs Type conversion

    * Alteração de um tipo de dado para outro tipo

```javascript

console.log(Number('9') + 5)

```

## Manipulando Strings e Números

## Transformar String em Número e Número em Strings

```javascript

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

```

## Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

```javascript
let word = "Paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)
```

## Transformando um número quebrado com 2 casas decimais e trocar ponto por vírgula

```javascript

  let number = 435312345.33452345
  console.log(number.toFixed(2).replace(".",","))

```

## Transforme letras minúsculas em maiúsculas. Faça o contrário disso também


```javascript

let wordA = "Programar é muito bacana cara!"
console.log(wordA.toUpperCase())

let wordB = "Programar é muito bacana cara!"
console.log(wordB.toLowerCase())

```

## Verificar se o texto contém a palavra programação

```javascript

let phrase = "Eu quero viver de Programação!"
console.log(phrase.includes("programacao")) // Case Sensitive

```

## Separe um texto que contem espaços, em um novvo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

```javascript

let phrase = "Eu quero viver de Programação!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())

```

## Manipulando Arrays

## Criar Array com construtor 

```javascript

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

```

# Contar elementos de um array

```javascript
  // console.log(["a", "b", "c"][2])
  console.log(["a", "b", "c"].length)
```

# Transformar uma cadeia de caracteres em elementos de um array

```javascript
  let word = "manipulação"
  console.log(Array.from(word))
```

```javascript
let techs = ["html", "css", "js"]

  //  * Adicionar um item no fim

techs.push("SQL")

  //  * adicionar no começo

techs.unshift("nodejs")

  //  * remover do fim

techs.pop()

  //  * remover do começo

techs.shift()

  //  * pegar somente alguns elementos do array

console.log(techs.slice("0","3"))  # Posição 0-2 e Elemento 1-3

  //  * remover 1 ou mais items em qualquer posição do array

techs.splice("1","2")

  //  * encontrar a posição de um elemento no array
    
let index = techs.indexOf("css")
techs.splice(index, 1)

console.log(techs)

```


# Expressões e Operadores

    - Expressions 
    - Operators
        Binary
        Unary
        Ternary

    ```javascript
        let number = 1
        console.log(number + 1)
    ```

    ```javascript
        let number = 1
        console.log(--number)
        console.log(typeof number)
    ```

    ```javascript
        let number = 1
        console.log(false ? 'alo' : 'nada')
    ```

# new 

    - left-hand-side expression
    - criar um novo objeto

```javascript

let name = new String('Jonathan')
name.surName = "Dantas"
let age = new Number(23)
console.log(name.surName, age)

let data = new Date('2022-06-12')
console.log(data.__proto__)

```

# Operadores Unários | typeof | delete

```javascript

const person = {
    name: "Jonathan",
    age: 28,
}

delete person.age

console.log(person)

```


# Operadores Aritiméticos

```javascript

// multiplicação

  console.log(3.4 * 5.5)

// divisão

  console.log(12 / 2)

// soma

  console.log(34 + 67)

// subtração

  console.log(44 - 40)

// resto da divisão

  let remainder

  remainder = 11 % 10
  console.log(remainder)

// incremento ++ 

  let increment = 1

  increment ++ 
  console.log(increment++) // depois
  console.log(++increment) // antes
  console.log(increment)

// decremento --

  let decrement = 0
  decrement-- // depois
  console.log(--decrement) // antes

// exponencial

  console.log(5 ** 2);

```

# Operadores de comparação

```javascript
// Irá comparar valores e retornara um Boolean com resposta á comparação
  
  let one = 1
  let two = 2

  //  == igual a 

  console.log( two == 1 )
  console.log( one == "1" )

  // != diferente de 
  console.log(one != two)
  console.log(one != 1)
  console.log(one != "1")

  // === estritamente igual a 
  console.log( two === 1 )
  console.log( one === "1" )

  // !== estritamente diferente de 
  console.log(one !== two)
  console.log(one !== 1)
  console.log(one !== "1")

  // > Maior que
  console.log( one > two )

  // >= Maior igual a
  console.log( one >= 1 )
  console.log( two >= 1 )

  // <  Menor que
  console.log( one < two )

  // <= Menor igual a 
  console.log( one <= two )
  console.log( one <= 1 )
  console.log( one <= 0 )
```

# try/catch

```javascript

function sayMyName(nome = '') {
    if (nome === ''){
        throw 'Nome é obrigatório'
    }
    console.log(nome)
}

try {
    sayMyName("Jonathan")
} catch(e) {
    console.log(e)
}

console.log('Após ao try/catch')
```

# for

 - Estrutura de repetição
 - for
 - break - para a execução do loop
 - continue - pula a execução do momento

```javascript
for(let i = 1; i < 10; i++) {
    if(i === 5) {
        console.log('Teve pulo')
        continue;
    }
    console.log(i)
}
```

# while
 - Estrutura de repetição
 - while

```javascript
let i = 0;
while(i < 10){
    console.log(i)
    i ++
}
```

# for ... of

```javascript
let nome = 'Jonathan'
let nomes = ['João', 'Paulo', 'Pedro']

for(let nome of nomes) {
    console.log(nome)
}
```

# for .. in 

```javascript
let person = {
    nome: 'Jonathan',
    age: 30,
    weight: 88.6
}

for(let p in person){
console.log(p)
```