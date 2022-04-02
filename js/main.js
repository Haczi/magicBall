const ball = document.querySelector('img')
const question = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answerss = [
	'Tak',
	'Nie',
	'Powiem Ci ze nie wiem',
	'Ciezkie pytanie',
	'A jak myslisz?',
	'Zapytaj o to kogos bliskiego',
	'Oczywiscie ze tak',
	'Tego nie wiem, ale masz piekny usmiech',
]

const shakeBall = () => {
	ball.classList.add('shake-animation')
	error.textContent = ''
	answer.innerHTML = ``
	setTimeout(checkQuestion, 1000)
}

const resetBall = () => {
	ball.classList.remove('shake-animation')
}

const checkQuestion = () => {
	if (question.value === '') {
		error.textContent = 'Musisz zadac pytanie'
	} else if (question.value.includes('?')) {
		let number = Math.floor(Math.random() * 8)
		answer.innerHTML = `<span>Odpowiedż:</span> ${answerss[number]}`
	} else {
		error.textContent = `Pytanie musisz zakonczyc znakiem "?"`
	}
	resetBall()
}
const enterClick = click => {
	if (click.key === 'Enter') {
		shakeBall()
	}
}

question.addEventListener('keyup', enterClick)
ball.addEventListener('click', shakeBall)
