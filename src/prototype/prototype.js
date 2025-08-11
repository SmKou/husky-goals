const FREQUENCY = ["DAY", 'WEEK', 'MONTH', 'YEAR']
const DAY = 0

const counters = {
	"Push-ups": {
		count: 20,
		end_count: 0
	},
	"Write letters and seal": {
		count: 500,
		end_count: 0
	},
	"Test counter": {
		count: 2,
		end_count: 0
	},
	"Test tracker task": {
		count: 10,
		end_count: 0
	}
}

const timers = {
	"Read a book": {
		time: [1, 0, 0],
		end_time: []
	},
	"Bake banana bread": {
		time: [0, 30, 0],
		end_time: []
	},
	"Test timer": {
		time: [0, 0, 10],
		end_time: []
	}
}

const tasks = {
	"Evening: Hair oils": {
		description: "Apply batana oil for 20+ min, then shower and apply enrichment oil",
		complete: "Evening shower/routine",
		connected: ["tracker"]
	},
	"Take out garbage": {
		description: "Moved to first floor backroom",
		complete: "Empty bin"
	},
	"Evening meds": {
		sub: [
			"Anti-psychotic",
			"Anti-hypertensive 1",
			"Anti-hypertensive 2",
			"Anti-acid",
			"Anti-menstrual"
		],
		connected: ["tracker"]
	},
	"Test task": {
		description: "A test of the use for a non-connected task",
		complete: "task recorded"
	},
	"Test reminder task": {
		description: "A test of the use for a reminder-connected task",
		complete: "task and reminder recorded",
		connected: ["reminder"]
	},
	"Test tracker task": {
		description: "A test of the use for a tracker task using a counter",
		complete: "task and tracker recorded",
		connected: ["counter", "tracker"]
	}
}

const reminders = {
	"Submit homework: Lilith essay webpage": {
		description: "Intro to Web",
		complete: "Github repo: lilith-essay-page, view in Github Pages"
	},
	"Anti-histamine": {
		description: "Cannot be taken with evening meds (anti-hypertensive 2, minimum 3 hours in-between)",
		complete: "",
		connected: "tracker"
	},
	"Test reminder": {
		description: "A reminder to test CRUD",
		complete: "reminder recorded"
	}
}

const trackers = {
	"Evening: Hair oils": {
		connect_to: "task",
		freq: 1,
		occ: 1,
		increment: [1, 2, 3]
	},
	"Evening meds": {
		freq: 0,
		occ: 1,
		connect_to: "task"
	},
	"Anti-histamine": {
		freq: 0,
		occ: 1,
		connect_to: "reminder"
	},
	"Test tracker task": {
		connect_to: "task",
		freq: 0,
		occ: 2
	}
}

const features = {
	counters,
	timers,
	tasks,
	reminder
}

const related = [
	{
		task: "Evening meds",
		reminder: "Anti-histamine",
		tracker: "Anti-histamine"
	}
]

const user_history = new Map()

const status_btn = (feature, item) => {
	const btn = document.createElement("button")
	btn.setAttribute("class", `status-btn status-${feature}`)

}
