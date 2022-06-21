basic.forever(function () {
    for (let index = 0; index <= 255; index++) {
        radio.setGroup(index)
        radio.sendString("^_^")
        radio.sendNumber(101)
    }
})
loops.everyInterval(100, function () {
	
})
