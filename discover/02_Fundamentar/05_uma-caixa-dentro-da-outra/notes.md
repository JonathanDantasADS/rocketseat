# Box Model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o CSS

## O que é?

Uma caixa retangular.
Essa caixa possui propriedades de uma caixa (2D)

- Tamanho (Largura x Altura)    width | height
- Conteúdo                      content
- Bordas                        border
- Preenchimento interno         padding
- Espaços fora da caixa         margin

*Cada elemento na sua página, será considerado uma caixa. *

## Box-sizing

Como será calculado o tamanho total da caixa?

- content-box | border-box

```css

div {
    box-sizing: border-box;
}

```

## display: block vs display: inline

- Como as caixas se comportam em relação as outras caixas
- Comportamento externo das caixas

**block**
- Ocupa toda a linha, colocando o próximo elemento abaixo desse

- width e height são respeitados

- padding, margin, border irão funcionar normalmente.

**inline**

- Elemento ao lado do outro
- width e height não funcionam
- Somente valores horizontais de margin, padding e border

Exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`

## margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px;
    margin: 12px 16px 0;
    margin: 8px 16px;
    margin: 80px;
}

```
    * Cuidado com margin collapsiing (top se ajunta ao bottom)

[https://developer.mozilla.org/en-US/docs/Web/CSS/margin]


## padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left
- values: `<length>` | `<percentage>` | auto

```css
div {
    /* shorthand */
    padding: 12px 16px 10px 4px;
    padding: 12px 16px 0;
    padding: 8px 16px;
    padding: 8px;
}

```
    * padding poderá causar diferença na largura de um elemento

[https://developer.mozilla.org/es-US/docs/Web/CSS/padding]


## border ( e outline )

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length`
    - color: `<color>`

```css
div {
    /* shorthand */
    border-top: solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33

    /* width | style | color */
    border: medium dashed green;
}

```

### E outline?

- diferente em 4 sentidos:
    - Não modifica o tamanho da caixa, pos não é parte do Box Model
    - Poderá ser diferente de retangular
    - Não permite ajuste individuais
    - Mais usado pelo user agent para acessibilidade

[https://developer.mozilla.org/en-US/docs/Web/CSS/border]