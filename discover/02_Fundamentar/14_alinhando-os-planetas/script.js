// // getElementById()

// const element = document.getElementById('blog-title')
// console.log(element)


// // getElementByClassName()

// const element2 = document.getElementsByClassName('blog-new')
// console.log(element2)


// // getElementByTagName()

// const element3 = document.getElementsByTagName('h1')
// console.log(element3)

// // querySelector() 

// const element4 = document.querySelector('h1')
// console.log(element4)

// // querySelectorAll()

// const element5 = document.querySelectorAll('.blog-new')
// console.log(element5)

// element5.forEach(el => console.log(el))

// // Manipulando conteúdo
// // textContent

// const element6 = document.querySelector('h1')

// element6.textContent += ', Olá devs'

// console.log()

// // Manipulando conteúdo
// // innerText

// const element7 = document.querySelector('h1')
// element7.innerText = ', Hi DEVs'

// // Manipulando conteúdo
// // innerHTML

// const element8 = document.querySelector('h1')
// element8.innerHTML += '<h3>Olá!<h3>'

// // Manipulando conteúdo
// // Value

// const element9 = document.querySelector('input')
// element9.value = "Valor que eu quiser"
// console.log(element9.value)

// // Manipulando elementos
// // Atributos

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerId = document.querySelector('#header')
// console.log(headerId.getAttribute('class'))

// console.log(header.remove('class', 'bg'))

// // Alterando estilos
// const element10 = document.querySelector('body')
// element10.style.backgroundColor = '#fff1f1'

// // Alterando estilos
// // classList
// const element11 = document.querySelector('body')
// element11.classList.add('active', 'green')
// console.log(element11.classList)
// element11.classList.remove('active')
// element11.classList.toggle('active')

// // Navegando pelos elementos
// // parentNode parentElement
// const element12 = document.querySelector(`h1`)
// // console.log(element12.parentElement)
// console.log(element12.parentNode)

// // Navegando pelos elementos
// // childNodes children
// const el = document.querySelector('body')

// console.log(el.childNodes)
// console.log(el.children)

// // firstChild firstElementChild
// console.log(el.firstChild)
// console.log(el.firstElementChild)

// // lastChild firstElementChild
// console.log(el.lastChild)
// console.log(el.lastElementChild)

// // Navegando pelos elemento

// const el = document.querySelector('h1')
// // nextSibling nextElementSibling
// console.log(el.nextSibling)
// console.log(el.nextElementSibling)

// // previousSibling previousElementSibling
// console.log(el.previousSibling)
// console.log(el.previousElementSibling)


// // Criando e adicionando elementos

// // createElement
// const div = document.createElement('div');
// div.innerText = "Olá Amigos!"

// // append prepend
// const body = document.querySelector('body')

// body.append(div) // Depois
// body.prepend(div) // Antes

// // Adicionando elementos
// const div = document.createElement('div');
// div.innerText = "Olá meu jovem!"

// // insertBefore
// // Inseri uma div dentro do body antes da tag script
// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)


