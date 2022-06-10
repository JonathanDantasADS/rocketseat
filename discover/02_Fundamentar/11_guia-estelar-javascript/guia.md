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

