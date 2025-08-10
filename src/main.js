import './style.css'

const logo_width = document.querySelector("#logo img").clientWidth
document.getElementById("logo").style.paddingLeft = logo_width + "px"

const counter = (id, amount, activity) => {
	const container = document.createElement("div")
	container.setAttribute("title", amount + " " + activity)
	container.setAttribute("id", id)
	container.setAttribute("class", "active-counter")

	const amount_view = document.createElement("div")
	amount_view.setAttribute("class", "amount-view")
	amount_view.innerHTML = amount

	const activity_view = document.createElement("div")
	activity_view.setAttribute("class", "activity-view")
	activity_view.innerHTML = activity

	const decrement = () => {
		const n = Number(amount_view.innerHTML)
		amount_view.innerHTML = --n
		if (n === 0)
			container.classList.add("completed")
	}

	const tog_status = () => {}

	const tog_
}
