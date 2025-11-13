/* Algoritm
1. plocka ut element - <input type="radio">, <p>
2. event listeners på radio buttons
3. man ska bara kunna välja en radio button
*/

const statusBar = document.querySelector('.radio p')
const inputs = document.querySelectorAll('.radio input')
const inputP1 = document.querySelector('#radio-p1')
const inputP2 = document.querySelector('#radio-p2')
// console.log('input p2 är: ', inputP2)

// 7.4.js:12 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// O-fångat typfel: kan inte läsa nulls egenskaper (läser addEventListener)
// Detta betyder att inputP1 är NULL
// Möjliga anledningar

/*
inputP1.addEventListener('click', event => {
	statusBar.innerText = 'Du lyssnar på P1.'
})
inputP2.addEventListener('click', event => {
	statusBar.innerText = 'Du lyssnar på P2.'
})
*/
inputs.forEach(input => {
	input.addEventListener('click', event => {
		statusBar.innerText = `Du lyssnar på ${event.target.value}.`
	})
})
