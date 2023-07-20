const home1 = document.getElementById("home1")
const home2 = document.getElementById("home2")
const home3 = document.getElementById("home3")
const guest1 = document.getElementById("guest1")
const guest2 = document.getElementById("guest2")
const guest3 = document.getElementById("guest3")
const newBtn = document.getElementById("new-btn")
const homeScoreEl = document.getElementById("homeScoreEl")
const guestScoreEl = document.getElementById("guestScoreEl")

let homeScore = 0
let guestScore = 0

render()

home1.addEventListener("click", function() {
    homeScore += 1
    render()
})

home2.addEventListener("click", function() {
    homeScore += 2
    render()
})

home3.addEventListener("click", function() {
    homeScore += 3
    render()
})

guest1.addEventListener("click", function() {
    guestScore += 1
    render()
})

guest2.addEventListener("click", function() {
    guestScore += 2
    render()
})

guest3.addEventListener("click", function() {
    guestScore += 3
    render()
})

newBtn.addEventListener("dblclick", function (){
    homeScore = 0
    guestScore = 0
    render()
})

function render() {
    if(isWinning() === "home") {
        homeScoreEl.innerHTML = `<font color ="green">${homeScore}</font>`
        guestScoreEl.innerHTML = `<font color="red">${guestScore}</font>`
    }
    else if(isWinning() === "guest") {
        guestScoreEl.innerHTML = `<font color ="green">${guestScore}</font>`
        homeScoreEl.innerHTML = `<font color="red">${homeScore}</font>`
    }
    else {
        guestScoreEl.innerHTML = `<font color="yellow">${guestScore}</font>`
        homeScoreEl.innerHTML = `<font color="yellow">${homeScore}</font>`
    }
}

function isWinning() {
    let isWinning = ""
    if(homeScore > guestScore) {
        isWinning = "home"
    }
    else if(guestScore > homeScore) {
        isWinning = "guest"
    }
    return isWinning
}