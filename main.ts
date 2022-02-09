radio.onReceivedNumber(function (receivedNumber) {
    HisPlay = randint(1, 3)
    if (HisPlay == 1) {
        music.playTone(494, music.beat(BeatFraction.Sixteenth))
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(1500)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(4)
        }
    } else if (HisPlay == 2) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1500)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        }
    } else if (HisPlay == 3) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.pause(1500)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        } else if (receivedNumber == 2) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        }
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    MyPlay = randint(1, 3)
    radio.sendNumber(MyPlay)
    if (MyPlay == 1) {
        music.playTone(494, music.beat(BeatFraction.Sixteenth))
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (MyPlay == 2) {
        music.playTone(392, music.beat(BeatFraction.Sixteenth))
        music.playTone(330, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (MyPlay == 3) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
let MyPlay = 0
let HisPlay = 0
radio.setGroup(10)
