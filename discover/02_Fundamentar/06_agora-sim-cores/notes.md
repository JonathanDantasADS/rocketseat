# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixas)
* color (para textos)
* border-color (para-caixas)
* outros...

## Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla


```css

element {
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F */
    color: #F90; /* RED GREEN BLUE */
    color: #009900;
    color: #090a;
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.6); /* 0- 255 */
    color: rgba(34, 12, 64, 0.6); 
    color: rgb(34 12 64 / 0.6); 
    color: rgb(34 12 64 / 0.6); 
    color: rgb(34.6 12 64 / 0.6); 
    color: rgb(34.6 12 64 / 0.6); 

    /* <rgl()> values */
    color: rsl(30, 100% 50%, 0.6); /* Hue - Saturation - Lumiance */
    color: rsla(30 100% 50%, 0.6); 
    color: rsl(30 100% 50% / 0.6); 
    color: rsla(30 100% 50% / 0.6); 
    color: rsl(30.0 100% 50% / 60%); 
    color: rsl(30.2 100% 50% / 60%);

    /* Global values */
    color: inherit;
    color: initial;
    color: unset;
}

```

[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value]


## Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
    - a posição das imagens,
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente
