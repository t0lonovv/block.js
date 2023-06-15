// const text = document.getElementById('text')
// const textClass = document.getElementsByClassName('dom')
// const textName = document.getElementsByTagName('h1')
//
//
//
//  const text = document.querySelector('#text')
// const text3 = document.querySelector('h1')




// function addFunc (){
//     alert('Success !')
// }


const text2 = document.querySelector('.dom')
const btn =document.querySelector('button')
// console.log(textClass)


text2.style.color = 'red'
text2.style.fontSize = '100px'
// text2.addEventListener('click',() => {
//     btn.style.display /= 'block'
//
text2.addEventListener('mouseover', () => {
    text2.style.fontSize = '400px'
    text2.style.color = '#26F5D2'
    btn.style.display = 'none'
       // btn.style.display = 'block'
})


text2.addEventListener('mouseleave', () => {
    text2.style.fontSize = '100px'
    btn.style.display = 'block'
    text2.style.color = 'red'
})




btn.style.display = 'block'
btn.addEventListener('click', () => {
    alert('molodes')
})




// mouseover ( чонойтуп берет курсор алып барганда текст или рамка)

// mouseleave( кичиретчу курсорду алганда)