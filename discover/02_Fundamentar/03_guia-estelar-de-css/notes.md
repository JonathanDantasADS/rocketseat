# At-rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

# Exemplos comuns

- @import       /* Incluir o CSS externo */
- @media       /* Regras condicionais para dispositivos */
- @font-face       /* Fontes externas */
- @keyframes       /* Animation */

```css
@import "http://local.com/styles.css";
@import url("http://local.com/styles.css");

@media (min-width: 500px) {
    /* rules here */
}

@font-face {
    /* rules here */
}

@keyframes nameofanation {
    /* rules here */
}

```css {
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;

    /* font shorthand */
    font: italic bold .8em/1.2 Arial, sans-serif;
}

# Detalhes

 * Não irá considerar propriedades anteriores
 * Valores não especificados irão assumir o valor padrão
 * geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas

# Propriedades que aceitam shorthand

animation, background, border, border-bottom, border-color, border-left,
border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-items, place-self, text-decoration, transition

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**


# Funções

* nome seguido de abre e fecha parentesis
* receba argumentos

## Exemplos

```css
@import url ("http://urlaqui.com/styles.css");

{
    color: rgb(255, 0. 100);
    width: calc(100% - 10px);
}

# Vendor Prefixes

Permite que browsers adicione `features`
a fim de colocar em uso alguma novidade que vemos no CSS

# Exemplo

``` css

p{
    -webkit-background-clip: text;      /* Chrome, Safari, iOS e Android */
    -moz-background-clip: text;         /* Mozila (Firefox) */
    -ms-background-clip: text;          /* Internet Explorer */
    -o-background-clip: text;           /* Opera */
}

```

# Consultar

[http://ireade.github.io/which-vendor-prefix/]
[http://caniuse.com]