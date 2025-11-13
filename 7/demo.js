const styleButton = document.querySelector('#style-button')
// querySelectorAll ger oss en enkel lista
// const items = document.querySelectorAll('.children ul li')

// Men egenskapen "children" ger något som bara liknar en lista. Måste omvandlas med Array.from för att använda forEach.
const itemsCollection = document.querySelector('.children ul').children
const items = Array.from(itemsCollection)

styleButton.addEventListener('click', () => {
	items.forEach(li => {
		li.classList.toggle('alternate')
	})
})



document.querySelector('#c1').addEventListener('click', () => { console.log('Första containern') })
document.querySelector('#c2').addEventListener('click', () => { console.log('Andra containern') })
document.querySelector('#c3').addEventListener('click', () => { console.log('Tredje containern') })
document.querySelector('#c4').addEventListener('click', event => {
	console.log('Innersta button - stoppa eventet!')
	event.stopPropagation()
})

