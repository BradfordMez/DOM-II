// Your code goes here
const signButton = document.querySelector('#first')
const signButtonDos = document.querySelector('#second')
const signButtonTres = document.querySelector('#last')
const homeNav = document.querySelector('nav .nav-link:nth-of-type(1)')
const aboutNav = document.querySelector('nav .nav-link:nth-of-type(2)')
const blogNav = document.querySelector('nav .nav-link:nth-of-type(3)')
const funBusTitle = document.querySelector('h1.logo-heading')
const firstPara = document.querySelector('header.intro')

//

//
signButton.onclick = function(event) {
    console.log('First Button')
}
signButtonDos.onclick = function(event) {
    console.log('Second Button')
}
signButtonTres.onclick = function(event) {
    console.log('Last Button')
}
//

//
signButton.addEventListener('click', function(event){
    this.style.backgroundColor = 'red'
})
signButton.addEventListener('mouseover', function(event){
    this.style.backgroundColor = 'Green'
})
//

//
signButtonDos.addEventListener('click', function(event){
    this.style.backgroundColor = 'orange'
})
signButtonDos.addEventListener('mouseover', function(event){
    this.style.backgroundColor = 'Green'
})
//

//
signButtonTres.addEventListener('mouseover', function(event){
    this.style.backgroundColor = 'Green'
})
signButtonTres.addEventListener('click', function(event){
    this.style.backgroundColor = 'blue'
})
//

//
funBusTitle.addEventListener('mouseover', function(event){
    this.style.fontSize = '90px'
})
//

homeNav.addEventListener('dblclick', function(event){
    this.style.backgroundColor = 'maroon'
})

aboutNav.addEventListener('wheel', function(event){
    this.style.fontSize = '20px'
})

blogNav.addEventListener('click', function(event){
    this.style.color = 'Green'
    this.style.backgroundColor = 'Black'
})

firstPara.addEventListener('dblclick', function(event){
    this.style.backgroundColor = 'pink'
})
