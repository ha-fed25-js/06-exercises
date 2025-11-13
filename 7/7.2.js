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
