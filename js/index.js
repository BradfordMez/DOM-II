// Your code goes here
const signButton = document.querySelector('#first')
const signButtonDos = document.querySelector('#second')
const signButtonTres = document.querySelector('#last')
const homeNav = document.querySelector('nav')
const funBusTitle = document.querySelector('h1.logo-heading')
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
    this.style.backgroundColor = 'blue'
})