// 1 Skapa ett nytt projekt med HTML, CSS och JavaScript. Lägg till följande kod i filerna. Vad gör koden?

// // JavaScript
const element = document.querySelector('.dynamic')
// const element = document.querySelector('#exempel')
element.innerText = 'Hello world'


// 1b Modifiera koden så att den skriver ut texten "Dynamisk webbsida" på webbsidan i stället för "Hello world".
element.innerText = 'Dynamisk webbsida'

// 1c Vad är skillnaden?
// Alternativ A
// element.className = 'frame'
// Alternativ B
element.classList.add('frame')



// Övning 7.2
// plocka ut alla knapparna från webbsidan
// för varje knapp:
// lägg till event listener (click)
// funktionen sätter css-klassen för den klickade knappen till "selected"

const foodButtons = document.querySelectorAll('.food button')
/*const meatButton = document.querySelector('#meat-button')
const fishButton = document.querySelector('#fish-button')
const vegButton = document.querySelector('#veg-button')*/

function foodButtonsOff() {
	foodButtons.forEach(button => {
		button.classList.remove('selected')
	})
}

foodButtons.forEach(button => {
	button.addEventListener('click', event => {
		foodButtonsOff()
		event.target.classList.add('selected')
	})
})


/*meatButton.addEventListener('click', () => {
	foodButtonsOff()
	meatButton.classList.add('selected')
})
fishButton.addEventListener('click', (event) => {
	foodButtonsOff()
	event.target.classList.add('selected')
	// fishButton.classList.add('selected')
})
vegButton.addEventListener('click', () => {
	foodButtonsOff()
	vegButton.classList.add('selected')
})*/


// Dynamiskt skapa element
const addButton = document.querySelector('#add-button')
const addList = document.querySelector('#add-list')

let count = 1
addButton.addEventListener('click', () => {
	const e = document.createElement('li')
	e.innerText = String(count)
	count++
	console.log('lägg till')
	addList.append(e)
})
