import './style.css'

const logo_width = document.querySelector("#logo img").clientWidth
document.getElementById("logo").style.paddingLeft = logo_width + "px"

const placeholder = (() => {
	const n = Math.floor(Math.random() * 10000 + 1) + ""
	if (n.length < 4)
		return (new Array(4 - n.length)).fill(0).join("")
	return n
})
document.querySelector("nav input").placeholder = "User" + placeholder()
