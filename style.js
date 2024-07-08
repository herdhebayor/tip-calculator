/** @format */

const tipButtons = document.querySelectorAll('.tip-percent')
const billInput = document.getElementById('bill')
const peopleInput = document.getElementById('Tip')
const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
	input.addEventListener('click', () => {
		input.value = ''
		input.style.textAlign = 'right'
	})
})

function calculateTip(buttonVal) {
	if (
		!billInput.value.match(/\d+/) ||
		billInput.value == 0 ||
		billInput.value == ''
	) {
		billInput.classList.add('errorBorder')
		peopleInput.classList.remove('errorBorder')
		document.getElementById('tipError').innerHTML = ''
		document.getElementById('valError').innerHTML = "input can't be 0 or empty"
	} else if (
		!peopleInput.value.match(/\d+/) ||
		peopleInput.value == 0 ||
		peopleInput.value == ''
	) {
		peopleInput.classList.add('errorBorder')
		billInput.classList.remove('errorBorder')
		document.getElementById('tipError').innerHTML = "input can't be 0 or empty"
		document.getElementById('valError').innerHTML = ''
	} else {
		billInput.classList.remove('errorBorder')
		peopleInput.classList.remove('errorBorder')
		document.getElementById('tipError').innerHTML = ''
		document.getElementById('valError').innerHTML = ''
		const tipAmount = (buttonVal / 100) * billInput.value
		const tipPerPerson = tipAmount / peopleInput.value
		document.getElementById('total-tip').innerHTML = tipAmount.toFixed(2)
		document.getElementById('value-per-person').innerHTML =
			tipPerPerson.toFixed(2)
	}
}
let activeBtn = null

tipButtons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		let target = e.target
		target.focus()
		const targetVal = target.innerText.match(/\d+/)
		calculateTip(targetVal)
	})
})

const customBtn = document.getElementById('custom-btn')
customBtn.classList.remove('active')
customBtn.addEventListener('keydown', (e) => {
	customBtn.classList.add('active')
	if (e.key === 'Enter') {
		if (!customBtn.value.match(/\d+/)) {
			customBtn.classList.add('error')
		} else {
			calculateTip(customBtn.value)
		}
	}
})

document.querySelector('.reset-btn').addEventListener('click', () => {
	window.location.reload()
})
