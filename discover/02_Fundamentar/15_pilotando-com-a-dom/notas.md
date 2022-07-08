# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuídos na tela

# Normal flow

Ou flow layout é a maneira que os elementos `block` e `inline` ficam na página

```html
<p> Texto block com <strong>inline</strong> dentro </p>
```

# Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela

```html
<table>
    <tr>
        <td> Hora </td>
        <td> 20:00 </td>
    </tr>
    <tr>
        <td> Hora </td>
        <td> 20:37 </td>
    </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar de posição na tela

```html
<div style="float: left">
    esquerda
</div>

<div style="float: right">
    direita
</div>

<div style="clear: both">
    normal
</div>
```

# Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor: 
    - Alinhahmento
    - Ordenação
    - Tamanho flexíveis


# Terminologia

- Flex Container
    - Flex item
- Nesting
- Axis
    - main
        - start, end
    - cross
        - start, end
- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container

# Propriedades do Flex Container

* Direção dos itens
* Multi linhasa
* Alinhamento
    * Principal
    * cruzado
* espaço entre itens

# Direção dos itens

- Flex é uma dimensão (horizontal ou vertical)
- Podemos mudar a direção com `flex-direction`
- valores: (row / row-reverse / column / column-reverse)

# Flex-wrap

- Podemos usar multi linhas.
- Cada nova linha, um novo flex container

# Flex-flow

- shorthand
- flex-direction || flex-wrap

# justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

# valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

# align-items

- Alinhamento dos elementos no eixo cruzado

## valores

- stretch
- flex-start
- flex-end
- center