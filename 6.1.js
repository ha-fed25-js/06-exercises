// 1a Vad gör koden?
let jan = {
    name: 'Jan',
    snack: 'banan'
}
// console.log(`${jan.name}, det är dags för din ${jan.snack}!`)

// 1b Vad gör koden? Kör den och rätta felet.
jan.count = 5
eat(jan)
eat(jan)

function eat(object) {
    if( object.count > 0 ) {
        console.log('Om nom nom!')
        object.count--
    }
	else {
		console.log('Det finns inga snacks kvar 😢')
	}
}

let lisa = {
	name: 'Lisa',
	snack: 'gurka',
	count: 10
}

let people = [jan, lisa]
// people[1].snack
for( let i=0; i<people.length; i++ ) {
	let p = people[i]
	console.log(`${p.name}, det är dags för din ${p.snack}!`)
}
people.forEach(person => {
	console.log(`${person.name}, det är dags för din ${person.snack}!`)
})