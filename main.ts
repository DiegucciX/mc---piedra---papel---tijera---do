radio.onReceivedNumber(function (receivedNumber) {
    if (HisPlay == 1) {
        music.playTone(494, music.beat(BeatFraction.Sixteenth))
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (HisPlay == 2) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (HisPlay == 3) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(MyPlay)
    if (MyPlay == 1) {
        music.playTone(494, music.beat(BeatFraction.Sixteenth))
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (MyPlay == 2) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (MyPlay == 3) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
let MyPlay = 0
let HisPlay = 0
radio.setGroup(10)
basic.forever(function () {
    HisPlay = randint(1, 3)
})
basic.forever(function () {
    MyPlay = randint(1, 3)
})
