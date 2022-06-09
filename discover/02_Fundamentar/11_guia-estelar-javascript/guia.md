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
    let y = 0
}

console.log('> existe x depois de bloco ', y)
```