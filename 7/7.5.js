/*
5a Implementera designskissen. När man klickar på "Dölj info" ska den nedre paragrafen döljas. Använd CSS display: none. (Du kan hitta på egen text om du vill.)

5b När man klickar på "Visa mer info" ska paragrefen göras synlig igen.

5c Lägg till flera knappar för att göra innehållet osynligt, med olika tekniker.

5d* Lägg till en knapp som använder metoden remove().
*/
const showButton = document.querySelector('#more-button')
const hideButton = document.querySelector('#less-button')
const hideShowContent = document.querySelector('#hide-show-content')
// console.log('7.5', showButton, hideButton, hideShowContent)

hideButton.addEventListener('click', () => {
	hideShowContent.classList.add('hide')
	hideButton.disabled = true
	showButton.disabled = false
})
showButton.addEventListener('click', () => {
	hideShowContent.classList.remove('hide')
	showButton.disabled = true
	hideButton.disabled = false
})