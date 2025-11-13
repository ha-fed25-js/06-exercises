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
