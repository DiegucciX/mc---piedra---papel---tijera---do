input.onGesture(Gesture.Shake, function () {
    if (jugada == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (jugada == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (jugada == 3) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
    	
    }
})
radio.onReceivedString(function (receivedString) {
	
})
let jugada = 0
radio.setGroup(10)
basic.forever(function () {
    jugada = randint(1, 3)
})
