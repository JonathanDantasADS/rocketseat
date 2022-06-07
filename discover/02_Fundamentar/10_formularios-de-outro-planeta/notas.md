# Formulários

## Para que serve?
    - Capturar dados de entrada (input)
    - Interação
    - Controle

## Pré resquisitos
    - Básico HTML

## Dominar
    - Estelização
    - Validação
    - Controles customizados
    - Javascript

    
    `<fieldset>`
    - agrupamento de campos
    - mesmo propósito
    - semântico
    - acessibilidade

## atributos especiais
- disabled
    - desabilita todos os elementos internos
    - não serão enviados ao submeter o formulário
- form
    - o id de formulário ao qual esse fieldset pertece
    - não precisa estar dentro do formulário
- name
    - nome do grupo

`<legend>`
    - nome do agrupamento
    - primeiro elemento dentro do fieldset

`<label>`
    - associar e identificar uma (ou mais) tag de entrada de dados
    - acessibilidade
    - você poderá clicar para mudar o foco da entrada de dados

## Atributos
    - for
        - para fazer a conexão entre este label e a tag de entrada de dados
        - é feita via id do input
        - só funciona com elementos específicos
            - button, input (not hidden), meter, output, progress, select, textarea

## button
    `<button>`
        
        - Representa um botão
        - Usando para enviar formulários
        - É estilizado pelo user agent

## Atributos comuns
    - type
        - submit
        - reset
        - button
    - autofocus
    - disabled
    - value
    - form

## Listas

`<datalist>`

    - Lista de valores como sugestão a uma tag <input>
    - Valres sugestivos e não obrigatórios
    - Usuário poderão selecionar um dos valores, ou colocar um valor diferente da sugestão.

```
<datalist id="fruitsdata>
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
    <option>cherry</option>
```

## list

- Recebe como valor o id de um `<datalist>` residente no mesmo documento.


`<input>`
    - Um dos mais usados em formulários
    - Aceita os mais diversos tipos de dados
    - Um dos mais poderosos e complexos
    - Elevado número de combinações

# Atributos
    - type
    - name
    - id

`<input>`

    - autocomplete
    - autofocus
    - disabled
    - readonly (quase todos)
    - value
    - form (quase todos)
    - name
    - required (quase todos)
    - placeholder (password, search, tel, text, url)

`<input type="password">`

    - Colocar uma senha de maneira mais segura
    - Esconde o que está sendo digitado no campo
    - O estilo da apresentação do campo, depende do User Agent

# Atributos

    - minlength / maxlength
        * O número mínimo e/ou máximo de caracters para este campo

    - size
        * O número aceitável de caracters que esse campo deverá conter
        
    - pattern
        * Expressão regular para validar o que está sendo digitado no campo
        * Altamente recomendado o uso de um padrão de segurança alta de senhas
        * exemplo: queremos que a senha contenha caracters hexadecimais com o limite de no mínimo 4 e no máximo 8 caracteres
        * patters="[0-9a-fA-f]{4,8}"
        * pattern=".+@google\.com\.br"
    
    - placeholder
        * Mostra um exemplo de texto a ser digitado no campo

    - readonly / disabled
        * Atributo booleano indicando se o campo está habilitado ou não

    - required 
        * o campo será obrigatório 
    
    - inputmode
        * poderá alteerar o uso do teclado em smartphones
        * exemplo: queremos que o cliente só adicione número
            * inputmode="numeric"

    - autocomplete
        * on: permite a sugestão de: new-password ou current-password
        current-password
        * off: desabilita a apção de autocompletar
        * new-password: o navegador poderá sugerir uma nova senha

`<input type="email" />`

    - Espera que o usuário digite um email
    - Irá validara se o valor digitado é um email


# Atributos

    - placeholder
    - readonly / disabled
    - value

    - required

    - multiple
        * O campo irá receber 1 ou mais emails, separado por vírgulas
    
    - minlenght / maxlength
        * O mínimo e/ou máximo valor que o campo irá conter

    - size
        * Valor numérico indicando quantas caracteres esse


`<input type="url" />`

    - Espera que o usuário digite uma url
    - Irá validar se o valor digitado é uma url

# Atributos

    - placeholder
    - reandoly / disabled
    - value

    - required

    - minlength / maxlength
        * O mínimo e/ou máximo valor que o campo irá conter

    - size
        * Valor numérico indicando quantas caracteres esse campo deveria conter, modificando o tamanho do campo para o usuário

    - pattern 
        * Uso de expressão regular para validar o campo

`<input type="file" />`

    - Usuário poderá escolher 1 ou mais arquivos para enviar no formulário

# Atributos
    
    - value
        - contém o arquivo a ser enviado
    - accept
        - descreve que tipos de arquivos serão aceitos
        - exemplo: .doc, .docx, .pdf, audio/*, image/png, .png
    - files
        - a lista de arquivo ou arquivos
    - multiple
        - permite o envio de múltiplos arquivos
    
# Envio dos arquivos

    * Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como "multipart/form-data"


`<input type="color" />`


    - Interface para selecionar cor
    - Color picker

# Atributos

    - value: RGB
        - Se inválido, o preto será exibido
    - list
        * O id de uma tag <datalist> que está no mesmo documento
        * <datalist> irá conter uma lista de valores pré definidos 
 
 `<input type="checkbox">`

    - Caixas que podem ser marcadas
    - Selecionar um valor para ser enviado
    - Se não selecionar, não será enviado nenhum dado

# Atributos

    - globais
    - values
        * valor que aquele campo contém
        * se não estiver presente, o padrão é 'on'
    - checked
        * para deixar o campo marcado por padrão

    
# Marcar múltiplos valores?

        - Usaremos o atributo 'name' com o mesmo nome para os diversos campos

´´´
<fieldset>
    <legend>Choose your interests</legend>
    <div>
        <input type="checkbox" id="coding" name="interest"
        value="coding" checked>
        <label for="coding">Coding</label>
    </div>
    <div>
        <input type="checkbox" id="music" name="interest" value="music">
        <label for="music">Music</label>
    </div>
</fieldset>
´´´

`<input type="hidden" id="timestamp" name="timestamp" value="128605410">`

    - invisível ao usuário
    - será enviado com o formulário
    - não receberá foco
    - leitores de tela não percebem esse campo

`<input type="radio">`
    
    - Projetado para selecionar uma única opção de um grupo de opções


# Atributos essenciais
    
    - checked
        indica que o campo foi marcado
    - value
        valor que aquele campo contém


`<textarea>`
    - mais de uma linha
    - útil para textos grandes

# Atributos
    - id
    - name
    - rows e cols
    - maxlength e minlength
    - wrap
    .. outros comuns aos `<input>`
        - autocomplete, autofocus, disabled, placeholder, readonly, form, required


`<select>`
    - Controle que fornece um menu de opções

    <option>

    - Contém as opções a serem selecionadas
    - Atributos necessários
        - value

# Atributos únicos
    - multiple
        * Habilidade múltiplas opções
    - size
        * Quantas opções visíveis?


`<input type="search" />`

    - Para campos de busca
    - É igual ao campo do tipo 'text' mas poderá ser um pouco diferente
    dependendo do user agent

# Atributos

    - list / <datalist>
    - pattern
    - aria-label


`<input type="number" />`

    - Entrada de números

# Atributos

    - min/max
    - step

`<input type="range" />`

    - Controle para selecionar um valor numérico
    - Slide ou dial control

# Atributos

    - min/max
    - step

`<input type="range" min="-10" max="10" step="5">`


    Outros campos interessantes
    (mas que ainda não tem um ótimo suporte)

`<input type="date">`

`<input type="datetime-local">`